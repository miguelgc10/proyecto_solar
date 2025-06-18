const produccionMensualPorPanel = 0.4 * 4 * 30; // 0.4kW x 4 horas/día x 30 días = 48kWh.

function calcularPaneles(consumo) {
    return Math.ceil(consumo / produccionMensualPorPanel);
}

function calcularAhorroMensual(consumo) {
    return consumo * .5;
}

document.addEventListener('DOMContentLoaded', function () {
    const consumoInput = document.getElementById('consumo');

    const resultadosSection = document.getElementById('resultados');
    const panelesNecesariosSpan = document.getElementById('paneles-necesarios');
    const ahorroKwhSpan = document.getElementById('ahorro-kwh');
    const errorMessage = document.getElementById('error-message');

    consumoInput.addEventListener('input', function (inputEvent) {
        const consumoValue = parseFloat(inputEvent.target.value);

        if (isNaN(consumoValue) || consumoValue <= 0) {
            resultadosSection.classList.add('hidden');
            errorMessage.classList.remove('hidden');
            return;
        }

        errorMessage.classList.add('hidden');

        const paneles = calcularPaneles(consumoValue);
        const ahorroMensual = calcularAhorroMensual(consumoValue);

        panelesNecesariosSpan.textContent = `${paneles}`;
        ahorroKwhSpan.textContent = ahorroMensual;
        resultadosSection.classList.remove('hidden');
    })
});
