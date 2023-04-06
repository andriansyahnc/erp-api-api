import { Router } from "express";

import * as controller from "./controllers/index.js";

const router = Router();

router.get('/', controller.getItems)
router.post('/', controller.createItem)
router.patch('/:id', controller.updateItem)

export default router;