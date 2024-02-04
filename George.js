alert("I am an alert box!");

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
    
    const radioButtons3 = document.querySelectorAll('input[name="Type"]');
    const hiddenField3 = document.querySelector('input[name="TypeHF"]');

    // Set an initial value for the hidden field
    hiddenField3.value = "Default Value";

    radioButtons3.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField3.value = this.value;
        updateCombinedHiddenField();
      });
    });
    
    const radioButtons4 = document.querySelectorAll('input[name="Kabel"]');
    const hiddenField4 = document.querySelector('input[name="KabelHF"]');

    // Set an initial value for the hidden field
    hiddenField4.value = "Default Value";

    radioButtons4.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField4.value = this.value;
        updateCombinedHiddenField();
      });
    });
    
    const radioButtons5 = document.querySelectorAll('input[name="Doorrekenen"]');
    const hiddenField5 = document.querySelector('input[name="DoorrekenenHF"]');

    // Set an initial value for the hidden field
    hiddenField5.value = "Default Value";

    radioButtons5.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField5.value = this.value;
        updateCombinedHiddenField();
      });
    });
    
    const radioButtons6 = document.querySelectorAll('input[name="Gepland"]');
    const hiddenField6 = document.querySelector('input[name="GeplandHF"]');

    // Set an initial value for the hidden field
    hiddenField6.value = "Default Value";

    radioButtons6.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField6.value = this.value;
        updateCombinedHiddenField();
      });
    });
    
    const radioButtons7 = document.querySelectorAll('input[name="LoadBalancing"]');
    const hiddenField7 = document.querySelector('input[name="LoadBalancingHF"]');

    // Set an initial value for the hidden field
    hiddenField7.value = "Default Value";

    radioButtons7.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField7.value = this.value;
        updateCombinedHiddenField();
      });
    });
    
    const combinedHiddenField = document.querySelector('input[name="OverviewHF"]');
    combinedHiddenField.value = "Default Combined Value";

    const CombinedEntryHF = document.querySelector('input[name="CombinedEntryHF"]');
    CombinedEntryHF.value = "submit default value of selected question answers";

    const Zappi = document.getElementById('ZappiDiv');
    const AlfenDouble = document.getElementById('AlfenDoubleDiv');
    const AlfenSingle = document.getElementById('AlfenSingleDiv');
    const VetonOne = document.getElementById('VetonOneDiv');
    const Easee = document.getElementById('EaseeDiv');
    const SmappeeWall = document.getElementById('SmappeeWallDiv');
    const SmappeeBase = document.getElementById('SmappeeBaseDiv');
    const SmappeeOne = document.getElementById('SmappeeOneDiv');
    const PulsarPro = document.getElementById('PulsarProDiv');
    const PulsarMax = document.getElementById('PulsarMaxDiv');
    const Suggesties = document.getElementById('Suggesties');
        
    const submitButton = document.getElementById('submitButton');

    function updateCombinedHiddenField(){
    const combinedValue = `${hiddenField2.value}, ${hiddenField3.value},${hiddenField4.value}, ${hiddenField5.value}, ${hiddenField6.value}, ${hiddenField7.value}`;
    combinedHiddenField.value = combinedValue;
    
    const combinedValueEntryHF = `${hiddenField1.value}, ${hiddenField2.value}, ${hiddenField3.value},${hiddenField4.value}, ${hiddenField5.value}, ${hiddenField6.value}, ${hiddenField7.value}`;
    CombinedEntryHF.value = combinedValueEntryHF;
    }    
});
    });
