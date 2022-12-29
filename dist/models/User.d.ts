import { ActiveRecords, IAuth, _IUserConfig } from "@damijs/core";
declare class User extends ActiveRecords implements IAuth {
    static STATUS: {
        active: number;
        inactive: number;
    };
    static kycStatus: {
        PENDING: number;
        PROCESSING: number;
        VERIFIED: number;
        NOT_VIEIFIED: number;
    };
    static kycType: {
        LICENSES: number;
        CITIZENSHIP: number;
        PAN_CARD: number;
        STUDENTS_CARD: number;
        OTHER: number;
    };
    old_password: string;
    new_password: string;
    temp_password: string;
    pimage: any;
    refreshToken: string;
    constructor();
    rules: () => {
        id: string[];
        uid: (string | {
            max: number;
        })[];
        fname: (string | {
            max: number;
        })[];
        lname: (string | {
            max: number;
        })[];
        email: (string | {
            max: number;
        })[];
        temp_password: (string | {
            rule: string;
            message: string;
            min?: undefined;
            max?: undefined;
        } | {
            min: number;
            max: number;
            message: string;
            rule?: undefined;
        })[];
        contact: (string | {
            max: number;
        })[];
        password: (string | {
            max: number;
        })[];
        old_password: (string | {
            max: number;
        })[];
        img: (string | {
            max: number;
        })[];
        gender: (string | {
            oneof: string[];
        })[];
        address1: (string | {
            max: number;
        })[];
        address2: (string | {
            max: number;
        })[];
        state: (string | {
            max: number;
        })[];
        authkey: (string | {
            max: number;
        })[];
        f_code: (string | {
            max: number;
        })[];
        f_date: string[];
        f_state: string[];
        update_at: any[];
        create_at: any[];
        status: string[];
        pimage: any[];
    };
    getFullName(): string;
    fields: () => {
        _id: string;
        uid: string;
        email: string;
        fname: string;
        lname: string;
        name: (model: User) => string;
        image: (model: any) => string;
        image_th: (model: any) => string;
        gender: string;
        contact: string;
        address1: string;
        address2: string;
        state: string;
        statusCode: string;
        create_at: string;
        status: () => "Active" | "Deactive";
    };
    visibility: () => {
        PASS: string[];
        STUDENTSS: string[];
    };
    beforeSave(type: string): Promise<boolean>;
    getLoginData(): any;
    validatePassword(password: string): boolean;
    hashPassword(password: string): string;
    findById(id: number): Promise<this>;
    findByAuthKey(authkey: string): Promise<this>;
    findUser(username: string): Promise<this>;
    findForgotPassword(code: string): Promise<this>;
    setForgotPassword(): any;
    validateToken(token: string): boolean;
    signToken(refreshToken: string): string;
    getRefreshToken(): string;
    getAuthKey(): string;
    getConfig(): _IUserConfig;
    savePimg(): true | Promise<boolean>;
}
export default User;
