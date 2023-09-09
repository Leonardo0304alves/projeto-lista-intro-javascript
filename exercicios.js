// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number (prompt ( ))
let largura =  Number (prompt())
let calculaAreaRetangulo = (altura * largura)
console.log(calculaAreaRetangulo) 

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number (prompt( 'Qual ano estamos?'))
  const anoDeNascimento = Number (prompt( 'Que ano você nasceu?'))
  const imprimeIdade = anoAtual - anoDeNascimento
  console.log (imprimeIdade)

}

// EXERCÍCIO 03
function calculaIMC( peso, altura) {
  // implemente sua lógica aqui
   const Imc = peso / (altura ** 2)     
  return Imc
}
  

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
   nome = (prompt ('Qual seu nome?' ))
  idade = Number (prompt ('Qual sua idade?' ))
  let email = (prompt ('Qual seu email?' ))
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
    
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = (prompt ('Qual sua cor favorita?'))
  let cor2 = (prompt ('Qual sua cor favorita?'))
  let cor3 = (prompt ('Qual sua cor favorita?'))
  let imprimeTresCoresFavoritas = [cor1 , cor2 , cor3 ]
  console.log (imprimeTresCoresFavoritas)


}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  const letraMaiuscula = string.toUpperCase()
  return letraMaiuscula
 

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
      calculaIngressosEspetaculo = custo / valorIngresso 
  return calculaIngressosEspetaculo
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui 
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const lowercaseString1 = string1.toLowercase
  const lowercaseString2 = string2.toLowercase
   
  return lowercaseString1 === lowercaseString2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui


}