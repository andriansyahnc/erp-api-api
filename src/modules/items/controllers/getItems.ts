import {NextFunction, Request, Response} from "express";
import {db} from "@src/database/database.js";
import {GetItemService} from "@src/modules/items/services/GetItemService.js";

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const service = new GetItemService(db);
        const result = await service.handle(req.body);
        return res.status(200).send({
            result
        })
    }
    catch (e) {
        next(e);
    }
}
