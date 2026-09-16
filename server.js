const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🐾 Collar Inteligente - Servidor funcionando");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});