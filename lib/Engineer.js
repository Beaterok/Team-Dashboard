const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,github){
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("The you must pass the github name parameter");
          }
        // const name = this.name;
        // const id = this.id;
        // const email=this.email;
        super(name,id,email);
        this.github=github;
        this.role="Engineer";
    }
    getRole(){
        return this.role;
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer;