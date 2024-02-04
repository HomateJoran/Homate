<script>
    // Set a default value for the hidden field
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('input[name="PlaatsHF"]').value = 'yeet cowboy';
    });

    // Attach an event listener to the radio buttons
    var radioButtons = document.querySelectorAll('input[name="Plaats"]');
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            // Update the hidden field value when a radio button is selected
            document.querySelector('input[name="PlaatsHF"]').value = this.value;
        });
    });
</script>
