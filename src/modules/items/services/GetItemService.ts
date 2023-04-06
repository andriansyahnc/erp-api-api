import DatabaseConnection, {CreateOptionsInterface, DocumentInterface} from "@src/database/connection.js";
import {ItemEntity} from "@src/modules/items/entities/item.entity.js";
import {ItemRepository} from "@src/modules/items/repositories/item.repository.js";

export class GetItemService {
    private db: DatabaseConnection;
    constructor(db: DatabaseConnection) {
        this.db = db;
    }

    public async handle(doc: DocumentInterface, options?: CreateOptionsInterface) {
        const itemRepository = new ItemRepository(this.db);
        const readResponse = await itemRepository.readMany({
            fields: "",
            filter: {},
            page: 1,
            pageSize: 5,
            sort: "",
        });

        return readResponse;
    }
}