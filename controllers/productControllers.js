const db = require('../db/index');

const productController = {
    index: function(req, res){
        return res.render('listadoBandas' ,{
            lista: db.lista
        })
    },

    detalleBanda:  function (req, res) {
        let nombreBanda = req.params.id;
        let resultado = [];
        for (let i = 0; i < db.lista.length; i++) {
            if (nombreBanda == db.lista[i].nombre) {
                resultado.push(db.lista[i]);
            }
        }
        if (resultado.length == 0) {
            return res.send('no existe una banda con el nombre:' + nombreBanda)
        }
        else {

            return res.render('detalleBanda', {
                index: resultado
            })

        }
    },




    detalleGenero:  function (req, res) {
        let nombreGenero = req.params.id;
        let resultado = [];
        for (let i = 0; i < db.lista.length; i++) {
            if (nombreGenero == db.lista[i].genero) {
                resultado.push(db.lista[i]);
            }
        }
        if (resultado.length == 0) {
            return res.send('no existe una genero con el nombre:' + nombreGenero)
        }
        else {

            return res.render('detalleBanda', {index: resultado})

        }
    }
}

module.exports = productController;