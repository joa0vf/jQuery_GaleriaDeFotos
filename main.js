$(document).ready(function(){  /*Para chamar o jQuery utiliza-se o '$'*/
   $('header button').click(function(){ /*É uma forma curta do código acima. */
      $('form').slideDown() /*SlideDown é uma função de animação */
   })

   $('#resetButton').click(function(){
      $('form').slideUp() /*Aqui colocar um evento de click no botão de cancelar, que ao clicar, o form será recolido. */
   })

   $('form').on('submit', function(e){
      e.preventDefault() /*Para não atualizar a página automaticamente */
      const urlNovaImagem = $('#urlImagemNova').val()
      const novoItem = $('<li style="display: none"></li>')
      $(`<img src= "${urlNovaImagem}"/>`).appendTo(novoItem)
      $(`<div class="overlayImagemLink">
         <a href = "${urlNovaImagem}" target= "_blank" title ="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
      </div>`).appendTo(novoItem)
      $(novoItem).appendTo('ul')
      $(novoItem).fadeIn(500) /*Função de transição: surgir elemento */
      $('#urlImagemNova').val('') /*Para limpar a área de URL ao adicionar uma imagem */
   })
})

