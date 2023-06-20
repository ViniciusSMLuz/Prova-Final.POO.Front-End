async function cadastrarProduto() {
  var Produto = {
      "idProduto": uuidv4(),
      "nomeProduto": document.getElementById('input-nomeProduto').value,
      "marcaProduto": document.getElementById('input-marcaProduto').value,
      "unidadeDeMedida": document.getElementById('input-unidadeDeMedida').value,
      "quantidadeProduto": document.getElementById('input-quantidadeEmEstoque').value,
      "descProduto": document.getElementById('input-descProduto').value   
  }
  let envio = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(Produto)
  };
  
  try {
     let response = await fetch("http://localhost:8080/estoque/cadastrar-produto", envio);
     listarProdutos();
     if (response.ok) {
          console.log('Produto cadastrado com sucesso');
          alert('Produto cadastrado com sucesso');
          listarProdutos();
      } else {
          console.error('Falha ao cadastrar produto:', response.status, response.statusText);
          alert('Falha ao cadastrar produto:', response.status, response.statusText);
      }
  } catch (error) {
      console.error('Erro na requisição do cadastro:', error);
      alert('Erro na requisição do cadastro:', error);
  }
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  