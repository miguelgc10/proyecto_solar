# Importar las librerías necesarias
import matplotlib.pyplot as plt  # Para crear gráficos y visualizaciones
import numpy as np              # Para operaciones matemáticas y arrays

# ===== SECCIÓN 1: PREPARACIÓN DE DATOS =====
# Definir los datos que se van a graficar
months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
traditional_consumption = [400, 390, 410, 420, 430, 440, 450, 460, 440, 430, 410, 400]  # kWh consumidos tradicionalmente
solar_consumption = [200, 195, 205, 210, 215, 220, 225, 230, 220, 215, 205, 200]        # kWh consumidos con paneles solares
monthly_savings = [30, 29, 31, 32, 33, 34, 35, 36, 34, 33, 31, 30]                     # Ahorro mensual en USD

# ===== SECCIÓN 2: CONFIGURACIÓN DE LA FIGURA =====
# Crear una figura con 2 subgráficos apilados verticalmente
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 10))
# 2 = número de filas, 1 = número de columnas, figsize = tamaño en pulgadas (ancho, alto)

# Establecer el título principal de toda la figura
fig.suptitle('Comparación de Consumo Energético: Tradicional vs Solar',
             fontsize=16,        # Tamaño de fuente
             fontweight='bold')  # Texto en negrita

# ===== SECCIÓN 3: PRIMER SUBGRÁFICO - COMPARACIÓN DE CONSUMO =====
# Crear posiciones numéricas para el eje X (0, 1, 2, 3... 11)
x = np.arange(len(months))  # Convierte 12 meses en posiciones [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
width = 0.35               # Ancho de cada barra (35% del espacio disponible)

# Crear barras para consumo tradicional (desplazadas hacia la izquierda)
bars1 = ax1.bar(
    x - width / 2,              # Posición: centro menos la mitad del ancho = hacia la izquierda
    traditional_consumption,     # Altura de las barras (datos de consumo)
    width,                      # Ancho de las barras
    label='Consumo Tradicional', # Etiqueta para la leyenda
    color='#FF6B6B',            # Color rojo claro en formato hexadecimal
    alpha=0.8                   # Transparencia (80% opaco, 20% transparente)
)

# Crear barras para consumo solar (desplazadas hacia la derecha)
bars2 = ax1.bar(
    x + width / 2,              # Posición: centro más la mitad del ancho = hacia la derecha
    solar_consumption,          # Altura de las barras (datos de consumo solar)
    width,                      # Ancho de las barras (igual que las anteriores)
    label='Consumo con Paneles Solares', # Etiqueta para la leyenda
    color='#4ECDC4',            # Color turquesa en formato hexadecimal
    alpha=0.8                   # Misma transparencia que las barras tradicionales
)

# Configurar etiquetas y formato del primer subgráfico
ax1.set_xlabel('Meses')                    # Etiqueta del eje X
ax1.set_ylabel('Consumo (kWh)')            # Etiqueta del eje Y
ax1.set_title('Consumo Energético Mensual') # Título del subgráfico
ax1.set_xticks(x)                          # Definir posiciones donde aparecen las etiquetas del eje X
ax1.set_xticklabels(months,                # Usar nombres de meses como etiquetas
                    rotation=45,            # Rotar texto 45 grados para evitar superposición
                    ha='center')            # Alineación horizontal centrada
ax1.legend()                               # Mostrar leyenda con las etiquetas de las barras
ax1.grid(True, alpha=0.3)                  # Mostrar cuadrícula suave (30% de opacidad)

# ===== SECCIÓN 4: AÑADIR VALORES ENCIMA DE LAS BARRAS =====
# Añadir etiquetas con valores encima de las barras tradicionales
for bar in bars1:  # Iterar sobre cada barra tradicional
    height = bar.get_height()               # Obtener la altura de la barra (valor del dato)
    ax1.annotate(
        f'{height}',                        # Texto a mostrar (valor de la barra)
        xy=(bar.get_x() + bar.get_width() / 2, height),  # Posición: centro horizontal, top vertical
        xytext=(0, 3),                      # Desplazamiento: 0 horizontal, 3 puntos hacia arriba
        textcoords="offset points",          # Tipo de coordenadas para el desplazamiento
        ha='center',                        # Alineación horizontal centrada
        va='bottom',                        # Alineación vertical desde abajo del texto
        fontsize=8                          # Tamaño de fuente pequeño
    )

