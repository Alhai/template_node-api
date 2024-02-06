import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("La variable d'environnement MONGO_URI est requise.");
        }

        const conn = await mongoose.connect(mongoUri);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
