document.getElementById('convertButton').addEventListener('click', function() {
    const celsiusInput = document.getElementById('celsiusInput').value;
    const resultElement = document.getElementById('result');

    // Validación
    const isValidNumber = input => !isNaN(input) && input.trim() !== '';

    if (isValidNumber(celsiusInput)) {
        const celsius = parseFloat(celsiusInput);
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        resultElement.innerHTML = `Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
                                   Temperatura en Kelvin: ${kelvin.toFixed(2)} °K`;
    } else {
        alert('Ingresa un número válido');
        document.getElementById('celsiusInput').value = '';
        resultElement.textContent = '';
    }
});
