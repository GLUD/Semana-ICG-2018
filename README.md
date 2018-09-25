# Semana de Ingeniería Catastral y Geodesia 2018

Página web (frontend) de la Semana de  Ingeniería Catastral y Geodesia, este repositorio es un fork del repositorio [SLUD-frontend](https://github.com/GLUD/SLUD-frontend).

Este proyecto requiere un servidor HTML con acceso a Internet (como nginx) ó ejecutar npm server como se explica a continuación.

## USO

### Local
se puede ejecutar un servidor de desarrollo local con live reload así:
```bash
$ npm install # ó yarn install
$ npm run-script server # ó yarn server
```
una vez que se quiera pasar a produccion, ejecutar:

```bash
$ npm run-script build # ó yarn build
```
que creará el archivo *bundle.js* que necesita *index.html*.

### Docker
Adicionalmente se puede ejecutar con docker como:

```bash
$ docker run -p "80:80" glud/slud-frontend:latest
```

O usar Docker swarm con el archivo de ejemplo *docker-stack.yml* para ejecutar el frontend y el [backend](https://github.com/GLUD/SLUD-backend/):

```bash
$ docker swarm init # si no se ha hecho antes
$ docker stack deploy -c docker-stack.yml slud
```

## TODO

- [ ] Organizar archivos angular y assets
- [ ] Agregar traducciones (ingles,...)
- [ ] usar webpack (minimizar) para los CSS, img, etc (para producción).
- [ ] agregar sourcemaps.
