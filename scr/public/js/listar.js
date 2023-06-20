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
            
            const divCol = document.createElement("div");
            divCol.className = "col-sm-6 mb-3 mb-sm-0 paddingCard";
          
            
            const divCard = document.createElement("div");
            divCard.className = "card";
          
            
            const divCardHeader = document.createElement("div");
            divCardHeader.className = "card-header text-bg-info";
            divCardHeader.textContent = `${produto.idProduto}`;
          
            
            const divCardBody = document.createElement("div");
            divCardBody.className = "card-body";
          
            
            const h4CardTitle = document.createElement("h4");
            h4CardTitle.className = "card-title";
            h4CardTitle.textContent = `${produto.nomeProduto}`;
          
            
            const pCardText = document.createElement("p");
            pCardText.className = "card-text";
            pCardText.innerHTML = `<i>${produto.descProduto}</i>`;
          
            
            const ulListGroup = document.createElement("ul");
            ulListGroup.className = "list-group list-group-flush";
          
            
            const liMarcaProduto = document.createElement("li");
            liMarcaProduto.className = "list-group-item";
            liMarcaProduto.innerHTML = `<b>Marca:</b> ${produto.marcaProduto}`;
          
            const liUnidadeDeMedida = document.createElement("li");
            liUnidadeDeMedida.className = "list-group-item";
            liUnidadeDeMedida.innerHTML = `<b>Unidade De Medida:</b> ${produto.unidadeDeMedida}`;
          
            const liQuantidadeProduto = document.createElement("li");
            liQuantidadeProduto.className = "list-group-item";
            liQuantidadeProduto.innerHTML= `<b>Quantidade em Estoque:</b> ${produto.quantidadeProduto} ${produto.unidadeDeMedida}`;
          
            
            const divCardBodyButtons = document.createElement("div");
            divCardBodyButtons.className = "card-body";
          
            
            const buttonAtualizarProduto = document.createElement("button");
            buttonAtualizarProduto.type = "button";
            buttonAtualizarProduto.className = "btn btn-outline-warning me-2";
            buttonAtualizarProduto.textContent = "Editar Informações";
            buttonAtualizarProduto.addEventListener("click", () => {
              getInfoProduto(produto.idProduto);
            });
          

            const buttonDeletarProduto = document.createElement("button");
            buttonDeletarProduto.type = "button";
            buttonDeletarProduto.className = "btn btn-outline-danger me-2";
            buttonDeletarProduto.textContent = "Deletar Produto";
            buttonDeletarProduto.addEventListener("click", () => {
              deletarProduto(produto.idProduto);
            });
          
            
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
  
          const divCol = document.createElement("div");
          divCol.className = "col-sm-6 mb-3 mb-sm-0 paddingCard";
        
          
          const divCard = document.createElement("div");
          divCard.className = "card";
        
          
          const divCardHeader = document.createElement("div");
          divCardHeader.className = "card-header text-bg-info";
          divCardHeader.textContent = `${produto.idProduto}`;
        
          
          const divCardBody = document.createElement("div");
          divCardBody.className = "card-body";
        
          
          const h4CardTitle = document.createElement("h4");
          h4CardTitle.className = "card-title";
          h4CardTitle.textContent = `${produto.nomeProduto}`;
        
          
          const pCardText = document.createElement("p");
          pCardText.className = "card-text";
          pCardText.innerHTML = `<i>${produto.descProduto}</i>`;
        
          
          const ulListGroup = document.createElement("ul");
          ulListGroup.className = "list-group list-group-flush";
        
          
          const liMarcaProduto = document.createElement("li");
          liMarcaProduto.className = "list-group-item";
          liMarcaProduto.innerHTML = `<b>Marca:</b> ${produto.marcaProduto}`;
        
          const liUnidadeDeMedida = document.createElement("li");
          liUnidadeDeMedida.className = "list-group-item";
          liUnidadeDeMedida.innerHTML = `<b>Unidade De Medida:</b> ${produto.unidadeDeMedida}`;
        
          const liQuantidadeProduto = document.createElement("li");
          liQuantidadeProduto.className = "list-group-item";
          liQuantidadeProduto.innerHTML= `<b>Quantidade em Estoque:</b> ${produto.quantidadeProduto} ${produto.unidadeDeMedida}`;
        
          
          const divCardBodyButtons = document.createElement("div");
          divCardBodyButtons.className = "card-body";
        
          
          const buttonAtualizarProduto = document.createElement("button");
          buttonAtualizarProduto.type = "button";
          buttonAtualizarProduto.className = "btn btn-outline-warning me-2";
          buttonAtualizarProduto.textContent = "Editar Informações";
          buttonAtualizarProduto.addEventListener("click", () => {
            getInfoProduto(produto.idProduto);
          });
        

          const buttonDeletarProduto = document.createElement("button");
          buttonDeletarProduto.type = "button";
          buttonDeletarProduto.className = "btn btn-outline-danger me-2";
          buttonDeletarProduto.textContent = "Deletar Produto";
          buttonDeletarProduto.addEventListener("click", () => {
            deletarProduto(produto.idProduto);
          });
        
          
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
        
          
          document.getElementById("lista").appendChild(divCol);
        });
    } catch (erro) {
      console.log(erro);
    }
}

async function getInfoProduto(id) {
  try {
    const response = await fetch(`http://localhost:8080/estoque/produtos/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const result = await response.json();
    document.getElementById('input-idProduto').value = id;
    document.getElementById('input-nomeProduto').value = result.nomeProduto;
    document.getElementById('input-marcaProduto').value = result.marcaProduto;
    document.getElementById('input-unidadeDeMedida').value = result.unidadeDeMedida;
    document.getElementById('input-quantidadeEmEstoque').value = result.quantidadeProduto;
    document.getElementById('input-descProduto').value = result.descProduto;

  }catch (erro) {
    console.log(erro);
  }
}

async function limpar(){
  document.getElementById('input-idProduto').value = "";
  document.getElementById('input-nomeProduto').value = ""
  document.getElementById('input-marcaProduto').value = "";
  document.getElementById('input-unidadeDeMedida').value = "";
  document.getElementById('input-quantidadeEmEstoque').value = "";
  document.getElementById('input-descProduto').value = "";
}
