<script>
document.addEventListener('DOMContentLoaded', function () {
        var hiddenField = document.querySelector('input[name="PlaatsHF"]');
        var radioButtons = document.querySelectorAll('input[name="Plaats"]');

        hiddenField.value = 'yeet cowboy';

        radioButtons.forEach(function (radioButton) {
            radioButton.addEventListener('change', function () {
                hiddenField.value = this.value;
            });
        });
    });
</script>
