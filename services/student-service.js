const BaseService = require('./base-service');
const Student = require('../models/student');

class StudentService extends BaseService {
  async findByStudentName(name) {
    return this.findBy('name', name);
  }
}

module.exports = new StudentService(Student);
