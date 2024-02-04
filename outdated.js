<script>
  document.addEventListener('DOMContentLoaded', function () {
    const radioButtons1 = document.querySelectorAll('input[name="Plaats"]');
    const hiddenField1 = document.querySelector('input[name="PlaatsHF"]');

    // Set an initial value for the hidden field
    hiddenField1.value = "Default Value";

    radioButtons1.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField1.value = this.value;
      });
    });
    
    const radioButtons2 = document.querySelectorAll('input[name="Vermogen"]');
    const hiddenField2 = document.querySelector('input[name="VermogenHF"]');

    // Set an initial value for the hidden field
    hiddenField2.value = "Default Value";

    radioButtons2.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField2.value = this.value;
      });
    });
    
    const radioButtons3 = document.querySelectorAll('input[name="Type"]');
    const hiddenField3 = document.querySelector('input[name="TypeHF"]');

    // Set an initial value for the hidden field
    hiddenField3.value = "Default Value";

    radioButtons3.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField3.value = this.value;
      });
    });
    
    const radioButtons4 = document.querySelectorAll('input[name="Kabel"]');
    const hiddenField4 = document.querySelector('input[name="KabelHF"]');

    // Set an initial value for the hidden field
    hiddenField4.value = "Default Value";

    radioButtons4.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField4.value = this.value;
      });
    });
    
    const radioButtons5 = document.querySelectorAll('input[name="Doorrekenen"]');
    const hiddenField5 = document.querySelector('input[name="DoorrekenenHF"]');

    // Set an initial value for the hidden field
    hiddenField5.value = "Default Value";

    radioButtons5.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField5.value = this.value;
      });
    });
    
    const radioButtons6 = document.querySelectorAll('input[name="Gepland"]');
    const hiddenField6 = document.querySelector('input[name="GeplandHF"]');

    // Set an initial value for the hidden field
    hiddenField6.value = "Default Value";

    radioButtons6.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField6.value = this.value;
      });
    });
    
    const radioButtons7 = document.querySelectorAll('input[name="LoadBalancing"]');
    const hiddenField7 = document.querySelector('input[name="LoadBalancingHF"]');

    // Set an initial value for the hidden field
    hiddenField7.value = "Default Value";

    radioButtons7.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        hiddenField7.value = this.value;
      });
    });
    
    const combinedHiddenField = document.querySelector('input[name="OverviewHF"]');
    combinedHiddenField.value = "Default Combined Value";

    const EnkelSmappee = document.getElementById('EnkelSmappee');
    const EnkelSmappeeAlfen = document.getElementById('EnkelSmappeeAlfen');
    const EnkelSmappePulsarMax = document.getElementById('EnkelSmappePulsarMax');
    const GeenEaseeEnPulsarPro = document.getElementById('GeenEaseeEnPulsarPro');
    const GeenAlfenEnWBMax = document.getElementById('GeenAlfenEnWBMax');
    const GeenWBMax = document.getElementById('GeenWBMax');
    
    const submitButton = document.getElementById('submitButton');
    
    submitButton.addEventListener('click', function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Update the combined hidden field and change display properties
      updateCombinedHiddenField();
    });

    function updateCombinedHiddenField(){
    const combinedValue = `${hiddenField4.value}, ${hiddenField5.value}, ${hiddenField6.value}, ${hiddenField7.value}`;
    combinedHiddenField.value = combinedValue;

    if (combinedValue === "VasteKabel, Doorrekenen, Gepland, LoadBalancing" || combinedValue === "VasteKabel, Doorrekenen, NietGepland, LoadBalancing" || combinedValue === "VasteKabel, NietDoorrekenen, Gepland, LoadBalancing" || combinedValue === "VasteKabel, NietDoorrekenen, Gepland, GeenLoadBalancing") {
      EnkelSmappee.style.display = 'grid';
      EnkelSmappeeAlfen.style.display = 'none';
      EnkelSmappePulsarMax.style.display = 'none';
      GeenEaseeEnPulsarPro.style.display = 'none';
      GeenAlfenEnWBMax.style.display = 'none';
      GeenWBMax.style.display = 'none';
    } 
    
    else if (combinedValue === "VasteKabel, Doorrekenen, NietGepland, GeenLoadBalancing") {
      EnkelSmappee.style.display = 'none';
      EnkelSmappeeAlfen.style.display = 'grid';
      EnkelSmappePulsarMax.style.display = 'none';
      GeenEaseeEnPulsarPro.style.display = 'none';
      GeenAlfenEnWBMax.style.display = 'none';
      GeenWBMax.style.display = 'none';
    } 
    
    else if (combinedValue === "VasteKabel, NietDoorrekenen, NietGepland, LoadBalancing") {
      EnkelSmappee.style.display = 'none';
      EnkelSmappeeAlfen.style.display = 'none';
      EnkelSmappePulsarMax.style.display = 'grid';
      GeenEaseeEnPulsarPro.style.display = 'none';
      GeenAlfenEnWBMax.style.display = 'none';
      GeenWBMax.style.display = 'none';
    }
    
    else if (combinedValue === "VasteKabel, NietDoorrekenen, NietGepland, GeenLoadbalancing") {
      EnkelSmappee.style.display = 'none';
      EnkelSmappeeAlfen.style.display = 'none';
      EnkelSmappePulsarMax.style.display = 'none';
      GeenEaseeEnPulsarPro.style.display = 'grid';
      GeenAlfenEnWBMax.style.display = 'none';
      GeenWBMax.style.display = 'none';
    }

    else if (combinedValue === "LosseKabel, Doorrekenen, Gepland, LoadBalancing" || combinedValue === "LosseKabel, Doorrekenen, Gepland, GeenLoadBalancing" || combinedValue === "LosseKabel, NietDoorrekenen, Gepland, LoadBalancing" || combinedValue === "LosseKabel, NietDoorrekenen, Gepland, GeenLoadBalancing" || combinedValue === "LosseKabel, Doorrekenen, NietGepland, LoadBalancing" || combinedValue === "LosseKabel, NietDoorrekenen, NietGepland, LoadBalancing") {
      EnkelSmappee.style.display = 'none';
      EnkelSmappeeAlfen.style.display = 'none';
      EnkelSmappePulsarMax.style.display = 'none';
      GeenEaseeEnPulsarPro.style.display = 'none';
      GeenAlfenEnWBMax.style.display = 'grid';
      GeenWBMax.style.display = 'none';
    }

    else if (combinedValue === "LosseKabel, Doorrekenen, NietGepland, GeenLoadBalancing" || combinedValue === "LosseKabel, NietDoorrekenen, NietGepland, GeenLoadBalancing") {
      EnkelSmappee.style.display = 'none';
      EnkelSmappeeAlfen.style.display = 'none';
      EnkelSmappePulsarMax.style.display = 'none';
      GeenEaseeEnPulsarPro.style.display = 'none';
      GeenAlfenEnWBMax.style.display = 'none';
      GeenWBMax.style.display = 'grid';
    }
    };
    });
</script>
