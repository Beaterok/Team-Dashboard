const inquirer = require("inquirer");

class Employee {
    
    constructor(name,id,email){
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("The employee has to have name, id, and email as parameters");
          }
          if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("The employee has to have name, id, and email as parameters");
          }
          if (typeof email !== "string" || !email.trim().length) {
            throw new Error("The employee has to have name, id, and email as parameters");
          }
        this.name=name;
        this.id=id;
        this.email=email;
        this.role="Employee";
       
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Employee;