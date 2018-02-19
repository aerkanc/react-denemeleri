class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

const person = new Person('erkan');
const student = new Student('erkan', 'Gazi Ün.');

console.log(person.getName());
console.log(student.getSchool(), student.getName());
