import express from 'express';
const router = express.Router();

// Ruta de verificación para Meta (WhatsApp Business)
router.get('/', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    // Pon aquí el token que tú quieras
    if (mode && token === 'altoke2026') {
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
});

// Ruta para recibir los mensajes de WhatsApp
router.post('/', (req, res) => {
    console.log('Mensaje recibido de WhatsApp:', JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
});

export default router;