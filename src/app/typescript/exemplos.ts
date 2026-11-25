import { pi, RandomNumbers } from "./math";

function calcularArea() {
    const obj = {width: 10, height: 30};

    const area = obj.width * obj.height;

    return area;
}

function usuario() {
    const usuario = {
        nome: "Renato",
        idade: 40
    }
}

function calculo() {
    return Math.random() < 5;
}

function validar() {
    const valor = Math.random() < 5 ? 'a' : 'b'

    if (valor === 'a'){
        //...
    } else if (valor === 'b'){
        //...
    }
}

function exibirMensagem(pessoa: string, data: string) {
    console.log(`Olá ${pessoa}, hoje é ${data}`);
}

exibirMensagem('Nicolas', '30/10/2026')

let mensagem: string = 'hello world';

let mensagem2 = 'hello world';

let number1: number = 3.3;

let number2 = 4;

let obj: any = {x: 0};

function olaMundo(mensagem:string) {
    return `Olá Mundo ${mensagem};`
}

function exibirCoordenadas(pt: {x: number, y: number}): string {

    return `${pt.x} ${pt.y}`;

}

exibirCoordenadas({x: 4, y: 2});

type Pessoa = {
    nome: string,
    sobrenome?: string
}

function exibirNome(obj: Pessoa): string {
    let mensagem = `Seu nome é ${obj.nome} ${obj.sobrenome}`;

    return mensagem;
}
//function exibirNome(obj: {nome: string, sobrenome?: string}): string {
 //   let mensagem = `Seu nome é ${obj.nome} ${obj.sobrenome}`;

  //  return mensagem;
//}

exibirNome({nome: 'Nicolas'});

class Point {
    x: number = 0;
    y: number = 0;
}

let p = new Point();
p.x = 4;
p.y = 4;

console.log(`${p.x} ${p.y}`);

class boasVindas {
    mensagem: string;

    constructor(){
        this.mensagem = 'Boas vindas'
    }

}
let m = new boasVindas();

console.log(m.mensagem);

class Saudacoes{
    readonly mensagem: string;
    //readonly só permite alterações pelo construtor.

    constructor(){
        this.mensagem = 'Seja bem vindo!'
    }

//Criação de métodos
    dizerOla(){
        console.log(this.mensagem)
    }
}

class C{
    private _lenght: number = 0;

    get length(): number{
        return this._lenght;
    }

    set length(value: number){
        this._lenght = value;
    }
}

let c = new C();

c.length = 10;

console.log(c.length);  

interface Pingavel{
    ping(): void;

}

class Sonar implements Pingavel{
    ping(): void{
        console.log('ping')
    }
}

let s = new Sonar();

s.ping();

helloWorld();

let r = new RandomNumbers()

console.log(pi)
