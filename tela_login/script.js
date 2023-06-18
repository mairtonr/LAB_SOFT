const input = document.getElementById("email")
var senha = document.getElementById("senha")
var btn = document.getElementById("btn1")
var saida = document.getElementById("saida")

function verificarVazio() {
  var valueInput = input.value
  var valueSenha = senha.value

  
  if (valueInput === ""  || valueInput === null || valueInput === 0 || valueSenha === "" || valueSenha === null || valueSenha ===0) {
    saida.innerHTML = `<p>Preencha todos os campos</p>`
    return 
  }
  else if (valueInput === "admin" && valueSenha === "admin") {
    location.href = "../tabela_de_produtos/index.html"
    alert("safe")
  }
  else {
    saida.innerHTML = `<p>User ou Senha inválidos</p>`
  }
}
