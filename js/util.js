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
      hora: charla.hora,
      nombre: charla.titulo,
      expositor: util.expositoresToString(charla.speakers)
    });
  }

  return nuevoFormato;
};
