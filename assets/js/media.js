function verificarMedia() {
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
  
    var media = (nota1 + nota2) / 2;
  
    if (media >= 6) {
      console.log(`A média é: ${media} e você foi Aprovado`);
      alert (`A média é: ${media} e você foi Aprovado`);
    } 
    else if (media >= 5 && media < 6) {
      console.log(`A média é: ${media} e você foi Aprovado`);
      alert (`A média é: ${media} e você está em Exame`);
    }
    else {
      console.log(`A média é: ${media} e você foi Aprovado`);
      alert (`A média é: ${media} e você foi Reprovado`);
    }
  }