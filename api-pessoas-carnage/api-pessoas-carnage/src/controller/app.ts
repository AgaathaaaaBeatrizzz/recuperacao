import express from "express";
import { Pessoa } from "../model/Pessoa";
import cors from 'cors';
import { inicializarPessoas, listarPessoas, persistirPessoa } from "./bancoDeDados";

// Inicializa uma lista de pessoas
inicializarPessoas();

// Cria o servidor express
const app = express();
// Define a porta que o servidor vai escutar as requisições
const port: number = 3000;

// Habilitando o uso de JSON no servidor express
app.use(express.json());

app.use(cors());

// Primeira rota, a rota principal do servidor
app.get('/', (_req: any, res: { send: (arg0: { mensagem: string; }) => void; }) => {
    console.log('Recebi sua requisição');

    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});

// Rota para cadastrar uma pessoa
app.post('/cadastro', (req: { body: { nome: any; cpf: any; data_nascimento: any; telefone: any; endereco: any; altura: any; peso: any; }; }, res: { json: (arg0: { mensagem: string; }) => void; }) => {
    const { nome, cpf, data_nascimento, telefone, endereco, altura, peso } = req.body;

    const pessoa = new Pessoa(nome, 
        cpf, 
        new Date(data_nascimento),
        telefone,
        endereco,
        altura,
        peso);

    console.log(pessoa);

    persistirPessoa(pessoa);

    res.json({ mensagem: "Pessoa cadastrada com sucesso"});
});

// Rota para consultar pessoas
app.get('/pessoas', (_req: any, res: { json: (arg0: Pessoa[]) => void; }) => {
    const listaDePessoas = listarPessoas();

    console.log(`Retornando a lista das pessoas cadastradas`);

    res.json(listaDePessoas);
});

// Servidor sendo executado
app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});
