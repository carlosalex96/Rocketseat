/* 
  - [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par
- [ ]  Verifique se os dois números inseridos são iguais
*/

let n1 = prompt("Insira o primeiro número")
let n2 = prompt("Insira o segundo número")


let sum = Number(n1) + Number(n2)
let sub = Number(n1) - Number(n2)
let multi = Number(n1) * Number(n2)
let devide = Number(n1) / Number(n2).toFixed(2)
let rest = Number(n1) % Number(n2)

if (sum % 2 == 0) {
  alert ("A soma dos números é par")
} 
if (n1 == n2) {
  alert("os números são iguais")
}

alert(`
A soma é ${sum}
A subtração é ${sub}
A multiplicação é ${multi}
A divisão é ${devide}
A resto da divisão é ${rest}
`)


