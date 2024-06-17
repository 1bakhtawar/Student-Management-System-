class school {
    name;
    students = [];
    teachers = [];
    addStudent(stObj) {
        this.students.push(stObj);
    }
    addTeacher(teObj) {
        this.teachers.push(teObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    rollNumber;
    schoolName;
    constructor(name, rollNumber, schoolName) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
//school name
let school1 = new school("Dehli High School");
let school2 = new school("Metropolitan  School");
let school3 = new school("Al Noor School");
//student name
let s1 = new Student("Ali", 1234, "Dehli High School");
let s2 = new Student("Hamzah", 1289, "Metropolitan  School");
let s3 = new Student("Kamran", 8765, "Dehli High School");
//teacher
let t1 = new Teacher("Babar", 456, school1.name);
let t2 = new Teacher("Syed", 1289, school2.name);
let t3 = new Teacher("Raza", 8765, school3.name);
//Student
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
//teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
console.log(school1);
console.log(school2);
console.log(school3);
export {};
