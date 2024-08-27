const elementoParaInserirLivros = document.getElementById('livros')

function exibirOsLivrosNaTela(ListaDeLivros){
  elementoParaInserirLivros.innerHTML = ''
    ListaDeLivros.forEach(livro => {
        //let disponibilidade = verificarDisponibilidadeDoLivro(livro)
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indiponibilidade'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
        `
    })
}

/*function verificarDisponibilidadeDoLivro(livro){
  if (livro.quantidade > 0){
    return 'livro__imagens'
  }else {
    return 'livros__imagens indisponivel'
  }
}*/