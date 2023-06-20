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
            // Criação do elemento div com a classe "col-sm-6 mb-3 mb-sm-0 paddingCard"
            const divCol = document.createElement("div");
            divCol.className = "col-sm-6 mb-3 mb-sm-0 paddingCard";
          
            // Criação do elemento div com a classe "card"
            const divCard = document.createElement("div");
            divCard.className = "card";
          
            // Criação do elemento div com a classe "card-header"
            const divCardHeader = document.createElement("div");
            divCardHeader.className = "card-header";
            divCardHeader.textContent = `${produto.idProduto}`;
          
            // Criação do elemento div com a classe "card-body"
            const divCardBody = document.createElement("div");
            divCardBody.className = "card-body";
          
            // Criação do elemento h4 com a classe "card-title"
            const h4CardTitle = document.createElement("h4");
            h4CardTitle.className = "card-title";
            h4CardTitle.textContent = `${produto.nomeProduto}`;
          
            // Criação do elemento p com a classe "card-text"
            const pCardText = document.createElement("p");
            pCardText.className = "card-text";
            pCardText.textContent = `Descrição: ${produto.descProduto}`;
          
            // Criação do elemento ul com a classe "list-group list-group-flush"
            const ulListGroup = document.createElement("ul");
            ulListGroup.className = "list-group list-group-flush";
          
            // Criação dos elementos li com a classe "list-group-item"
            const liMarcaProduto = document.createElement("li");
            liMarcaProduto.className = "list-group-item";
            liMarcaProduto.textContent = `Marca: ${produto.marcaProduto}`;
          
            const liUnidadeDeMedida = document.createElement("li");
            liUnidadeDeMedida.className = "list-group-item";
            liUnidadeDeMedida.textContent = `Unidade De Medida: ${produto.unidadeDeMedida}`;
          
            const liQuantidadeProduto = document.createElement("li");
            liQuantidadeProduto.className = "list-group-item";
            liQuantidadeProduto.textContent = `Quantidade em Estoque: ${produto.quantidadeProduto} ${produto.unidadeDeMedida}`;
          
            // Criação do elemento div com a classe "card-body"
            const divCardBodyButtons = document.createElement("div");
            divCardBodyButtons.className = "card-body";
          
            // Criação dos elementos botões
            const buttonAtualizarProduto = document.createElement("button");
            buttonAtualizarProduto.type = "button";
            buttonAtualizarProduto.className = "btn btn-outline-warning me-2";
            buttonAtualizarProduto.textContent = "Atualizar Produto";
            buttonAtualizarProduto.addEventListener("click", () => {
              atualizarProduto(produto.idProduto);
            });
          

            const buttonDeletarProduto = document.createElement("button");
            buttonDeletarProduto.type = "button";
            buttonDeletarProduto.className = "btn btn-outline-danger me-2";
            buttonDeletarProduto.textContent = "Deletar Produto";
            buttonDeletarProduto.addEventListener("click", () => {
              deletarProduto(produto.idProduto);
            });
          
            // Adiciona os elementos criados à estrutura correta
            divCardBody.appendChild(h4CardTitle);
            divCardBody.appendChild(pCardText);
          
            ulListGroup.appendChild(liMarcaProduto);
            ulListGroup.appendChild(liUnidadeDeMedida);
            ulListGroup.appendChild(liQuantidadeProduto);
          
            divCardBodyButtons.appendChild(buttonAtualizarProduto);
            divCardBodyButtons.appendChild(buttonDeletarProduto);
          
            divCard.appendChild(divCardHeader);
            divCard.appendChild(divCardBody);
            divCard.appendChild(ulListGroup);
            divCard.appendChild(divCardBodyButtons);
          
            divCol.appendChild(divCard);
          
            // Adiciona o elemento divCol ao elemento com o id "lista"
            document.getElementById("lista").appendChild(divCol);
          });
    } catch (erro) {
      console.log(erro);
    }
}


