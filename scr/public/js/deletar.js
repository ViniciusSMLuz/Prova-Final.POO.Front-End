async function deletarProduto(id) {
 
    try {
        const response = await fetch(`http://localhost:8080/estoque/deletar-produto/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        listarProdutos();

    }catch(err) {
        console.log(err)
    }
}