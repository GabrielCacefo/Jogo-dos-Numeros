let numeroSecreto=parseInt(Math.random()*100);
let tentativas = 0;
let MAXtentativas = 35; //Tentativas máximas Defido em 35 (Médio) como padrão
let Maxvisor = 35; //Variável que mostra quantas tentativas ainda restam
let debug = 0
// Variáveis Globais

document.getElementById('TR').innerHTML="Tentativas restantes: " +Maxvisor; //Visor de quantas tentativas restantes

function geranumero() //Função que gera um número aleatório entre 0 e 100
{
 numeroSecreto=parseInt(Math.random()*100);
 document.getElementById('x').value="";
 document.getElementById('x').focus();
 tentativas = 0;
 document.getElementById('T').innerHTML="Número Tentativas: " +tentativas;
 Maxvisor = MAXtentativas;
 document.getElementById('TR').innerHTML="Tentativas restantes: " +Maxvisor;
}

function testejogo() //Código Principal
{
 let chute = document.getElementById('x').value;
 if (numeroSecreto < chute) //Se o "Chute" for Abaixo do Número, isso occore
 {
    alert('Você digitou um número maior!');
    tentativas++;
    Maxvisor--;
      }

 else if (numeroSecreto > chute) //Se o "Chute" for Acima de Número, isso acontece
 {
    alert('Você digitou um número menor!');
    tentativas++;
    Maxvisor--;
   }

 else if (numeroSecreto == chute) //Se o "Chute" for igual o Número, isso acontece
 {
    alert('Você acertou!\nJogue denovo\nUm novo número secreto foi gerado');
    geranumero();
 }

 if (tentativas == MAXtentativas) //Se Acabar as tentativas, isso acontece
 {
   alert('Você perdeu!\nNúmero de Tentativas Excedido\nNovo Número Gerado\nNúmero Secreto: '+numeroSecreto) 
   geranumero();
 }
 document.getElementById('TR').innerHTML="Tentativas restantes: " +Maxvisor;  //Comando que mostra as tentativas (Se tirar daqui quebra o visor :/ )
}


function facil() //Seta dificultade para Facil
{
   MAXtentativas = Infinity;
   Maxvisor = Infinity;
   document.getElementById('TR').innerHTML="Tentativas restantes: " +Maxvisor;
}

function medio() //Seta dificultade para Médio
{
   MAXtentativas = 35;
   Maxvisor = 35;
   document.getElementById('TR').innerHTML="Tentativas restantes: " +Maxvisor;
}

function dificil() //Seta dificultade para Difícil
{
   MAXtentativas = 15;
   Maxvisor = 15;
   document.getElementById('TR').innerHTML="Tentativas restantes: " +Maxvisor;
}

function debugon() //Função de Debug, ativa o menu, muda debug para 1 (Ativado)
{ 
         debug = 1;
         document.getElementById('p2').innerHTML="Debug - Número secreto: " +numeroSecreto;
         document.getElementById('p3').innerHTML="Debug - Maxtentativas: " +MAXtentativas;
         document.getElementById('p4').innerHTML="Debug - MaxVisor: " +Maxvisor;
         document.getElementById('p5').innerHTML="Debug - Tentativas: " +tentativas;
         document.getElementById('p6').innerHTML="Debug - Debug: " +debug;
}

function debugoff() //Função de Debug, fecha o menu, muda debug para 0 (Desativado)
{
   debug = 0;
   document.getElementById('p2').innerHTML="";
   document.getElementById('p3').innerHTML="";
   document.getElementById('p4').innerHTML="";
   document.getElementById('p5').innerHTML="";
   document.getElementById('p6').innerHTML="";
}