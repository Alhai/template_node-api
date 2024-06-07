"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipDataAccess = void 0;
const relationshipItemModel_1 = __importDefault(require("../models/Relation/relationshipItemModel"));
class RelationshipDataAccess {
    async createRelationship(faqId, categoryId) {
        const existingRelationship = await relationshipItemModel_1.default.findOne({
            faq: faqId,
            category: categoryId,
        });
        if (existingRelationship) {
            throw new Error("Cette question est déjà dans cette catégorie");
        }
        const relationshipItem = await relationshipItemModel_1.default.create({ category: categoryId, faq: faqId });
        return relationshipItem;
    }
    async getAllRelationElement() {
        return await relationshipItemModel_1.default.find({});
    }
}
exports.RelationshipDataAccess = RelationshipDataAccess;
