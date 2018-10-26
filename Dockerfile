FROM node:9
RUN apt update
RUN apt install -y apt-transport-https mc nano htop curl
RUN npm install yarn -g
RUN npm install serve -g
RUN mkdir app
WORKDIR app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install                                   
COPY .env .env
COPY public public
COPY src src
RUN yarn run build
EXPOSE 5000:5000
ENTRYPOINT ["serve"]
CMD ["-s", "build"]
