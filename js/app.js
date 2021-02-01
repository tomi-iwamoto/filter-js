
$(document).ready(function () {
    $(".all").show();
  
    $("#cakes").on("click", () => {
      $(".cakes").show();
      $(".cupcakes").hide();
      $(".sweets").hide();
    });
  
    $("#cupcakes").on("click", () => {
      $(".cupcakes").show();
      $(".cakes").hide();
      $(".sweets").hide();
    });
  
    $("#sweets").on("click", () => {
      $(".sweets").show();
      $(".cakes").hide();
      $(".cupcakes").hide();
    });
    
    $('#all').on('click', () => {
      $('.all').show();
    })
  });
  