let carrinho =0
let total =0
document.querySelectorAll('.adicio').forEach(button =>{
    button.addEventListener('clik' , ()=> {
        const produto ={
            nome:button.dataset.nome,
            preco:parseFloat(button.dataset.preco),
            quant:1,
            img:button.parentElement.querySelector('img').src
        }
        adiconaAocarrinho(produto)
    })
})
function adiconaAocarrinho(produto){
    const indece = carrinho.findIndex(itm => itm.nome === produto.nome)
    if(indece !== -1){
        carrinho[indece].quantidade++
  }else{
    carrinho.push(produto)
  }
  atualizarcarrinho()
}
function atualizarcarrinho(){
    const itns =document.getElementById('itns')
    itns.innerHTML =''
    total = 0
    carrinho.forEach((produto , indece) =>{
        const item = document.createElement('li')
        item.innerHTML =` 
        <img src ="${produto.img}" alt="${produto.nome }" width = "50" heigth ="50">
        ${produto.nome}_Kz ${ produto.preco.toFixed(2)} x ${produto.quant} }
        <button class= "remover" data-indice ="${indece}">remover</button>
          <button class= "remover" data-indice ="${indece}">remover</button>

        `
    })
}