import { CategoryFaqController } from '../controllers/category-faq.controller';
import express from 'express';

const router = express.Router();
const categoryFaqController = new CategoryFaqController();


router.get('', (req, res) => categoryFaqController.findAllCategories(req, res));
router.get('/:id', (req, res) => categoryFaqController.findCategoryById(req, res));
router.post('', (req, res) => categoryFaqController.createCategory(req, res));
router.put('/:id', (req, res) => categoryFaqController.updateCategoryById(req, res));
router.delete('/:id', (req, res) => categoryFaqController.deleteCategoryById(req, res));

export { router as categoryFaqRouter };