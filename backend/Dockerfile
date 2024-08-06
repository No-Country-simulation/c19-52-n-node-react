# Utiliza una imagen base con Node.js

FROM node:18-alpine
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

RUN rm -rf node_modules/

# Instala las dependencias del proyecto

RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# TODO: esto expone en docker a pc??
# Expone el puerto en el que la aplicación correrá
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["npm","run", "start:prod"]
