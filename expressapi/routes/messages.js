var express = require('express');
var router = express.Router();
var [getMsg, insertMsg, updateMsg, deleteMsg] = require('../controllers/messages');

/* GET product listing. */
router.get('/', async function (req, res, next) {
  const msg = await getMsg();
  res.send(msg);
});
/**
 * POST product
 */
router.post('/', async function (req, res, next) {
  const newMsg = await insertMsg(req.body);
  res.send(newMsg);
});

router.put('/:id', async function (req, res, next) {
    const editMsg = await updateMsg(req.params.id, req.body);
    res.send(editMsg);
});

router.delete('/:id', async function (req, res, next) {
    const msg = await deleteMsg(req.params.id);
    res.send(msg);
});

module.exports = router;