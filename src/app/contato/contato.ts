export class Contato {

id: number;
nome: String;
sobrenome: String;
email: String;
favorito: boolean;
foto: any;

constructor(nome: String, sobrenome: String, email:String){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
}


}