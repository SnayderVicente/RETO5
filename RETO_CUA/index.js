// Importar la librería  
const express = require('express');  

// Agrega  
const PORT = 3000;  

// Objetos para llamar los métodos de express  
const app = express();   

// Ruta de archivos estáticos  
app.use(express.static("public"));   

// Escucha conexiones en el puerto 3000 y muestra por consola la dirección web  
app.listen(PORT, () => console.log(`http://54.159.47.224:${PORT}`));