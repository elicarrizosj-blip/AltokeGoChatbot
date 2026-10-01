import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carga las variables del archivo .env
dotenv.config();

export const connectDB = async () => {
  try {
    // Intenta conectarse a la URL de tu .env
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🚀 ¡Conexión exitosa a MongoDB Atlas!');
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error.message);
    process.exit(1); // Detiene el servidor si la conexión falla
  }
};