import { persistirPessoa } from "../controller/bancoDeDados";

export class Pessoa {

    // atributos da classe
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    //método construtor
    public constructor (_nome: string, _cpf: string, _data_nascimento: Date, _telefone: string, _endereco: string, _altura: number, _peso: number) {
            
            this.nome = _nome; 
            this.cpf = _cpf;
            this.data_nascimento = _data_nascimento;
            this.telefone = _telefone;
            this.endereco = _endereco;
            this.altura = _altura;
            this.peso = _peso;
    }

    // métodos GETTERS and SETTERS
    /**
     * Retorna o nome da pessoa
     * 
     * @returns nome : nome da pessoa
     */
    public getNome() {  
        return this.nome;
    }

    /**
     * Retorna o CPF da pessoa
     * 
     * @returns cpf : cpf da pessoa 
     */
    public getCPF() {
        return this.cpf;
    }

    public getDataNascimento() {
        return this.data_nascimento;
    }


    public getTelefone() {
        return this.telefone;
    }


    public getEndereco() {
        return this.endereco;
    }


    public getAltura() {
        return this.altura;
    }

    public getPeso() {
        return this.peso;
    }

    public mostraPessoa() {
        console.log(`Nome: ${this.nome}
        CPF: ${this.cpf}
        Data de nascimento: ${this.data_nascimento.getUTCDate()}/${this.data_nascimento.getMonth()}/${this.data_nascimento.getFullYear()}
        Telefone: ${this.telefone}
        Endereço: ${this.endereco}
        Altura: ${this.altura}
        Peso: ${this.peso}`);
    }

    // implementar os métodos
    public falar():void {
        // lógica de negócio
        console.log(`${this.nome} está falando...`);
    }

    public falarFrase(_frase: string):void {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }

    public andar():void {
        console.log(`${this.nome} está andando...`);
    }

    public andarQuilometros(quilometros: number):void {
        setTimeout(() => {
            console.log(`${this.nome} caminhou ${quilometros} quilometros`);
        }, 3000);
    }

    public comer(): void {
        console.log(`${this.nome} está comendo...`);
    }

    public comerPrato(prato: string):void {
        console.log(`${this.nome} está comendo ${prato}`);
    }

}