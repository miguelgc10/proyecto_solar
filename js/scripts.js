document.addEventListener('DOMContentLoaded', function() {

    const calcularBtn = document.getElementById('calcular-btn');
    const consumoInput = document.getElementById('consumo');
    const tipoEnergiaSelect = document.getElementById('tipo-energia');
    const resultadosSection = document.getElementById('resultados');
    const ahorroKwhsSpan = document.getElementById('ahorro-kwh');
    const ahorroCo2Span = document.getElementById('ahorro-co2');
    const ahorroUsdSpan = document.getElementById('ahorro-usd');

    calcularBtn.addEventListener('click', function() {
        const consumo = parseFloat(consumoInput.value);
        const tipoEnergia = tipoEnergiaSelect.value;

        // si es una o es ||, pero si es una "y" es && para los condicionales
        if (isNaN(consumo) || consumo <= 0) {
            alert('Por favor, ingresa un consumo válido mayor a cero.');
            return;
        }

        // factores de ahorro dependiendo del tipo de energia 
        let factorAhorro;
        switch(tipoEnergia){
            case 'solar':
                factorAhorro = 0.2; // 20% de ahorro
                break;
            case 'eolica':
                factorAhorro = 0.25; // 25% de ahorro
                break;
            case 'hidrogeno':
                factorAhorro = 0.3; // 30% de ahorro
                break;
            default:
                factorAhorro = 0; // No hay ahorro si no se selecciona un tipo válido
        }

        // calculo de ahorro
        const ahorroEnergia = consumo * factorAhorro;
        const reduccionCo2 = ahorroEnergia * 0.5; // 0.5 kg de CO2 por kWh ahorrado
        const ahorroEconomico = ahorroEnergia * 0.15; // 0.15 USD por kWh ahorrado

        // mostrar resultados
        ahorroKwhsSpan.textContent = ahorroEnergia.toFixed(2);
        ahorroCo2Span.textContent = reduccionCo2.toFixed(2);
        ahorroUsdSpan.textContent = ahorroEconomico.toFixed(2);

        resultadosSection.classList.remove('hidden');
    });
});
