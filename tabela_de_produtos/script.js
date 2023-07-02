const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sProduto = document.querySelector('#produto')
const sQuantidade = document.querySelector('#quantidade')
const sValor = document.querySelector('#valor')
const sEstoque = document.querySelector('#estoque')
const btnSalvar = document.querySelector('#btnSave')

let itens
let id

function openModal(edit=false, index=0) {
  modal.classList.add('active')

  modal.onclick = e =>{
    if(e.target.className.indexOf('modal-container')!=-1){
      modal.classList.remove('active')
    }
  }
  if (edit) {
    sProduto.value = itens[index].produto
    sQuantidade.value = itens[index].quantidade
    sValor.value = itens[index].valor
    sEstoque.value = itens[index].estoque
    id = index
  } 
  else {
    sProduto.value = ''
    sQuantidade.value = ''
    sValor.value = ''
    sEstoque.value = ''
  }
  
  }

  console.log(openModal());