$(document).ready(function () {
  $(".whatWeDoIcon").click(function () {
    $(this).slideDown("1500").hide("1000");
    $(this).parent().find(".whatWeDoDescription").show("1500");
  });
  $(".whatWeDoDescription").click(function () {
    $(this).slideDown("1500").hide("1000");
    $(this).parent().find(".whatWeDoIcon").show("1500");
  });
  $("#contactForm").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    let numberOfError = 0;
    if (name == "") {
      $("#nameError").show();
      numberOfError++;
    } else $("#nameError").hide();
    if (email == "") {
      $("#emailError").show();
      numberOfError++;
    } else $("#emailError").hide();
    if (message == "") {
      $("#messageError").show();
      numberOfError++;
    } else $("#messageError").hide();

    if (numberOfError > 0) return false;
    $.confirm({
      icon: "fa fa-smile-o",
      theme: "modern",
      closeIcon: true,
      animation: "scale",
      type: "green",
      title: "Hello " + name + ",",
      content: "Your message has been received. Thank you for reaching out.",
      buttons: {
        close: function () {
          $("#contactForm")[0].reset();
        },
      },
    });
  });
});
