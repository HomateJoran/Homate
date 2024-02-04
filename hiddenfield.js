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
