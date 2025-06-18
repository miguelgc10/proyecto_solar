// ===== SECCIÓN 1: CONSTANTES Y CONFIGURACIÓN =====
// Calcular la producción mensual de energía por panel solar
const produccionMensualPorPanel = 0.4 * 4 * 30; // 0.4kW x 4 horas/día x 30 días = 48kWh.
// 0.4 = Potencia del panel en kilovatios (400 watts)
// 4 = Horas promedio de sol efectivo por día
// 30 = Días promedio por mes
// Resultado: Cada panel produce aproximadamente 48 kWh al mes

// ===== SECCIÓN 2: FUNCIONES DE CÁLCULO =====

/**
 * Calcular cuántos paneles solares se necesitan
 * @param {number} consumo - Consumo mensual en kWh del usuario
 * @returns {number} - Número de paneles necesarios (siempre redondeado hacia arriba)
 */
function calcularPaneles(consumo) {
    // Dividir el consumo total entre la producción de un panel
    // Math.ceil() redondea hacia arriba para asegurar que se cubra todo el consumo
    // Ejemplo: si necesitas 2.3 paneles, se redondea a 3 paneles
    return Math.ceil(consumo / produccionMensualPorPanel);
}

/**
 * Calcular el ahorro mensual estimado en kWh
 * @param {number} consumo - Consumo mensual actual en kWh
 * @returns {number} - Ahorro estimado en kWh (redondeado al entero más cercano)
 */
function calcularAhorroMensual(consumo) {
    // Suponemos que los paneles solares reducen el 50% del consumo tradicional
    // Math.round() redondea al número entero más cercano
    // Ejemplo: 100 kWh x 0.5 = 50 kWh de ahorro
    return Math.round(consumo * .5);
}

// ===== SECCIÓN 3: FUNCIÓN PRINCIPAL DE INICIALIZACIÓN =====

/**
 * Función que se ejecuta cuando el DOM está completamente cargado
 * Configura todos los event listeners y la lógica de la aplicación
 */
function onDOMContentLoaded() {

    // ===== SUBSECCIÓN 3.1: OBTENER REFERENCIAS A ELEMENTOS HTML =====
    // Obtener referencia al campo de entrada donde el usuario escribe el consumo
    const consumoInput = document.getElementById('consumo');

    // Obtener referencias a las secciones de la interfaz
    const resultadosSection = document.getElementById('resultados');     // Sección que muestra los resultados
    const panelesNecesariosSpan = document.getElementById('paneles-necesarios'); // Elemento que muestra número de paneles
    const ahorroKwhSpan = document.getElementById('ahorro-kwh');         // Elemento que muestra el ahorro en kWh
    const errorMessage = document.getElementById('error-message');       // Elemento que muestra mensajes de error

    // ===== SUBSECCIÓN 3.2: CONFIGURAR EVENT LISTENER =====
    // Agregar un listener que se activa cada vez que el usuario escribe en el input
    consumoInput.addEventListener('input', function (inputEvent) {

        // ===== SUBSECCIÓN 3.3: OBTENER Y VALIDAR ENTRADA DEL USUARIO =====
        // Obtener el valor que escribió el usuario y convertirlo a número decimal
        const consumoValue = parseFloat(inputEvent.target.value);
        // inputEvent.target se refiere al elemento que disparó el evento (el input)
        // parseFloat() convierte texto a número decimal (ej: "123.5" → 123.5)

        // ===== SUBSECCIÓN 3.4: VALIDACIÓN DE DATOS =====
        // Verificar si el valor ingresado es válido
        if (isNaN(consumoValue) || consumoValue <= 0) {
            // isNaN() verifica si NO es un número válido
            // consumoValue <= 0 verifica si es cero o negativo

            // Si el valor no es válido:
            resultadosSection.classList.add('hidden');    // Ocultar la sección de resultados
            errorMessage.classList.remove('hidden');      // Mostrar mensaje de error
            return; // Salir de la función sin hacer más cálculos
        }

        // ===== SUBSECCIÓN 3.5: REALIZAR CÁLCULOS =====
        // Si el valor es válido, realizar los cálculos
        const paneles = calcularPaneles(consumoValue);         // Calcular número de paneles necesarios
        const ahorroMensual = calcularAhorroMensual(consumoValue); // Calcular ahorro mensual en kWh

        // ===== SUBSECCIÓN 3.6: ACTUALIZAR LA INTERFAZ =====
        // Mostrar los resultados en la página web
        panelesNecesariosSpan.textContent = String(paneles);      // Convertir número a texto y mostrarlo
        ahorroKwhSpan.textContent = String(ahorroMensual);        // Convertir número a texto y mostrarlo
        // String() convierte un número a texto para poder mostrarlo en HTML

        // Mostrar la sección de resultados y ocultar mensajes de error
        resultadosSection.classList.remove('hidden');  // Hacer visible la sección de resultados
        errorMessage.classList.add('hidden');          // Ocultar cualquier mensaje de error
    })
    // El addEventListener termina aquí - todo lo anterior se ejecuta cada vez que el usuario escribe
}

// ===== SECCIÓN 4: INICIALIZACIÓN DE LA APLICACIÓN =====
// Esperar a que todo el HTML esté cargado antes de ejecutar nuestro código
document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
// 'DOMContentLoaded' es un evento que se dispara cuando el navegador terminó de cargar todo el HTML
// En ese momento, llama a nuestra función onDOMContentLoaded() para inicializar la aplicación

// ===== FLUJO COMPLETO DE LA APLICACIÓN =====
/*
1. La página se carga → se dispara 'DOMContentLoaded'
2. Se ejecuta onDOMContentLoaded() → se configuran los event listeners
3. Usuario escribe en el input → se dispara 'input'
4. Se valida la entrada del usuario
5. Si es válida: se calculan paneles y ahorro, se muestran resultados
6. Si no es válida: se muestra mensaje de error
7. Este proceso se repite cada vez que el usuario modifica el input
*/