
document.addEventListener('DOMContentLoaded', function () {
const radioButtons1 = document.querySelectorAll('input[name="Plaats"]');
    const hiddenField1 = document.querySelector('input[name="PlaatsHF"]');

    // Set an initial value for the hidden field
    hiddenField1.value = "Default Value";

    radioButtons1.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField1.value = this.value;
        updateCombinedHiddenField();
      });
    });
    
    const radioButtons2 = document.querySelectorAll('input[name="Vermogen"]');
    const hiddenField2 = document.querySelector('input[name="VermogenHF"]');

    // Set an initial value for the hidden field
    hiddenField2.value = "Default Value";

    radioButtons2.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField2.value = this.value;
        updateCombinedHiddenField();
      });
    });
   
 };
