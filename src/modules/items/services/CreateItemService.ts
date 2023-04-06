import DatabaseConnection, {CreateOptionsInterface, DocumentInterface} from "@src/database/connection.js";
import {ItemEntity} from "@src/modules/items/entities/item.entity.js";
import {ItemRepository} from "@src/modules/items/repositories/item.repository.js";

interface CreateItemResponseInterface {
    _id: string;
    name: string;
}

export class CreateItemService {
    private db: DatabaseConnection;
    constructor(db: DatabaseConnection) {
        this.db = db;
    }

    public async handle(doc: DocumentInterface, options?: CreateOptionsInterface) {
        const itemEntity = new ItemEntity({
            name: doc.name,
        });

        const itemRepository = new ItemRepository(this.db);
        const createResponse = await itemRepository.create(itemEntity.item, options);
        const readResponse = await itemRepository.read(createResponse._id, { session: options?.session });

        return {
            _id: createResponse._id,
            name: readResponse.name,
        } as CreateItemResponseInterface;
    }
}