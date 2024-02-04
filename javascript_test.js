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


    // 1
    if (combinedValue === "combinedValue === "Default value, Default value, Default value, Default value, Default value, Default value" || combinedValue === "13kW, Default value, Default value, Default value, Default value, Default value" || combinedValue === "13kW, Sokkel, Default value, Default value, Default value, Default value"") {
      Suggesties.style.display = 'block';
      Zappi.style.display = 'block';
      AlfenDouble.style.display = 'block';
      AlfenSingle.style.display = 'block';
      VetonOne.style.display = 'block';
      Easee.style.display = 'block';
      SmappeeWall.style.display = 'block';
      SmappeeBase.style.display = 'block';
      SmappeeOne.style.display = 'block';
      PulsarPro.style.display = 'block';
      PulsarMax.style.display = 'block';
    } 
    
    // 2
    else if (combinedValue === "combinedValue === "13kW, Wand, Default value, Default value, Default value, Default value" || combinedValue === "22kW, Wand, Default value, Default value, Default value, Default value" || combinedValue === "22kW, Sokkel, Default value, Default value, Default value, Default value"") {
      Suggesties.style.display = 'block';
      Zappi.style.display = 'block';
      AlfenDouble.style.display = 'block';
      AlfenSingle.style.display = 'block';
      VetonOne.style.display = 'none';
      Easee.style.display = 'block';
      SmappeeWall.style.display = 'block';
      SmappeeBase.style.display = 'block';
      SmappeeOne.style.display = 'block';
      PulsarPro.style.display = 'block';
      PulsarMax.style.display = 'block';
    } 
    
     // 3
    else if (combinedValue === "combinedValue === "22kW, Sokkel, VasteKabel, Default value, Default value, Default value" || combinedValue === "22kW, Wand, VasteKabel, Default value, Default value, Default value" || combinedValue === "13kW, Wand, VasteKabel, Default value, Default value, Default value" || combinedValue === "22kW, Wand, Default value, Default value, Default value, Default value" || combinedValue === "13kW, Wand, VasteKabel, NietDoorrekenen, Default value, Default value"  || combinedValue === "22kW, Wand, VasteKabel, NietDoorrekenen, Default value, Default value" || combinedValue === "22kW, Sokkel, VasteKabel, NietDoorrekenen, Default value, Default value" || combinedValue === "22kW, Sokkel, VasteKabel, NietDoorrekenen, NietGepland, Default value" || combinedValue === "13kW, Wand, VasteKabel, NietDoorrekenen, NietGepland, Default value"  || combinedValue === "13kW, Wand, VasteKabel, NietDoorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "22kW, Wand, VasteKabel, NietDoorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "22kW, Sokkel, VasteKabel, NietDoorrekenen, NietGepland, GeenLoadbalancing" ") {
      Suggesties.style.display = 'block';
      Zappi.style.display = 'block';
      AlfenDouble.style.display = 'block';
      AlfenSingle.style.display = 'block';
      VetonOne.style.display = 'none';
      Easee.style.display = 'none';
      SmappeeWall.style.display = 'block';
      SmappeeBase.style.display = 'none';
      SmappeeOne.style.display = 'none';
      PulsarPro.style.display = 'block';
      PulsarMax.style.display = 'block';
    }
    
     // 4
    else if (combinedValue === "22kW, Sokkel, LosseKabel, Default value, Default value, Default value" || combinedValue === "22kW, Wand, LosseKabel, Default value, Default value, Default value" || combinedValue === "13kW, Sokkel, LosseKabel, Default value, Default value, Default value" || combinedValue === "13kW, Wand, LosseKabel, Default value, Default value, Default value" || combinedValue === "13kW, Wand, LosseKabel, Doorrekenen, Default value, Default value") {
      Suggesties.style.display = 'block';
      Zappi.style.display = 'block';
      AlfenDouble.style.display = 'block';
      AlfenSingle.style.display = 'block';
      VetonOne.style.display = 'none';
      Easee.style.display = 'block';
      SmappeeWall.style.display = 'block';
      SmappeeBase.style.display = 'block';
      SmappeeOne.style.display = 'block';
      PulsarPro.style.display = 'none';
      PulsarMax.style.display = 'none';
    }

         // 4.2
         else if (combinedValue === "13kW, Wand, LosseKabel, NietDoorrekenen, Default value, Default value" || combinedValue === "13kW, Sokkel, LosseKabel, Doorrekenen, Default value, Default value" || combinedValue === "13kW, Sokkel, LosseKabel, NietDoorrekenen, Default value, Default value" || combinedValue === "22kW, Wand, LosseKabel, Doorrekenen, Default value, Default value" || combinedValue === "22kW, Wand, LosseKabel, NietDoorrekenen, Default value, Default value" || combinedValue === "22kW, Sokkel, LosseKabel, Doorrekenen, Default value, Default value" || combinedValue === "22kW, Sokkel, LosseKabel, NietDoorrekenen, Default value, Default value" || combinedValue === "22kW, Sokkel, LosseKabel, NietDoorrekenen, NietGepland, Default value" || combinedValue === "22kW, Sokkel, LosseKabel, Doorrekenen, NietGepland, Default value" || combinedValue === "22kW, Wand, LosseKabel, NietDoorrekenen, NietGepland, Default value" || combinedValue === "22kW, Wand, LosseKabel, Doorrekenen, NietGepland, Default value" || combinedValue === "13kW, Sokkel, LosseKabel, NietDoorrekenen, NietGepland, Default value" || combinedValue === "13kW, Sokkel, LosseKabel, Doorrekenen, NietGepland, Default value" || combinedValue === "13kW, Wand, LosseKabel, NietDoorrekenen, NietGepland, Default value" || combinedValue === "13kW, Wand, LosseKabel, Doorrekenen, NietGepland, Default value" || combinedValue === "13kW, Wand, LosseKabel, Doorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "13kW, Wand, LosseKabel, NietDoorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "13kW, Sokkel, LosseKabel, Doorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "13kW, Sokkel, LosseKabel, NietDoorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "22kW, Wand, LosseKabel, Doorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "22kW, Wand, LosseKabel, NietDoorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "22kW, Sokkel, LosseKabel, Doorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "22kW, Sokkel, LosseKabel, NietDoorrekenen, NietGepland, GeenLoadbalancing") {
          Suggesties.style.display = 'block';
          Zappi.style.display = 'block';
          AlfenDouble.style.display = 'block';
          AlfenSingle.style.display = 'block';
          VetonOne.style.display = 'none';
          Easee.style.display = 'block';
          SmappeeWall.style.display = 'block';
          SmappeeBase.style.display = 'block';
          SmappeeOne.style.display = 'block';
          PulsarPro.style.display = 'none';
          PulsarMax.style.display = 'none';
        }

     // 5
    else if (combinedValue === "13kW, Sokkel, VasteKabel, Default value, Default value, Default value" ||  combinedValue === "13kW, Sokkel, VasteKabel, NietDoorrekenen, Default value, Default value" ||  combinedValue === "13kW, Sokkel, VasteKabel, NietDoorrekenen, NietGepland, Default value" ||  combinedValue === "13kW, Sokkel, VasteKabel, NietDoorrekenen, NietGepland, GeenLoadbalancing"    ) {
      Suggesties.style.display = 'block';
      Zappi.style.display = 'block';
      AlfenDouble.style.display = 'block';
      AlfenSingle.style.display = 'block';
      VetonOne.style.display = 'block';
      Easee.style.display = 'none';
      SmappeeWall.style.display = 'block';
      SmappeeBase.style.display = 'none';
      SmappeeOne.style.display = 'none';
      PulsarPro.style.display = 'block';
      PulsarMax.style.display = 'block';
    }

         // 6
         else if (combinedValue === "13kW, Wand, VasteKabel, Doorrekenen, Default value, Default value" || combinedValue === "22kW, Wand, VasteKabel, Doorrekenen, Default value, Default value" || combinedValue === "22kW, Sokkel, VasteKabel, Doorrekenen, Default value, Default value" || combinedValue === "22kW, Sokkel, VasteKabel, Doorrekenen, NietGepland, Default value" || combinedValue === "22kW, Wand, VasteKabel, Doorrekenen, NietGepland, Default value" || combinedValue === "13kW, Wand, VasteKabel, Doorrekenen, NietGepland, Default value" || combinedValue === "13kW, Wand, VasteKabel, Doorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "22kW, Wand, VasteKabel, Doorrekenen, NietGepland, GeenLoadbalancing" || combinedValue === "22kW, Sokkel, VasteKabel, Doorrekenen, NietGepland, GeenLoadbalancing") {
          Suggesties.style.display = 'block';
          Zappi.style.display = 'block';
          AlfenDouble.style.display = 'block';
          AlfenSingle.style.display = 'block';
          VetonOne.style.display = 'none';
          Easee.style.display = 'none';
          SmappeeWall.style.display = 'block';
          SmappeeBase.style.display = 'none';
          SmappeeOne.style.display = 'none';
          PulsarPro.style.display = 'block';
          PulsarMax.style.display = 'none';
      }
       // 7
       else if (combinedValue === "13kW, Sokkel, VasteKabel, Doorrekenen, Default value, Default value" || combinedValue === "13kW, Sokkel, VasteKabel, Doorrekenen, NietGepland, Default value" || combinedValue === "13kW, Sokkel, VasteKabel, Doorrekenen, NietGepland, GeenLoadbalancing") {
        Suggesties.style.display = 'block';
        Zappi.style.display = 'block';
        AlfenDouble.style.display = 'block';
        AlfenSingle.style.display = 'block';
        VetonOne.style.display = 'block';
        Easee.style.display = 'none';
        SmappeeWall.style.display = 'block';
        SmappeeBase.style.display = 'none';
        SmappeeOne.style.display = 'none';
        PulsarPro.style.display = 'block';
        PulsarMax.style.display = 'none';
    }  

         // 8
         else if (combinedValue === "22kW, Sokkel, VasteKabel, NietDoorrekenen, Gepland, Default value" || combinedValue === "22kW, Sokkel, VasteKabel, Doorrekenen, Gepland, Default value" || combinedValue === "22kW, Wand, VasteKabel, NietDoorrekenen, Gepland, Default value" || combinedValue === "22kW, Wand, VasteKabel, Doorrekenen, Gepland, Default value" || combinedValue === "13kW, Sokkel, VasteKabel, NietDoorrekenen, Gepland, Default value" || combinedValue === "13kW, Sokkel, VasteKabel, Doorrekenen, Gepland, Default value" || combinedValue === "13kW, Wand, VasteKabel, NietDoorrekenen, Gepland, Default value" || combinedValue === "13kW, Wand, VasteKabel, Doorrekenen, Gepland, Loadbalancing" || combinedValue === "13kW, Wand, VasteKabel, NietDoorrekenen, Gepland, Loadbalancing" || combinedValue === "13kW, Wand, VasteKabel, NietDoorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "13kW, Sokkel, VasteKabel, Doorrekenen, Gepland, Loadbalancing"          ) {
          Suggesties.style.display = 'block';
          Zappi.style.display = 'block';
          AlfenDouble.style.display = 'none';
          AlfenSingle.style.display = 'none';
          VetonOne.style.display = 'none';
          Easee.style.display = 'none';
          SmappeeWall.style.display = 'block';
          SmappeeBase.style.display = 'none';
          SmappeeOne.style.display = 'none';
          PulsarPro.style.display = 'none';
          PulsarMax.style.display = 'none';
      }

               // 8v2
               else if (combinedValue === "13kW, Sokkel, VasteKabel, Doorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "13kW, Sokkel, VasteKabel, NietDoorrekenen, Gepland, Loadbalancing" || combinedValue === "13kW, Sokkel, VasteKabel, NietDoorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "22kW, Wand, VasteKabel, Doorrekenen, Gepland, Loadbalancing" || combinedValue === "22kW, Wand, VasteKabel, Doorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "22kW, Wand, VasteKabel, NietDoorrekenen, Gepland, Loadbalancing" || combinedValue === "22kW, Wand, VasteKabel, NietDoorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "22kW, Sokkel, VasteKabel, Doorrekenen, Gepland, Loadbalancing" || combinedValue === "22kW, Sokkel, VasteKabel, Doorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "22kW, Sokkel, VasteKabel, NietDoorrekenen, Gepland, Loadbalancing" || combinedValue === "22kW, Sokkel, VasteKabel, NietDoorrekenen, Gepland, GeenLoadbalancing"               ) {
                Suggesties.style.display = 'block';
                Zappi.style.display = 'block';
                AlfenDouble.style.display = 'none';
                AlfenSingle.style.display = 'none';
                VetonOne.style.display = 'none';
                Easee.style.display = 'none';
                SmappeeWall.style.display = 'block';
                SmappeeBase.style.display = 'none';
                SmappeeOne.style.display = 'none';
                PulsarPro.style.display = 'none';
                PulsarMax.style.display = 'none';
            }

     // 9
     else if (combinedValue === "13kW, Wand, VasteKabel, Doorrekenen, Gepland, Default value" || combinedValue === "13kW, Wand, VasteKabel, Doorrekenen, Gepland, GeenLoadbalancing"     ) {
      Suggesties.style.display = 'block';
      Zappi.style.display = 'block';
      AlfenDouble.style.display = 'block';
      AlfenSingle.style.display = 'block';
      VetonOne.style.display = 'none';
      Easee.style.display = 'none';
      SmappeeWall.style.display = 'block';
      SmappeeBase.style.display = 'none';
      SmappeeOne.style.display = 'none';
      PulsarPro.style.display = 'none';
      PulsarMax.style.display = 'none';
  }

       // 10
       else if (combinedValue === "22kW, Sokkel, LosseKabel, NietDoorrekenen, Gepland, Default value" || combinedValue === "22kW, Sokkel, LosseKabel, Doorrekenen, Gepland, Default value" || combinedValue === "22kW, Wand, LosseKabel, NietDoorrekenen, Gepland, Default value" || combinedValue === "22kW, Wand, LosseKabel, Doorrekenen, Gepland, Default value" ||combinedValue === "13kW, Sokkel, LosseKabel, NietDoorrekenen, Gepland, Default value" || combinedValue === "13kW, Sokkel, LosseKabel, Doorrekenen, Gepland, Default value" || combinedValue === "13kW, Wand, LosseKabel, Doorrekenen, Gepland, Default value" || combinedValue === "13kW, Wand, LosseKabel, Doorrekenen, Gepland, Loadbalancing" || combinedValue === "13kW, Wand, LosseKabel, Doorrekenen, Gepland, GeenLoadbalancing" ||combinedValue === "13kW, Wand, LosseKabel, Doorrekenen, NietGepland, Loadbalancing" || combinedValue === "13kW, Wand, LosseKabel, NietDoorrekenen, Gepland, Loadbalancing"       ) {
        Suggesties.style.display = 'block';
        Zappi.style.display = 'block';
        AlfenDouble.style.display = 'none';
        AlfenSingle.style.display = 'none';
        VetonOne.style.display = 'none';
        Easee.style.display = 'block';
        SmappeeWall.style.display = 'block';
        SmappeeBase.style.display = 'block';
        SmappeeOne.style.display = 'block';
        PulsarPro.style.display = 'none';
        PulsarMax.style.display = 'none';
    }

       // 10v2
       else if (combinedValue === "13kW, Wand, LosseKabel, NietDoorrekenen, Gepland, Default value" || combinedValue === "13kW, Wand, LosseKabel, NietDoorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "13kW, Wand, LosseKabel, NietDoorrekenen, NietGepland, Loadbalancing" ||combinedValue === "13kW, Sokkel, LosseKabel, Doorrekenen, Gepland, Loadbalancing" || combinedValue === "13kW, Sokkel, LosseKabel, Doorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "13kW, Sokkel, LosseKabel, Doorrekenen, NietGepland, Loadbalancing" || combinedValue === "13kW, Sokkel, LosseKabel, NietDoorrekenen, Gepland, Loadbalancing" || combinedValue === "13kW, Sokkel, LosseKabel, NietDoorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "13kW, Sokkel, LosseKabel, NietDoorrekenen, NietGepland, Loadbalancing" || combinedValue === "22kW, Wand, LosseKabel, Doorrekenen, Gepland, Loadbalancing" || combinedValue === "22kW, Wand, LosseKabel, Doorrekenen, Gepland, GeenLoadbalancing"       ) {
        Suggesties.style.display = 'block';
        Zappi.style.display = 'block';
        AlfenDouble.style.display = 'none';
        AlfenSingle.style.display = 'none';
        VetonOne.style.display = 'none';
        Easee.style.display = 'block';
        SmappeeWall.style.display = 'block';
        SmappeeBase.style.display = 'block';
        SmappeeOne.style.display = 'block';
        PulsarPro.style.display = 'none';
        PulsarMax.style.display = 'none';
    }

       // 10v3
       else if (combinedValue === "22kW, Wand, LosseKabel, Doorrekenen, NietGepland, Loadbalancing" || combinedValue === "22kW, Wand, LosseKabel, NietDoorrekenen, Gepland, Loadbalancing" || combinedValue === "22kW, Wand, LosseKabel, NietDoorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "22kW, Wand, LosseKabel, NietDoorrekenen, NietGepland, Loadbalancing" || combinedValue === "22kW, Sokkel, LosseKabel, Doorrekenen, Gepland, Loadbalancing" || combinedValue === "22kW, Sokkel, LosseKabel, Doorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "22kW, Sokkel, LosseKabel, Doorrekenen, NietGepland, Loadbalancing" || combinedValue === "22kW, Sokkel, LosseKabel, NietDoorrekenen, Gepland, Loadbalancing" || combinedValue === "22kW, Sokkel, LosseKabel, NietDoorrekenen, Gepland, GeenLoadbalancing" || combinedValue === "22kW, Sokkel, LosseKabel, NietDoorrekenen, NietGepland, Loadbalancing"       ) {
        Suggesties.style.display = 'block';
        Zappi.style.display = 'block';
        AlfenDouble.style.display = 'none';
        AlfenSingle.style.display = 'none';
        VetonOne.style.display = 'none';
        Easee.style.display = 'block';
        SmappeeWall.style.display = 'block';
        SmappeeBase.style.display = 'block';
        SmappeeOne.style.display = 'block';
        PulsarPro.style.display = 'none';
        PulsarMax.style.display = 'none';
    }

         // 11
         else if (combinedValue === "13kW, Wand, VasteKabel, Doorrekenen, NietGepland, Loadbalancing" || combinedValue === "22kW, Wand, VasteKabel, Doorrekenen, NietGepland, Loadbalancing" || combinedValue === "22kW, Sokkel, VasteKabel, Doorrekenen, NietGepland, Loadbalancing"         ) {
          Suggesties.style.display = 'block';
          Zappi.style.display = 'block';
          AlfenDouble.style.display = 'none';
          AlfenSingle.style.display = 'none';
          VetonOne.style.display = 'none';
          Easee.style.display = 'none';
          SmappeeWall.style.display = 'block';
          SmappeeBase.style.display = 'none';
          SmappeeOne.style.display = 'none';
          PulsarPro.style.display = 'block';
          PulsarMax.style.display = 'none';
      }

           // 12
    else if (combinedValue === "13kW, Wand, VasteKabel, NietDoorrekenen, NietGepland, Loadbalancing" || combinedValue === "22kW, Wand, VasteKabel, NietDoorrekenen, NietGepland, Loadbalancing" || combinedValue === "22kW, Sokkel, VasteKabel, NietDoorrekenen, NietGepland, Loadbalancing"    ) {
      Suggesties.style.display = 'block';
      Zappi.style.display = 'block';
      AlfenDouble.style.display = 'none';
      AlfenSingle.style.display = 'none';
      VetonOne.style.display = 'none';
      Easee.style.display = 'none';
      SmappeeWall.style.display = 'block';
      SmappeeBase.style.display = 'none';
      SmappeeOne.style.display = 'none';
      PulsarPro.style.display = 'block';
      PulsarMax.style.display = 'block';
  }

       // 13
       else if (combinedValue === "13kW, Sokkel, VasteKabel, Doorrekenen, NietGepland, Loadbalancing"       ) {
        Suggesties.style.display = 'block';
        Zappi.style.display = 'block';
        AlfenDouble.style.display = 'none';
        AlfenSingle.style.display = 'none';
        VetonOne.style.display = 'block';
        Easee.style.display = 'none';
        SmappeeWall.style.display = 'block';
        SmappeeBase.style.display = 'none';
        SmappeeOne.style.display = 'none';
        PulsarPro.style.display = 'block';
        PulsarMax.style.display = 'none';
    }

         // 14
         else if (combinedValue === "13kW, Sokkel, VasteKabel, NietDoorrekenen, NietGepland, Loadbalancing" ) {
          Suggesties.style.display = 'block';
          Zappi.style.display = 'block';
          AlfenDouble.style.display = 'none';
          AlfenSingle.style.display = 'none';
          VetonOne.style.display = 'block';
          Easee.style.display = 'none';
          SmappeeWall.style.display = 'block';
          SmappeeBase.style.display = 'none';
          SmappeeOne.style.display = 'none';
          PulsarPro.style.display = 'block';
          PulsarMax.style.display = 'block';
      }

    else{
      Suggesties.style.display = 'none';
      Smappee.style.display = 'none';
      PulsarPro.style.display = 'none';
      PulsarMax.style.display = 'none';
      Alfen.style.display = 'none';
      Easee.style.display = 'none';
    }
    };
    });
