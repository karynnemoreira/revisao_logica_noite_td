// //console.log é uma função do js que exibe uma mensagem no console do navegador. 

// //console.log("Uhull Sextou!!")

// //Variáveis VAR, LET e CONST 
// //VAR ela tem escopo global, por causar bastante bugs e conflitos não é mais tão utilizada. Posso redefinir valores. 
// var cor = "azul"

// cor = "vermelho"
// //console.log(cor)

// //LET ela tem escopo local, não causa tantos dados e bugs. E é a mais utlizada entre os programadores.  Posso redefinir valores. 
// let animal = "girafa"

// animal = "pato"
// //console.log(animal)

// //CONST é uma variável constante, ELA NÃO MUDA. Não posso redefinir valores. 

// const fruta = "laranja"
// //console.log(fruta)

// //fruta = "uva"
// //Deu erro pq uma variável constante não pode ser alterada.

// //NOMES DAS VARIÁVEIS:  Não podem ser começadas com números e símbolos, exceto? _ e $

// let carro = "uninho" // normal
// let _carro = "pálio" // com _
// let $carro = "siena" // com $
// let carroNovoDaSogra = "strada" //camelcase

// //TIPOS DE VARIÁVEIS

// //number - numérico 
// let ano = 2023 

// //string = valor textual, o valor pode ser envolvido por aspas duplas " ", simples '' ou crase ``  
// let mes = "dezembro" //string
// let dia = 'sexta' //string
// let frase = `Natal está chegando` //string

// //boolean / true ou false (verdadeiro ou falso)
// let feliz = true
// let triste = false

// //console.log(typeof ano) //informa o tipo da variável

// //Vamos ver com calma com o tempo
// let teste = null // valor é nulo
// let teste2 = undefined //valor é indefinido 
// let teste3 = NaN // Não é um valor numérico

// //TemplateString, também é uma string, só que mais elegante, robusta.  Conseguimnos guardar mais informações ou chamar de uma outra forma. E ela é chamda com crase ` `
// // forma de chamar o templateString  `${}` 

// let fraseGrande = `Hoje é ${dia} do mês de ${mes} do ano de ${ano} e lembrando que ${frase}`
// //console.log(fraseGrande)

// let frase2 = `${mes} é o meu mês, quero presente!!`
// //console.log(frase2)

// //console.log( `Uhuulll hoje é ${dia}`) //não está guardado pq está no console.log

// //console.log(ano + dia) //concatenar 2023sexta

// //CONDIÇÃO
// //IF = SE.  Se a informação for verdadeira, faça isso.
// //ELSE = SENÃO. Se a informação não for verdadeira, faça isso. 
// //ELSE IF = SENÃO SE. Usado para nos dar mais opções de escolha.   

// let a = "morango" 

// if(a == "uva"){
// console.log("Essa condição é verdadeira")
// } else{
//     console.log("Eu sou um morango")
// }

// // == valor
// // === valor e tipo
// // != valor diferente
// // !== valor de tipo diferente
// // > 
// // >=
// // < 
// // <=

// //Else If

// let estiloMusical = "sertanejo"

// if(estiloMusical === "Eletrônica"){
// console.log("O estilo é eletrônica")
// } else if(estiloMusical === "sertanejo"){
// console.log("O estilo é sertanejo")
// } else if(estiloMusical === "rock"){
// console.log("O estilo é rock")
// } else{
// console.log("Você não acertou o meu estilo musical")
// }


// let numeroDaSorte = 7

// if(numeroDaSorte == 7){
// console.log("O seu número foi sorteado")
// } else if(numeroDaSorte == 39){
// console.log("O seu número foi sorteado")
// } else if(numeroDaSorte == 87 ){
// console.log("O seu número foi sorteado")
// } else{
//     console.log("Seu número não foi sorteado")
// }


//OPERADORES LÓGICOS

//&& - COMPARAR SE AS DUAS INFORMAÇÕES OU MAIS, SÃO VERDADEIRAS


//---------------

// let a = true
// let b = false

// if(a === true && b === true ){
// console.log("As duas informações são verdadeiras")
// } else{
//     console.log("As informações não estão certas")
// }

//---------------
// let animal1 = "cachorro"
// let animal2 = "papagaio"

// if(animal1 == "zebra" && animal2 == "jacaré"){
// console.log(`Os animais escolhidos são: ${animal1} e ${animal2}`)
// } else{
//     console.log("Essas informações estão erradas")
// }

//---------------


//   || Or/Ou Compara se um OU o outro são verdadeiros

// let carro1 = "palio"
// let carro2 = "hb20"

// if(carro1 === "gol" || carro2 === "hb20"){
// console.log("Um carro OU o outro estão certos")
// } else{
//     console.log("Carros não encontrados")
// }

// //Exemplo Especial 

// let cantora = "Mariah Carey"
// let cantor = "Roberto Carlos"
// let mes = "Dezembro"
// let natal = `Ano novo em Copacabana com participação especial da ${cantora} e ${cantor}`

// //ex1
// if(mes === "Novembro" && mes === "Dezembro"){
// console.log("Especial de fim de ano está chegando")
// }

// //ex2
// if(mes === "Novembro" || cantora === "Mariah Carey" || cantor != "Roberto Carlos"){
// console.log(`Ano novo está chegando, vamos descongelar a ${cantora} e partiu cruzeiro do ${cantor} `)
// } else{
//     console.log("Estamos longe do final do ano")
// }



//OPERADORES DE ATRIBUIÇÃO

// = ATRIBUIÇÃO DE TIPO
// + ATRIBUIÇÃO DE SOMA  +=
// - ATRIBUIÇÃO DE SUBTRAÇÃO -= 
// * ATRIBUIÇÃO DE MULTIPLICAÇÃO *=
// / ATRIBUIÇÃO DE DIVISÃO /=
// ++ ATRIBUI UM INCREMENTO ++ (ADICIONA 1 VALOR)
// -- ATRIBUI UM DECREMENTO -- (RETIRA 1 VALOR)
// % ATRIBUIÇÃO DE RESTO %=  (VAMOS VER COM O TEMPO)

let x = 1
let y = 2

//somar 

console.log(x=x+y) // Forma mais completa de somar

let w = 3
let z = 4
console.log(w+=z) //Forma mais simplicada de somar