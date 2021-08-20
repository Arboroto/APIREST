const express = require('express');
const router = express.Router();
const serieCtrl = require('../controllers/seriesController');

// Routes
router.get('/', serieCtrl.getSeries);//llego a traves de /api/Series, yy en seriesCtrl llamamos al método que hemos creado
router.post('/', serieCtrl.createSerie);//crear serie
router.get('/:id', serieCtrl.getOneSerie);//especificamos la serie con la url a traves de este ID
router.put('/:id', serieCtrl.updateSerie);//para actualizar
router.delete('/:id', serieCtrl.deleteSerie);//eliminar
router.get('/categorias/:categorias', serieCtrl.getSeriesGenre);//(atributoClaseSerie/:datoQueLePasamos)

module.exports = router;
