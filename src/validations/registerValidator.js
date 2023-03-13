const {check, body} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('email')
    .notEmpty().withMessage('Debes ingresar un email válido'),

    check('edad')
    .notEmpty().withMessage('Debes ingresar su edad').bail()
    .isNumeric().withMessage('Debe ingresar un numero'),

    check('backgroundColor')
    .notEmpty().withMessage('Debes seleccionar un color')
]