# Añadir etiquetas con valores encima de las barras solares
for bar in bars2:  # Iterar sobre cada barra solar
    height = bar.get_height()               # Obtener la altura de la barra
    ax1.annotate(
        f'{height}',                        # Texto a mostrar
        xy=(bar.get_x() + bar.get_width() / 2, height),  # Posición centrada en la barra
        xytext=(0, 3),                      # 3 puntos de separación hacia arriba
        textcoords="offset points",          # Coordenadas relativas
        ha='center',                        # Centrado horizontalmente
        va='bottom',                        # Alineado desde abajo
        fontsize=8                          # Tamaño de fuente
    )

# ===== SECCIÓN 5: SEGUNDO SUBGRÁFICO - AHORRO ECONÓMICO =====
# Crear barras simples para mostrar el ahorro mensual
bars3 = ax2.bar(months,          # Usar directamente los nombres de los meses
                monthly_savings,  # Datos de ahorro económico
                color='#45B7D1',  # Color azul
                alpha=0.8)        # Misma transparencia

# Configurar etiquetas del segundo subgráfico
ax2.set_xlabel('Meses')                    # Etiqueta del eje X
ax2.set_ylabel('Ahorro (USD)')             # Etiqueta del eje Y (en dólares)
ax2.set_title('Ahorro Económico Mensual')  # Título del subgráfico
ax2.set_xticklabels(months,                # Etiquetas de meses
                    rotation=45,            # Rotación de 45 grados
                    ha='center')            # Centrado horizontal
ax2.grid(True, alpha=0.3)                  # Cuadrícula suave

# Añadir valores encima de las barras de ahorro
for bar in bars3:  # Iterar sobre cada barra de ahorro
    height = bar.get_height()               # Obtener altura (valor de ahorro)
    ax2.annotate(
        f'${height}',                       # Texto con símbolo de dólar
        xy=(bar.get_x() + bar.get_width() / 2, height),  # Posición centrada
        xytext=(0, 3),                      # Separación hacia arriba
        textcoords="offset points",          # Coordenadas relativas
        ha='center',                        # Centrado horizontal
        va='bottom',                        # Alineado desde abajo
        fontsize=9                          # Tamaño de fuente ligeramente mayor
    )

# ===== SECCIÓN 6: CÁLCULOS DE ESTADÍSTICAS RESUMIDAS =====
total_traditional = sum(traditional_consumption)     # Suma total del consumo tradicional
total_solar = sum(solar_consumption)                # Suma total del consumo solar
total_savings_kwh = total_traditional - total_solar  # Diferencia = ahorro en kWh
total_savings_usd = sum(monthly_savings)            # Suma total del ahorro económico

# ===== SECCIÓN 7: CAJA DE RESUMEN CON ESTADÍSTICAS =====
# Crear texto formateado con estadísticas anuales
summary_text = f"""Resumen Anual:
• Consumo tradicional: {total_traditional:,} kWh
• Consumo con solar: {total_solar:,} kWh
• Ahorro energético: {total_savings_kwh:,} kWh ({total_savings_kwh / total_traditional * 100:.1f}%)
• Ahorro económico: ${total_savings_usd} USD"""

# Añadir caja de texto en la esquina inferior izquierda
fig.text(
    0.02,                       # Posición horizontal (2% desde la izquierda)
    0.02,                       # Posición vertical (2% desde abajo)
    summary_text,               # Contenido del texto
    fontsize=10,                # Tamaño de fuente
    bbox=dict(                  # Configuración de la caja decorativa
        boxstyle="round,pad=0.5",    # Bordes redondeados con relleno
        facecolor="lightyellow",     # Fondo amarillo claro
        alpha=0.8                    # Transparencia de la caja
    )
)

# ===== SECCIÓN 8: AJUSTES DE DISEÑO Y ESPACIADO =====
plt.tight_layout()              # Ajustar automáticamente el espaciado entre elementos
plt.subplots_adjust(bottom=0.17) # Dejar 17% de espacio en la parte inferior para la caja de resumen

# ===== SECCIÓN 9: GUARDAR Y MOSTRAR LA FIGURA =====
plt.savefig('comparacion_consumo_solar.png',  # Nombre del archivo a guardar
            dpi=600,                          # Resolución alta (600 puntos por pulgada)
            bbox_inches='tight')               # Recortar espacios en blanco innecesarios

print("Gráfica guardada como 'comparacion_consumo_solar.png'")  # Confirmación en consola

# Mostrar la gráfica en pantalla (opcional)
# plt.show()  # Descomenta esta línea si quieres ver la gráfica en pantalla