'use strict';

var util = {};

util.dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
util.mes = {'9': 'Octubre'};

util.expositoresToString = function(speakers) {

  var answ = speakers.map(function(speaker) {
    return speaker.nombre;
  });

  return answ.join(', ');
};

util.procesarCharlas = function(charlas){
  var nuevoFormato = {}

  for(var i = 0; i < charlas.length; i++){
    var charla = charlas[i];

    if(!nuevoFormato[charla.fecha]){

      var fecha = new Date(charla.fecha),
          dia = util.dias[fecha.getDay()],
          mes = util.mes[fecha.getMonth()],
          numDia = fecha.getDate() + 1;

      nuevoFormato[charla.fecha] = {
        header: dia + ' ' + numDia + ' de ' + mes,
        charlas: []
      };
    }

    nuevoFormato[charla.fecha].charlas.push({
      hora: util.procesarHora(charla.hora),
      nombre: charla.titulo,
      expositor: util.expositoresToString(charla.speakers)
    });
  }

  util.ordenarCharlas(nuevoFormato);
  nuevoFormato = util.ordenarDiccionario(nuevoFormato);
  return nuevoFormato;
};

util.ordenarCharlas = function(dir) {
  for(var dia in dir) {
    dir[dia].charlas = dir[dia].charlas.sort(function(a, b) {
      if(a.hora < b.hora)
        return -1;

      if(a.hora > b.hora)
        return 1;

      if(a.hora == b.hora)
        return 0;
    })
  }
}

util.ordenarDiccionario = function(dir) {
  var answ = [];

  var keys = Object.keys(dir);
  keys = keys.sort();

  for(var i=0; i<keys.length; i++)
    answ.push(dir[keys[i]]);

  return answ;
};

util.procesarHora = function(hora) {
  var horaRegex = /^(\d{2}:\d{2})/g;
  var answ = horaRegex.exec(hora);

  return answ[0];
}
