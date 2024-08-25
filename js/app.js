let totalGeral = 0;
limpar();

function adicionar() {
    // recupear valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;

    // adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
                                                    <section class="carrinho__produtos__produto">
                                                    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
                                                    </section>
                                               </section>`;

    // atualiza o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('lista-produtos').innerHTML = '';

}

