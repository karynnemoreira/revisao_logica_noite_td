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


// //Somar
// let precoTotal = 6
// //console.log(precoTotal = precoTotal + 40) //Forma completa
// console.log(precoTotal += 40) //Forma simplificada

// //ex
// let num = 29
// console.log(num = num + 12) //41 
// console.log(num += 14) //Aqui ele pegou o valor salvo que foi o 41 e somou com o 12, dando 55 
// console.log(num += 10) //55 + 10 = 65

// //Subtrair 
// let num2 = 9
// //console.log(num2 = num2 -= 4)//Forma completa
// console.log(num2 -= 4) //Forma simplificada

// //Multiplicar
// let num3 = 12
// console.log(num3 = num3 * 2) //12*2 = 24
// console.log(num3 *= 2) //24*2 = 48

// //Dividir 
// let num4 = 687
// //console.log(num4 = num4 /= 6)
// console.log(num4 /= 6)


//------LOOPS ----
//LOOPS: SÃO LAÇOS DE REPETIÇÕES, EXECUTAR UMA TAREFA DIVERSAS VEZES.

//IMAGINE UM CONTADOR FEITO DE FORMA MANUAL, CONTANDO DE 1 ATÉ 10 

//let contador = 0

// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)


//while (enquanto) Execute o loop enquanto a condição for verdadeira.

// while(condição){
//     tarefa
//     iteração
// }

//Ex1
let batata = 0

while (batata < 100) {
    batata++  //adicione/some 1 (um) valor ao seu valor atual
    //console.log(batata)
}

//batata inicou com 0 
//batata++ quer dizer o valor 0+1
//agora a batata tem o valor atual de 1, batata ++ quer dizer o valor 1+1... 

//Ex2
let cenoura = 100

while (cenoura < 1000) {
    cenoura += 50
    //console.log(cenoura)
}

//Ex3 - Definindo aumento de salário 

let salario = 1000
while (salario < 5000) {
    salario += 100
    //console.log(`O seu salário atual é de R$ ${salario}`)
}

//Ex4 

let pares = 0
while (pares < 40) {
    pares += 2
    console.log(pares)
}

//Ex5 

let impares = 1
while (impares < 40) {
    impares += 2
    console.log(impares)
}