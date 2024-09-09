function clicar() {

    // Obtém a seção onde os resultados serão exibidos
    var section = document.getElementById('resultados');
  
    let campoPesquisa = document.getElementById('pesquisa').value;

    if (campoPesquisa == "" ) {
      section.innerHTML = 'Nenhuma Série ou Filme encontrado. Digite alguma Série ou Filme.'
      return


    }
    
    campoPesquisa = campoPesquisa.toLowerCase();
    
  
    // Inicializa uma string vazia para armazenar os resultados
    let res = '';
    let titulo = "";
    let descricao = '';
  
    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      // Se o titulo includes compaPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

        // Cria uma nova div para cada dado e adiciona as informações relevantes
      res += `<div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <strong>
                  <p class="descricao-meta">${dado.descricao}</p>
                </strong>
                <strong><a href=${dado.link} target="_blank">Assistar Aqui</a></strong>
              </div> `;

      }
      
    } 

    if (!res) {
      res = "Nenhuma Série ou Filme encontrado"
      
    }
  
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = res;
  }