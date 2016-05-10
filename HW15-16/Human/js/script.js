// JavaScript source code

$(function () {

    //********create classes**********

    function Human() {
        this.Name;
        this.Age;
        this.Weight;
        this.Growth;
        this.Gender;
    }

    function Worker() {
        this.WorkPlace;
        this.Salary;

        this.work = function(salary, workplace) {
            this.Salary = salary;
            this.WorkPlace = workplace;
        }
    }

    Worker.prototype = new Human();

    function Student() {
        this.Scholarship;
        this.StudyPlace;

        this.WatchShows = function(scholarship, studyplace){
            this.Scholarship = scholarship;
            this.StudyPlace = studyplace;
        }
    }

    Student.prototype = new Human();

    //******Create objects****************

    var newWorker = new Worker();
    newWorker.Name = "Ivan";
    newWorker.Age = 32;
    newWorker.Weight = 80;
    newWorker.Growth = 170;
    newWorker.Gender = "Male";
    newWorker.work(45000, "GlobalLogic")
    console.log("Worker: ", newWorker);

    var newStudent = new Student();
    newStudent.Name = "Svetlana";
    newStudent.Age = 19;
    newStudent.Weight = 56;
    newStudent.Growth = 167;
    newStudent.Gender = "Female";
    newStudent.WatchShows(1800, "RogaIKopita");
    console.log("Student: ", newStudent);
});

