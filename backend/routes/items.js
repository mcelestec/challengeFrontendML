/*
    Items routes

    host + /api/items/
*/
const { Router } = require('express');
const router = Router();

const { getItem, search } = require('../controllers/items');

router.get('/', search);
router.get('/:id', getItem);


module.exports = router;