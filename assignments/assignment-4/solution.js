class Person {
    static instanceCount = 0;

    constructor(name) {
        this.name = name;
        Person.instanceCount++;
    }

    introduceYourself() {
        return `Hello, my name is ${this.name}`;
    }

    getRole() {
        return "Person";
    }

    static countInstances() {
        return Person.instanceCount;
    }
}

class GradeBook {
    constructor() {
        this.grades = {};
    }

    addGrade(subject, grade) {
        if (!this.grades[subject]) {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
    }

    getGrades(subject) {
        return this.grades[subject] || [];
    }

    getAllGrades() {
        return this.grades;
    }

    static format() {
        return { subject: [] };
    }
}

class Student extends Person {
    static instanceCount = 0;

    constructor(name) {
        super(name);
        this.gradeBook = new GradeBook();
        Student.instanceCount++;
    }

    introduceYourself() {
        return `Hello, my name is ${this.name} and I am a student.`;
    }

    getGradeBook() {
        return this.gradeBook;
    }

    getGrade(subject) {
        return this.gradeBook.getGrades(subject);
    }

    schoolUniform() {
        return "School shirt and pants";
    }

    getRole() {
        return "Student";
    }

    countInstances() {
        return Student.instanceCount;
    }
}

class Teacher extends Person {
    static instanceCount = 0;

    constructor(name, subject) {
        super(name);
        this.subject = subject;
        Teacher.instanceCount++;
    }

    introduceYourself() {
        return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
    }

    teach(student, grade) {
        student.getGradeBook().addGrade(this.subject, grade);
    }

    getSubject() {
        return this.subject;
    }

    getStudentGrade(student) {
        return student.getGrade(this.subject);
    }

    dressCode() {
        return "Formal shirt and pants";
    }

    getRole() {
        return "Teacher";
    }

    countInstances() {
        return Teacher.instanceCount;
    }
}

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
    }

    enroll(student) {
        if (student instanceof Student) {
            this.students.push(student);
        }
    }

    expel(student) {
        const index = this.students.indexOf(student);
        if (student instanceof Student) {
            if (index !== -1) {
                this.students.splice(index, 1);
            }
        }
    }

    hire(teacher) {
        if (teacher instanceof Teacher) {
            this.teachers.push(teacher);
        }
    }

    fire(teacher) {
        const index = this.teachers.indexOf(teacher);
        if (teacher instanceof Teacher) {
            if (index !== -1) {
                this.teachers.splice(index, 1);
            }
        }
    }
}

const person = new Person("Mike");
console.log(person.introduceYourself());
console.log("Person instances:", Person.countInstances());

const teacher = new Teacher("Bobby", "Science");
console.log(teacher.introduceYourself());
console.log("Teacher instances:", Teacher.countInstances());
