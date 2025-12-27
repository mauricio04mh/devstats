import kagglehub
import os
import shutil

# Define la ruta de destino
current_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(current_dir)
destination_path = os.path.join(project_root, "data", "raw")

# Crear la carpeta si no existe
os.makedirs(destination_path, exist_ok=True)

# Descargar el dataset
print("Descargando dataset...")
downloaded_path = kagglehub.dataset_download("berkayalan/stack-overflow-annual-developer-survey-2024")

# Mover archivos al directorio data/raw
print(f"Moviendo archivos de {downloaded_path} a {destination_path}...")
for item in os.listdir(downloaded_path):
    source = os.path.join(downloaded_path, item)
    destination = os.path.join(destination_path, item)
    
    # Si el archivo ya existe en destino, eliminarlo
    if os.path.exists(destination):
        if os.path.isdir(destination):
            shutil.rmtree(destination)
        else:
            os.remove(destination)
    
    # Mover el archivo o carpeta
    shutil.move(source, destination)

print(f"✓ Dataset descargado exitosamente en: {destination_path}")