# proyecto_solar

Un proyecto para análisis y visualización de datos solares utilizando Python.

## Requisitos previos

- Python 3.7 o superior
- pip (gestor de paquetes de Python)

## Instalación

### 1. Clonar el repositorio
```
bash
git clone <url-del-repositorio>
cd proyecto_solar
```
### 2. Crear un entorno virtual (recomendado)
```
bash
# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# En macOS/Linux:
source venv/bin/activate

# En Windows:
venv\Scripts\activate
```
### 3. Instalar dependencias
```
bash
pip install -r requirements.txt
```
## Dependencias principales

Este proyecto utiliza las siguientes librerías:

- **matplotlib** (3.10.3): Para crear gráficos y visualizaciones
- **numpy** (2.3.0): Para cálculos numéricos y manejo de arrays
- **pillow** (11.2.1): Para procesamiento de imágenes
- **contourpy** (1.3.2): Para crear gráficos de contorno
- **fonttools** (4.58.4): Para manejo de fuentes
- Y otras dependencias de soporte

## Uso
```
bash
# Activar el entorno virtual si no está activado
source venv/bin/activate  # macOS/Linux
# o
venv\Scripts\activate     # Windows

# Ejecutar el proyecto
python main.py
```
## Desactivar entorno virtual
```
bash
deactivate
```
## Actualizar dependencias

Para actualizar las dependencias a sus últimas versiones:
```
bash
pip install --upgrade -r requirements.txt
```
## Generar nuevo requirements.txt

Si añades nuevas dependencias al proyecto:
```
bash
pip freeze > requirements.txt
```