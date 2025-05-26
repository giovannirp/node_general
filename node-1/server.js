// import http from "http";
import app from "./src/app.js";

const PORT = 3001; 

const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota livors",
    "/autores": "Entrei na rota autores"
}

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/plain" });
//     res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
    console.log("Servidor escutando!");
});