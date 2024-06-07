"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.faqRouter = void 0;
const express_1 = __importDefault(require("express"));
const faq_controller_1 = require("../controllers/faq.controller");
const router = express_1.default.Router();
exports.faqRouter = router;
const faqController = new faq_controller_1.FaqController();
router.get('/', (req, res) => faqController.findAllFaqs(req, res));
router.get('/:id', (req, res) => faqController.findFaqById(req, res));
router.post('/', (req, res) => faqController.createFaqItem(req, res));
router.put('/:id', (req, res) => faqController.updateFaqItemById(req, res));
router.delete('/:id', (req, res) => faqController.deleteFaqItemById(req, res));
