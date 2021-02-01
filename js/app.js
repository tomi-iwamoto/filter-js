
$(document).ready(function () {
    $(".all").fadeIn();
  
    $("#cakes").on("click", () => {
      $(".cakes").fadeIn();
      $(".cupcakes").hide();
      $(".sweets").hide();
    });
  
    $("#cupcakes").on("click", () => {
      $(".cupcakes").fadeIn();
      $(".cakes").hide();
      $(".sweets").hide();
    });
  
    $("#sweets").on("click", () => {
      $(".sweets").fadeIn();
      $(".cakes").hide();
      $(".cupcakes").hide();
    });
    
    $('#all').on('click', () => {
      $('.all').fadeIn();
    })
  });
  