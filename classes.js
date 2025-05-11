export class Cliente {
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
        this.dataCadastro = new Date().toISOString();
    }
}