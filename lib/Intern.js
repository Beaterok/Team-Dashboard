const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name,id,email,school){
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("The you must pass the school name parameter");
          }
        super(name,id,email);

        this.school=school;
        this.role = "Intern";
    }
    getRole(){
        return this.role;
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;