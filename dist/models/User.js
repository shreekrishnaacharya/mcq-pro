import { ActiveRecords, Dami, FileHelper, isEmpty, Query, Rid, Url } from "@damijs/core";
import jwt from "jsonwebtoken";
import * as crypto from 'crypto';
class User extends ActiveRecords {
    constructor() {
        super("muser");
        this.old_password = '';
        this.new_password = '';
        this.temp_password = '';
        this.pimage = {};
        this.rules = () => {
            return {
                id: ['number'],
                uid: ['string', { max: 20 }],
                fname: ['required', 'string', { max: 50 }],
                lname: ['required', 'string', { max: 50 }],
                email: ['required', 'email', 'string', { max: 50 }],
                temp_password: [{ rule: "required", message: "Password is required" }, "string", { "min": 5, "max": 20, "message": "{label} can be between 10 and 20 only" }],
                contact: ['required', 'string', { max: 20 }],
                password: ['required', 'string', { max: 200 }],
                old_password: ['string', { max: 200 }],
                img: ['string', { max: 100 }],
                gender: ['string', { oneof: ["Male", "Female", "Other"] }],
                address1: ['string', { max: 50 }],
                address2: ['string', { max: 50 }],
                state: ['string', { max: 50 }],
                authkey: ['required', 'string', { max: 50 }],
                f_code: ['string', { max: 5 }],
                f_date: ['number'],
                f_state: ['number'],
                update_at: [],
                create_at: [],
                status: ['number'],
                pimage: [],
            };
        };
        this.fields = () => {
            return {
                _id: "id",
                uid: "uid",
                email: 'email',
                fname: 'fname',
                lname: 'lname',
                name: (model) => {
                    return model.getFullName();
                },
                image: (model) => {
                    if (isEmpty(model['img'])) {
                        return null;
                    }
                    return Url.to('/api/image', { params: [model['img']], absolute: true });
                },
                image_th: (model) => {
                    if (isEmpty(model['img'])) {
                        return null;
                    }
                    return Url.to('/api/image', { params: [model['img'], 'thumb'], absolute: true });
                },
                gender: "gender",
                contact: "contact",
                address1: 'address1',
                address2: 'address2',
                state: 'state',
                statusCode: 'status',
                create_at: "create_at",
                status: () => {
                    if (this.status == 1) {
                        return "Active";
                    }
                    return "Deactive";
                }
            };
        };
        this.visibility = () => {
            return {
                PASS: [
                    "old_password", "temp_password"
                ],
                STUDENTSS: [
                    "id", "uid"
                ],
            };
        };
        this.init();
    }
    getFullName() {
        return this.getValue("fname") + " " + this.getValue("lname");
    }
    beforeSave(type) {
        if (type == Query.INSERT) {
            this.setValue("authkey", crypto.randomBytes(16).toString('base64'));
            this.setValue('uid', Rid({ len: 3, saperator: '2' }));
        }
        if (!isEmpty(this.getValue('temp_password'))) {
            this.setValue("password", this.hashPassword(this.getValue('temp_password')));
        }
        return Promise.resolve(true);
    }
    getLoginData() {
        const refreshToken = this.getRefreshToken();
        return {
            _id: this.getValue("id"),
            name: this.getFullName(),
            refreshToken: refreshToken,
            token: this.signToken(refreshToken),
        };
    }
    validatePassword(password) {
        let passwordFields = this.getValue("password").split('$');
        let salt = passwordFields[0];
        let hash = crypto.createHmac('sha512', salt).update(password).digest("base64");
        if (hash === passwordFields[1]) {
            return true;
        }
        return false;
    }
    ;
    hashPassword(password) {
        const salt = crypto.randomBytes(16).toString('base64');
        const hash = crypto.createHmac('sha512', salt)
            .update(password)
            .digest("base64");
        return salt + "$" + hash;
    }
    async findById(id) {
        return this.find((query) => {
            return query.andWhere({ id });
        }).one();
    }
    async findByAuthKey(authkey) {
        return await this.find((query) => {
            return query.andWhere({ authkey, status: User.STATUS.active });
        }).one();
    }
    ;
    async findUser(username) {
        return await this.find((query) => {
            return query.andWhere({ email: username, status: User.STATUS.active });
        }).one();
    }
    async findForgotPassword(code) {
        return await this.find((query) => {
            return query.andWhere({ f_code: code, f_state: 1 })
                .andWhere([">", "f_date", Math.floor((new Date().getTime()) / 1000)]);
        }).one();
    }
    setForgotPassword() {
        this.load({
            f_code: Rid({ len: 1, saperator: '' }),
            f_state: 1,
            f_date: (((new Date().getTime()) / 1000) + 7200),
        });
        return this;
    }
    ;
    validateToken(token) {
        try {
            jwt.verify(token, this.getConfig().authSalt);
            // console.log(Dami.hasAuth(token, this), "hasAuth");
            // return true
            if (Dami.hasAuth(token, this)) {
                return true;
            }
        }
        catch (err) {
            console.log(err);
        }
        return false;
    }
    ;
    signToken(refreshToken) {
        const jwtToken = Dami.parseJwt(refreshToken);
        return jwt.sign({
            authkey: this.getAuthKey(),
            name: this.getFullName(),
            sessionid: jwtToken["sessionid"],
        }, (this.getConfig().authSalt), {
            algorithm: "HS256",
            expiresIn: this.getConfig().authExpire,
        });
    }
    getRefreshToken() {
        this.refreshToken = jwt.sign({
            authkey: this.getAuthKey(),
            name: this.getFullName(),
            sessionid: Rid(),
            uid: this.getValue("id")
        }, this.getConfig().refreshSalt, {
            algorithm: "HS256",
            expiresIn: this.getConfig().refreshExpire,
        });
        return this.refreshToken;
    }
    getAuthKey() {
        return this.getValue("authkey");
    }
    ;
    getConfig() {
        return {
            authSalt: "ASnd$j12sa@kaKJQ32WkASn232Ajhw1123ASsak32",
            uniqueSession: false,
            authExpire: 5000,
            refreshSalt: "ASnd$j12sa@kaKJQ32Wsd8912jkkASn232Ajhw1123ASsak32",
            refreshExpire: '1y',
            refreshInactive: 100000 //refreshInactive must be greater or equal to authExpire
        };
    }
    savePimg() {
        if (!isEmpty(this.pimage)) {
            return FileHelper.saveImage(this.pimage, "@user", { size: 300, t_size: 50 }).then(e => {
                if (typeof e !== 'string')
                    return false;
                console.log(e);
                this.setValue('img', e);
                return true;
            });
        }
        return true;
    }
}
User.STATUS = {
    active: 1,
    inactive: 0
};
User.kycStatus = {
    PENDING: 0,
    PROCESSING: 1,
    VERIFIED: 2,
    NOT_VIEIFIED: 3,
};
User.kycType = {
    LICENSES: 0,
    CITIZENSHIP: 1,
    PAN_CARD: 2,
    STUDENTS_CARD: 3,
    OTHER: 4
};
export default User;
