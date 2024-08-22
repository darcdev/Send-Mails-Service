module.exports.template_reservation_hotel = ({data}) => {
    return `
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmación de Reserva</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                  color: #333;
              }
              .container {
                  max-width: 600px;
                  margin: 50px auto;
                  background-color: #ffffff;
                  padding: 20px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                  text-align: center;
                  padding: 10px 0;
                  background-color: #4CAF50;
                  color: #ffffff;
              }
              .header h1 {
                  margin: 0;
                  font-size: 24px;
              }
              .content {
                  padding: 20px;
              }
              .content h2 {
                  color: #4CAF50;
                  margin-bottom: 20px;
              }
              .content p {
                  margin: 10px 0;
              }
              .content .details {
                  background-color: #f9f9f9;
                  padding: 10px;
                  border: 1px solid #ddd;
              }
              .footer {
                  text-align: center;
                  padding: 10px 0;
                  color: #777;
                  font-size: 12px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>¡Reserva Confirmada!</h1>
              </div>
              <div class="content">
                  <h2>Tu reserva ha sido creada con éxito</h2>
                  <p>Estimado/a cliente,</p>
                  <p>Nos complace informarte que tu reserva ha sido confirmada. A continuación, encontrarás los detalles de tu reserva:</p>
                  <div class="details">
                      <p><strong>Nombre del Hotel: </strong>${data.hotel}</p>
                      <p><strong>Fecha de Llegada:</strong>${data.checkIn}</p>
                      <p><strong>Fecha de Salida:</strong>${data.checkOut}</p>
                      <p><strong>Número de Huéspedes:</strong>${data.numGuests} ${data.numGuests == 1 ? "Huesped" : "Huespedes"}</p>
                      <p><strong>Tipo de Habitación:</strong> ${data.typeRoom}</p>
                  </div>
                  <p>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
                  <p>Gracias por elegir ultraHotels.</p>
              </div>
              <div class="footer">
                  <p>ultraHotels | Todos los derechos reservados © 2024</p>
              </div>
          </div>
      </body>
    `
}