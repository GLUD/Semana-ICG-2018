# SLUD_WEB
Página web (frontend) de la Semana Linux 2017 y de las anteriores organizadas en diferentes branchs. Se complementa con el [backend](https://github.com/GLUD/SLUD-backend)


Este proyecto requiere un servidor HTML con acceso a Internet (como nginx) ó ejecutar npm server como se explica a continuación.

## USO

### Local
se puede ejecutar un servidor de desarrollo local con live reload así:
```bash
$ npm install # ó yarn install
$ npm server # ó yarn server
```
una vez que se quiera pasar a produccion, ejecutar:

```bash
$ npm build # ó yarn build
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

- [x] Dar soporte a Docker
- [x] Eliminar hardcoding (url, claves, etc) -> se usa el método constants en el módulo SLUD en el archivo js/app.js, agregar mas variables pertinentes
- [ ] Organizar archivos angular y assets
- [ ] Agregar traducciones (ingles,...)
- [ ] Agregar configuración para analítica de datos (Goggle Analytics, etc)
- [x] se centraliza las dependencias del proyecto en *package.json*.
- [x] actualización de bootstrap, jquery, normalize, etc.
- [x] uso básico de webpack (para minimizar js).
- [x] agregar soporte para ES6 (import, classes, etc).
- [x] agregar reglas ESLint (para buenas prácticas de codificación).
- [ ] usar webpack (minimizar) para los CSS, img, etc (para producción).
- [ ] agregar sourcemaps.
