/*
 Os Namespaces são uma forma específica do TypeScript para organizar código. 
 Namespaces são simplesmente objetos JavaScript nomeados no namespace global. 
 Isso torna os namespaces uma construção muito simples de usar.
*/

import { Pessoa, Pessoa1 } from "./module";

console.log(`Importando pessoa1: ${Pessoa1.nome}`);
console.log(`Importando pessoa1: ${Pessoa1.calc()}`);
