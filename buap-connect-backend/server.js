const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());          // Permite conexión entre frontend y backend
app.use(express.json());  // Permite recibir JSON en las peticiones

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('🚀 API BUAP Connect funcionando');
});

// Configurar puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));