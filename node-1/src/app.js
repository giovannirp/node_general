import express from "express";
import conectaNaDatabase from "../config/dbConnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro)
})

conexao.once("open", () => {
    console.log("conexao com o banco feito com sucesso");
})

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 3,
        titulo: "Novo teste"
    }
];

// funções auxiliares
function buscaLivros(id) {
    return livros.findIndex((livro) => {
        return livro.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de node Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});


export default app;

// mongodb+srv://admin:<db_password>@cluster0.bpxnjky.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0