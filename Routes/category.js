import express from 'express';
import {
    getCategories,
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory
} from '../Controllers/categoryCn.js';
import { isAdmin } from '../Middlewares/isAdmin.js';

const categoryRouter = express.Router();

categoryRouter.route('/').get(getCategories).post(isAdmin, createCategory);
categoryRouter.route('/:id').get(getCategory).patch(isAdmin, updateCategory).delete(isAdmin, deleteCategory);

export default categoryRouter;