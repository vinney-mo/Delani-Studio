$(document).ready(function () {
  $(".what-icon").click(function () {
    $(this).slideDown("1500").hide("1000");
    $(this).parent().find(".what-desc").show("1500");
  });
  $(".what-desc").click(function () {
    $(this).slideDown("1500").hide("1000");
    $(this).parent().find(".what-icon").show("1500");
  });
});
