async function listarProdutos() {
    try {
        const response = await fetch("http://localhost:8080/estoque/produtos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        var lista = document.getElementById("lista");
        lista.innerHTML = "";
        result.forEach((produto) => {
            lista.innerHTML += "<ul>";
            lista.innerHTML += `<li>ID: ${produto.idProduto}</li>`;
            lista.innerHTML += `<li>Produto: ${produto.nomeProduto}</li>`;
            lista.innerHTML += `<li>Marca: ${produto.marcaProduto}</li>`;
            lista.innerHTML += `<li>Unidade de medida: ${produto.unidadeDeMedida}</li>`;
            lista.innerHTML += `<li>Quantidade em Estoque: ${produto.quantidadeProduto} ${produto.unidadeDeMedida}</li>`;
            lista.innerHTML += `<li>Descrição: ${produto.descProduto}</li>`;
            lista.innerHTML += "</ul>";
      });
    } catch (erro) {
      console.log(erro);
    }
}
