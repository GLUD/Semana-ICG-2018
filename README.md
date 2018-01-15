# SLUD_WEB
Página web (frontend) de la Semana Linux 2017 y de las anteriores organizadas en diferentes branchs. Se complementa con el [backend](https://github.com/GLUD/SLUD-backend)


Este proyecto requiere un servidor HTML con acceso a Internet (como nginx)

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
- [x] Eliminar hardcoding (url, claves, etc) se usa el método constants en el módulo SLUD en el archivo js/app.js, agregar mas variables pertinentes
- [ ] Organizar otros archivos
- [ ] Agregar traducciones (ingles,...)
- [ ] Agregar configuración para analítica de datos (Goggle Analytics, etc)
