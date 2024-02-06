import mongoose from 'mongoose';

// Interface pour TokenBlackList
export interface ITokenBlackList  {
    token: string;
}

// Schéma Mongoose pour TokenBlackList
const tokenBlackListSchema = new mongoose.Schema<ITokenBlackList>({
    token: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Ajoute automatiquement les champs createdAt et updatedAt
});

// Création du modèle
export const TokenBlackListModel = mongoose.model<ITokenBlackList>('TokenBlackList', tokenBlackListSchema);
