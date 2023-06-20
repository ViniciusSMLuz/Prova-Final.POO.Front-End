async function deletarProduto(id) {
 
    try {
        const response = await fetch(`http://localhost:8080/estoque/deletar-produto/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            console.log('Produto excluído com sucesso');
            alert('Produto excluído com sucesso');
            listarProdutos();
        } else {
            console.error('Falha ao excluído o Produto:', response.status, response.statusText);
            alert('Falha ao excluído o Produto:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Erro na requisição de deletar-produto:', error);
        alert('Erro na requisição de deletar-produto:', error);
    }
    listarProdutos();
}