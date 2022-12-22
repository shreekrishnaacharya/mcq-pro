import { NextFunction, Request, Response } from "express";
import { Controller, Methods, HttpCode, Dami, QueryBuild } from "@damijs/core";
import Admin from "../../../models/User";
class AuthController extends Controller<Admin> {
    constructor() {
        super(Admin);
    }

    beforeAction = () => {
        return [];
    };

    requiredLogin = () => {
        return true;
    };

    login = async (req: Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body;
        if (username === undefined || password == undefined) {
            res.status(HttpCode.BAD_REQUEST).send("username and password is required");
            next();
            return;
        }
        const mod = this.getModel();
        const model = await mod.findUser(username);

        if (model === null) {
            res.sendStatus(HttpCode.FORBIDDEN);
        } else {
            if (model.validatePassword(password)) {
                const loginData = model.getLoginData();
                Dami.setAuth(loginData.refreshToken,model);
                res.status(HttpCode.OK).send(loginData);
            } else {
                res.sendStatus(HttpCode.FORBIDDEN);
            }
        }
        next();
    }

    refresh = async (req: Request, res: Response, next: NextFunction) => {
        const mod = new Admin();
        if (Dami.hasAuth(req.body.refreshToken, mod)) {
            const { authkey } = Dami.parseJwt(req.body.refreshToken);
            const model = await mod.findByAuthKey(authkey);
            if (model) {
                res.status(HttpCode.OK).send({ token: model.signToken(req.body.refreshToken) });
            } else {
                res.sendStatus(HttpCode.UNAUTHORIZED);
            }
        } else {
            res.sendStatus(HttpCode.UNAUTHORIZED);
        }
        next();
    }

    logout = async (req: Request, res: Response, next: NextFunction) => {
        const mod = new Admin();
        Dami.deleteAuth(req.authToken, mod.getConfig());
        res.status(HttpCode.ACCEPTED).send("Logout"); //return success request status
        return next();
    }

    signup = async (req: Request, res: Response, next: NextFunction) => {
        const model = this.getModel();
        try {
            await model.find((query: QueryBuild) => {
                query.select(["email"], true);
                return query.andWhere({ email: req.body.email });
            }).one();
            if (!model.isEmpty) {
                // await model.delete(model.getValue("id"));
                model.addError("email", "Email already exists");
                res.status(HttpCode.BAD_REQUEST).send(model.getErrors()); //return bad request status
                return next();
            }

            model.reset();
            if (model.load(req.body)) {
                if (!model.validate()) {
                    res.status(HttpCode.BAD_REQUEST).send(model.getErrors()); //return bad request status
                    return next();
                }
                if (await model.save(false)) {
                    res.sendStatus(HttpCode.ACCEPTED); //return 202 on success
                } else {
                    res.sendStatus(HttpCode.BAD_REQUEST); //return bad request status
                }
            } else {
                res.sendStatus(HttpCode.NOT_ACCEPTABLE);
            }
        } catch (err) {
            console.log(err);
            res.status(HttpCode.INTERNAL_SERVER_ERROR);
        }
        next();
    }

    route = () => {
        return [
            { method: Methods.POST, path: "/login", action: "login" },
            { method: Methods.POST, path: "/refreshtoken", action: "refresh" },
            { method: Methods.GET, path: "/logout", action: "logout" },
            { method: Methods.POST, path: "/signup", action: "signup" },
        ];
    }
}

export default AuthController;