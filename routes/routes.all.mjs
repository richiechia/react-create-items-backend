import { Router } from 'express';

import db from '../db/models/index.mjs';
// import logger1 from '../middlewares/logger.mjs';

import InitItemsController from '../controllers/item.mjs';

const router = Router();

const itemController = new InitItemsController(db);

const paramHome = '/items';
router.get(`${paramHome}`, itemController.index);

export default router;
