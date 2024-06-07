import mongoose, { Document, Schema } from "mongoose";

export interface RelationshipItemModel {
  category: String;
  faq: String;
}

export interface IRelationshipModel extends RelationshipItemModel, Document {
  _id: mongoose.Schema.Types.ObjectId;
}

const relationshipDB: Schema = new Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categoryItem",
    require: true,
  },
  faq: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "faqItemModel",
    require: true,
  },
});

export default mongoose.model<IRelationshipModel>(
  "relationItemModel",
  relationshipDB
);