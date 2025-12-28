# DevStats 📊

Este proyecto está diseñado para analizar las estadísticas de desarrolladores a partir de la encuesta anual de Stack Overflow.

## 🚀 Guía de Inicio Rápido

Sigue estos pasos para configurar el entorno y obtener los datos necesarios para el análisis.

### 1. Instalación de Dependencias

Asegúrate de tener Python instalado. Luego, instala las librerías necesarias ejecutando:

```bash
pip install -r requirements.txt
```

### 2. Obtención de Raw Data (Datos Crudos)

Para descargar el dataset original directamente desde Kaggle, utiliza el script de descarga:

```bash
python src/dataset_download.py
```

Este script descargará los archivos y los ubicará automáticamente en la carpeta `data/raw/`.

### 3. Procesamiento de Datos (Processed Data)

Una vez que tengas los datos crudos, puedes generar los datos procesados ejecutando el notebook de procesamiento:

1. Abre el archivo `notebooks/00_from_raw_to_processed.ipynb`.
2. Ejecuta todas las celdas del notebook.

Este proceso limpiará los datos, manejará valores nulos y generará el archivo final para el análisis en `data/processed/df_final_v1.csv`.

## 📁 Estructura del Proyecto

- `data/`: Contiene los datasets (raw y processed).
- `notebooks/`: Notebooks de Jupyter para análisis y procesamiento.
- `src/`: Scripts de Python para tareas automatizadas (como la descarga de datos).
- `reports/`: Tablas y visualizaciones generadas.

---
*Desarrollado para el análisis de tendencias en el ecosistema de desarrollo.*
