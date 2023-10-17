let student = prompt('Qual o nome do(a) aluno(a)?')
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?") 

let average = (Number(n1) + Number(n2) + Number (n3)) / 3

let result = average > 7 

average = average.toFixed(2)

if (result) {
  alert("A média do(a) Aluno(a) " + student + " é: " + average + "\nParabéns, "  + student +  " você foi aprovado no concurso!")
} else {
  alert("A média do(a) Aluno(a) " + student + " é: " + average + "\nNão foi dessa vez, "  + student +  ". Tente Novamente!")
} 