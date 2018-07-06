$(document).ready(function() {

    $('.js-example-basic-multiple').select2();
       

    $("#freelance-submit").on("click", function(event) {
      alert("Thank you for submitting your information!");
      event.preventDefault();

      var fields = $("#freelancefields").val()

      fields2 = fields.join();
  
      var freelanceInfo = {
        FName: $("#freelanceFName").val(),
        LName: $("#freelanceLName").val(),
        Email: $("#freelanceEmail").val(),
        Phone: $("#freelancePhone").val(),
        City: $("#freelanceCity").val(),
        State: $("#freelancestate").val(),
        Fields: fields2
      };

      console.log(freelanceInfo);
  
      $.ajax({
        method: "POST",
        url: "/freelanceadd",
        data: freelanceInfo
      }).then(function(data) {
      console.log(data);
        location.reload();
      });
  
    });
  });
  
  