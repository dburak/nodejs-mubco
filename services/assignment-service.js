const BaseService = require('./base-service');
const Assignment = require('../models/assignment');
const studentService = require('./student-service');
const instructorService = require('./instructor-service');

class AssignmentService extends BaseService {
  async findByStudentId(studentId) {
    return this.findBy('student', studentId);
  }

  async findByInstructorId(instructorId) {
    return this.findBy('instructor', instructorId);
  }

  async assign(studentId, instructorId, title, desc) {
    const student = await studentService.find(studentId);
    const instructor = await instructorService.find(instructorId);

    const assignment = await this.insert({
      student,
      instructor,
      title,
      desc,
    });
    student.assignments.push(assignment);

    await student.save();

    return assignment;
  }
}

module.exports = new AssignmentService(Assignment);
