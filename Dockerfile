# Imagem base do Node
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o projeto
COPY . .

# Gera o build de produção
RUN npm run build

# Expõe a porta usada pelo Angular
EXPOSE 4200

# Comando para servir o build
CMD ["npx", "serve", "-s", "dist", "-l", "4200"]
