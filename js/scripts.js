$(document).ready(function () {
  $(".whatWeDoIcon").click(function () {
    $(this).slideDown("1500").hide("1000");
    $(this).parent().find(".whatWeDoDescription").show("1500");
  });
  $(".whatWeDoDescription").click(function () {
    $(this).slideDown("1500").hide("1000");
    $(this).parent().find(".whatWeDoIcon").show("1500");
  });
});
