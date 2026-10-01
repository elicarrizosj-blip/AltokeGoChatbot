import express from 'express';
import { connectDB } from './database.js';
import dotenv from 'dotenv';
import webhookRoutes from './webhook.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar formato JSON
app.use(express.json());

// Intentar conectar a MongoDB Atlas al arrancar el servidor
connectDB();

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.send('¡El servidor del Bot de Viajes está corriendo con éxito!');
});

// Ruta para el Webhook de WhatsApp
app.use('/webhook', webhookRoutes);

// Encender el servidor
app.listen(PORT, () => {
    console.log(`Servidor encendido en el puerto http://localhost:${PORT}`);
});