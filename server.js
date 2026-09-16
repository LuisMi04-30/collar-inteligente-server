const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🐾 Collar Inteligente - Servidor funcionando");
});

// Recibir ubicación del collar
app.post("/ubicacion", (req, res) => {
  const { latitud, longitud } = req.body;

  console.log("📍 Ubicación recibida:");
  console.log("Latitud:", latitud);
  console.log("Longitud:", longitud);

  const mapa = `https://www.google.com/maps?q=${latitud},${longitud}`;

  res.json({
    estado: "ok",
    mensaje: "Ubicación recibida correctamente",
    latitud: latitud,
    longitud: longitud,
    mapa: mapa
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});