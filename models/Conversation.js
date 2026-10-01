import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  phoneNumber: { 
    type: String, 
    required: true, 
    unique: true 
  },
  currentStep: { 
    type: String, 
    default: 'INICIO', // Pasos del bot: INICIO, ESPERANDO_DESTINO, ESPERANDO_UBICACION, ESPERANDO_CONFIRMACION, DERIVADO
    required: true 
  },
  tripDetails: {
    destination: String,
    pickupLocation: String,
    estimatedCost: Number
  },
  // Registra la hora exacta de la última respuesta del cliente
  lastInteraction: { 
    type: Date, 
    default: Date.now, 
    required: true 
  }
});

// 🔥 EL TEMPORIZADOR DE 10 MINUTOS (600 segundos):
// Esta regla le dice a MongoDB Atlas que elimine de forma automática 
// este documento 600 segundos después de la fecha en 'lastInteraction'
conversationSchema.index({ lastInteraction: 1 }, { expireAfterSeconds: 600 });

export const Conversation = mongoose.model('Conversation', conversationSchema);