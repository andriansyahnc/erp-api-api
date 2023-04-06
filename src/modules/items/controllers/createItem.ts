import {NextFunction, Request, Response} from "express";
import { db } from "@src/database/database.js";
import {validate} from "@src/modules/items/request/create.request.js";
import {CreateItemService} from "@src/modules/items/services/CreateItemService.js";

export const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session = db.startSession();

        db.startTransaction();

        validate(req.body);

        const service = new CreateItemService(db);
        const result = await service.handle(req.body, {session});

        await db.commitTransaction();

        return res.status(201).json({
            _id: `${result._id}`,
        });
    }
    catch (e) {
        next(e);
    }
}
