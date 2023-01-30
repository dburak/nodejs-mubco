const router = require('express').Router();
const { studentService, assignmentService } = require('../services');

router.get('/', async (req, res) => {
  res.send(await studentService.load());
});

router.post('/', async (req, res, next) => {
  try {
    const student = await studentService.insert(req.body);
    res.send(student);
  } catch (e) {
    next(e);
  }
});

router.post('/:studentId/assignments', async (req, res) => {
  const { studentId } = req.params;
  const { instructorId, title, desc } = req.body;

  const assignment = await assignmentService.assign(
    studentId,
    instructorId,
    title,
    desc
  );

  res.send(assignment);
});

module.exports = router;
