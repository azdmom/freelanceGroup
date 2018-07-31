$(document).ready(function () {

  $('.js-example-basic-multiple').select2();


  $("#freelance-submit").on("click", function (event) {
    alert("Thank you for submitting your information!");
    event.preventDefault();

    function validateForm() {
      var isValid = true;
      $(".form-control").each(function () {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      $(".chosen-select").each(function () {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {


      var fields = $("#freelancefields").val()

      console.log(fields);

      fields2 = fields.join();

      console.log(fields2);

      var freelanceInfo = {
        FName: $("#freelanceFName").val(),
        LName: $("#freelanceLName").val(),
        ContactEmail: $("#freelanceEmail").val(),
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
      }).then(function (data) {
        console.log(data);
        location.reload();
      });
    }
    else {
      alert("Please complete all fields before submitting");
    }

  });

});