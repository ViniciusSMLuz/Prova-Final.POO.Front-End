async function cadastrarProduto() {
  var Produto = {
      "id_produto": uuidv4(),
      "nome_produto": document.getElementById('detail-nome_produto').value,
      "marca_produto": document.getElementById('detail-marca_produto').value,
      "unidade_de_medida": document.getElementById('detail-unidade_de_medida').value,
      "quantidade_produto": document.getElementById('detail-quantidade_produto').value,
      "desc_produto": document.getElementById('detail-desc_produto').value   
  }
  let envio = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(Produto)
  };
  
  try {
     let response = await fetch("http://localhost:8080/estoque/produtos", envio);
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
