import RelationshipMongo, { RelationshipItemModel } from '../models/Relation/relationshipItemModel';

export class RelationshipDataAccess {
   
    async createRelationship(faqId: String, categoryId : String): Promise<RelationshipItemModel> {
        
        const existingRelationship = await RelationshipMongo.findOne({
            faq: faqId,
            category: categoryId,
          });
          if(existingRelationship){
            throw new Error("Cette question est déjà dans cette catégorie")
          }

        const relationshipItem =  await RelationshipMongo.create({category : categoryId , faq : faqId})
        return relationshipItem 
      }

    async getAllRelationElement() : Promise<RelationshipItemModel[]>{  
        return await RelationshipMongo.find({});
    }
}