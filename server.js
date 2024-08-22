const express = require('express');
const { sendEmail } = require('./send-email');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 4000;

app.use(cors())

app.use(express.json());

app.post('/send-email-reservation', async (req, res) => {
  const { to, subject, text, context } = req.body;

  const result = await sendEmail(to, subject, text,context);

    res.status(200).send(result.message);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
