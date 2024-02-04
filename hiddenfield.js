document.addEventListener('DOMContentLoaded', function () {
    const radioButtons1 = document.querySelectorAll('input[name="Plaats"]');
    const hiddenField1 = document.querySelector('input[name="PlaatsHF"]');

    // Set an initial value for the hidden field
    hiddenField1.value = "Default Value";
    
    const radioButtons2 = document.querySelectorAll('input[name="Vermogen"]');
    const hiddenField2 = document.querySelector('input[name="VermogenHF"]');

    // Set an initial value for the hidden field
    hiddenField2.value = "Default Value";
    
    const radioButtons3 = document.querySelectorAll('input[name="Type"]');
    const hiddenField3 = document.querySelector('input[name="TypeHF"]');

    // Set an initial value for the hidden field
    hiddenField3.value = "Default Value";
    
    const radioButtons4 = document.querySelectorAll('input[name="Kabel"]');
    const hiddenField4 = document.querySelector('input[name="KabelHF"]');

    // Set an initial value for the hidden field
    hiddenField4.value = "Default Value";

    const radioButtons5 = document.querySelectorAll('input[name="Doorrekenen"]');
    const hiddenField5 = document.querySelector('input[name="DoorrekenenHF"]');

    // Set an initial value for the hidden field
    hiddenField5.value = "Default Value";
    
    const radioButtons6 = document.querySelectorAll('input[name="Gepland"]');
    const hiddenField6 = document.querySelector('input[name="GeplandHF"]');

    // Set an initial value for the hidden field
    hiddenField6.value = "Default Value";
    
    const radioButtons7 = document.querySelectorAll('input[name="LoadBalancing"]');
    const hiddenField7 = document.querySelector('input[name="LoadBalancingHF"]');

    // Set an initial value for the hidden field
    hiddenField7.value = "Default Value";
    
    const combinedHiddenField = document.querySelector('input[name="OverviewHF"]');
    combinedHiddenField.value = "Default Combined Value";

    const CombinedEntryHF = document.querySelector('input[name="CombinedEntryHF"]');
    CombinedEntryHF.value = "submit default value of selected question answers";
   
 };
