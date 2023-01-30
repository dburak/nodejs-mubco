const router = require('express').Router();
const { instructorService } = require('../services');

router.get('/', async (req, res) => {
  res.send(await instructorService.load());
});

router.post('/', async (req, res) => {
  const instructor = await instructorService.insert(req.body);

  res.send(instructor);
});

module.exports = router;