$(document).ready(function () {

  $('.js-example-basic-multiple').select2();


  $("#employer-submit").on("click", function (event) {
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


      var eFields = $("#employerfields").val()

      eFields2 = eFields.join();

      var employerInfo = {
        EmployerName: $("#employerName").val(),
        Industry: $("#industry").val(),
        ContactName: $("#contactName").val(),
        ContactEmail: $("#contactEmail").val(),
        ContactPhone: $("#contactPhone").val(),
        Fields: eFields2
      };


      $.ajax({
        method: "POST",
        url: "/employeradd",
        data: employerInfo
      }).then(function (data) {
        console.log(data);
        location.reload();
      });
    } else {
      alert("Please complate all fields before submitting");
    }

  });

});