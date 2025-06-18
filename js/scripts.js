const produccionMensualPorPanel = 0.4 * 4 * 30; // 0.4kW x 4 horas/día x 30 días = 48kWh.

function calcularPaneles(consumo) {
    return Math.ceil(consumo / produccionMensualPorPanel);
}

function calcularAhorroMensual(consumo) {
    return Math.round(consumo * .5);
}

function onDOMContentLoaded() {
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

        const paneles = calcularPaneles(consumoValue);
        const ahorroMensual = calcularAhorroMensual(consumoValue);

        panelesNecesariosSpan.textContent = String(paneles);
        ahorroKwhSpan.textContent = String(ahorroMensual);

        resultadosSection.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    })
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
