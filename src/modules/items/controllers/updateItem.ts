import {NextFunction, Request, Response} from "express";

export const updateItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).send({
            result: "ok"
        })
    }
    catch (e) {
        next(e);
    }
}