async function pesquisarProduto() {

    document.getElementById('lista').innerHTML = '';

    var buscarProduto = document.getElementById('barraDeBusca').value.toString();

    try {
        const response = await fetch(`http://localhost:8080/estoque/produtos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const result = await response.json();
        let produtosEncontrados = [];
        result.forEach(produto => {
            if (
                produto.nomeProduto.toLowerCase().includes(buscarProduto.toLowerCase())) {
                    produtosEncontrados.push(produto);   
            }
        });

        lista.innerHTML = "";
        produtosEncontrados.forEach((produto) => {
            // Criação do elemento div com a classe "col-sm-6 mb-3 mb-sm-0 paddingCard"
            const divCol = document.createElement("div");
            divCol.className = "col-sm-6 mb-3 mb-sm-0 paddingCard";
          
            // Criação do elemento div com a classe "card"
            const divCard = document.createElement("div");
            divCard.className = "card";
          
            // Criação do elemento div com a classe "card-header"
            const divCardHeader = document.createElement("div");
            divCardHeader.className = "card-header";
            divCardHeader.textContent = `${produto.idProduto}`;
          
            // Criação do elemento div com a classe "card-body"
            const divCardBody = document.createElement("div");
            divCardBody.className = "card-body";
          
            // Criação do elemento h4 com a classe "card-title"
            const h4CardTitle = document.createElement("h4");
            h4CardTitle.className = "card-title";
            h4CardTitle.textContent = `${produto.nomeProduto}`;
          
            // Criação do elemento p com a classe "card-text"
            const pCardText = document.createElement("p");
            pCardText.className = "card-text";
            pCardText.textContent = `Descrição: ${produto.descProduto}`;
          
            // Criação do elemento ul com a classe "list-group list-group-flush"
            const ulListGroup = document.createElement("ul");
            ulListGroup.className = "list-group list-group-flush";
          
            // Criação dos elementos li com a classe "list-group-item"
            const liMarcaProduto = document.createElement("li");
            liMarcaProduto.className = "list-group-item";
            liMarcaProduto.textContent = `Marca: ${produto.marcaProduto}`;
          
            const liUnidadeDeMedida = document.createElement("li");
            liUnidadeDeMedida.className = "list-group-item";
            liUnidadeDeMedida.textContent = `Unidade De Medida: ${produto.unidadeDeMedida}`;
          
            const liQuantidadeProduto = document.createElement("li");
            liQuantidadeProduto.className = "list-group-item";
            liQuantidadeProduto.textContent = `Quantidade em Estoque: ${produto.quantidadeProduto} ${produto.unidadeDeMedida}`;
          
            // Criação do elemento div com a classe "card-body"
            const divCardBodyButtons = document.createElement("div");
            divCardBodyButtons.className = "card-body";
          
            // Criação dos elementos botões
            const buttonAtualizarProduto = document.createElement("button");
            buttonAtualizarProduto.type = "button";
            buttonAtualizarProduto.className = "btn btn-outline-warning";
            buttonAtualizarProduto.textContent = "Atualizar Produto";
            buttonAtualizarProduto.addEventListener("click", () => {
              atualizarProduto(produto.idProduto);
            });
          
            const buttonDeletarProduto = document.createElement("button");
            buttonDeletarProduto.type = "button";
            buttonDeletarProduto.className = "btn btn-outline-danger";
            buttonDeletarProduto.textContent = "Deletar Produto";
            buttonDeletarProduto.addEventListener("click", () => {
              deletarProduto(produto.idProduto);
            });
          
            // Adiciona os elementos criados à estrutura correta
            divCardBody.appendChild(h4CardTitle);
            divCardBody.appendChild(pCardText);
          
            ulListGroup.appendChild(liMarcaProduto);
            ulListGroup.appendChild(liUnidadeDeMedida);
            ulListGroup.appendChild(liQuantidadeProduto);
          
            divCardBodyButtons.appendChild(buttonAtualizarProduto);
            divCardBodyButtons.appendChild(buttonDeletarProduto);
          
            divCard.appendChild(divCardHeader);
            divCard.appendChild(divCardBody);
            divCard.appendChild(ulListGroup);
            divCard.appendChild(divCardBodyButtons);
          
            divCol.appendChild(divCard);
          
            // Adiciona o elemento divCol ao elemento com o id "lista"
            document.getElementById("lista").appendChild(divCol);
          });
    } catch (erro) {
      console.log(erro);
    }
}
