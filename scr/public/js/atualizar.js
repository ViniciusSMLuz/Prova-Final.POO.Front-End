async function atualizarProduto() {
    id = document.getElementById('input-idProduto').value;
    let = produto = {

       "idProduto": document.getElementById('input-idProduto').value,
       "nomeProduto": document.getElementById('input-nomeProduto').value,
       "marcaProduto": document.getElementById('input-marcaProduto').value,
       "unidadeDeMedida": document.getElementById('input-unidadeDeMedida').value,
       "quantidadeProduto": document.getElementById('input-quantidadeEmEstoque').value,
       "descProduto": document.getElementById('input-descProduto').value
    }

    try {
        const response = await fetch(`http://localhost:8080/estoque/atualizar-produto/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });

        if (response.ok) {
            console.log('Produto atualizado com sucesso');
            alert('Produto atualizado com sucesso');
            listarProdutos();
        } else {
            console.error('Falha ao atualizar o Produto:', response.status, response.statusText);
            alert('Falha ao atualizar o Produto:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Erro na requisição de Update:', error);
        alert('Erro na requisição de Update:', error);
    }
    listarProdutos();

}