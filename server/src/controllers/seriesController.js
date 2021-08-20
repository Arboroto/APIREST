const Serie = require('../models/serieModel');

const  serieCtrl = {};

// NO HAS PROBADO EN POSTMAN SI LAS CONSULTAS FUNCIONAN, TENLO EN CUENTA AL CREAR LA WEB Y QUE ALGO FALLE

serieCtrl.getSeries = async (req, res) => {//OBTENEMOS TODAS LAS SERIE
    const series = await Serie.find()
        .catch((err) => {
            console.error(err);
        });
    res.json(series);
};

serieCtrl.createSerie = async (req, res) =>{//CREAMOS UNA SERIE
  const serie = new Serie({
      titulo: req.body.titulo,
      categorias:req.body.categorias,
      capitulos: req.body.capitulos,
      anyo: req.body.anyo,
      sinopsis: req.body.sinopsis,
      puntuaciones: req.body.puntuaciones,
      imagenes: req.body.imagenes
  });
  await serie.save()
      .catch((err) => {
      console.error(err)
    });
  res.json({'status': 'Serie insertada con éxito'});
};

serieCtrl.getOneSerie = async (req, res) =>{
    const serie = await Serie.findById(req.params.id)//si no funciona, prueba a poner el find() en lugar de findById
        .catch((err) => {
            console.error(err);
        });
    res.json(serie)
};

serieCtrl.updateSerie = async (req, res) =>{ //update de un solo elemento

    const serie = {
        titulo: req.body.titulo,
        categorias:req.body.categorias,
        capitulos: req.body.capitulos,
        anyo: req.body.anyo,
        sinopsis: req.body.sinopsis,
        puntuaciones: req.body.puntuaciones,
        imagenes: req.body.imagenes
    };
await Serie.findByIdAndUpdate(req.params.id, {$set: serie}, {new: true}) //NEW : TRUE ->si no existe, lo crea.
    .catch((err) => { console.error(err); });
    res.json({status: 'La serie ha sido actualizada correctamente, o en su defecto, ya que el new es = a true, se ha creado la serie insertada.'});
};

serieCtrl.deleteSerie = async  (req, res) => {
    await Serie.findByIdAndDelete(req.params.id)
        .catch((err) => {
            console.error(err);
        });
    res.json({status: 'Serie eliminada de la base de datos.'});
};

serieCtrl.getSeriesGenre = async (req, res) => {//OBTENEMOS LAS SERIES
    const series = await Serie.find( {categorias: { $all: [req.params.categorias] } } ) //find(categorias:{$all: [categoria]} )
        .catch((err) => {
            console.error(err);
        });
    res.json(series);
};


module.exports = serieCtrl;
