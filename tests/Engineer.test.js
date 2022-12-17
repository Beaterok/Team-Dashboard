const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    it('Should return github username', () => {
        const obj = "Beaterok";
        const person = new Engineer("Alex",2, "alexander.loburev@gmail.com","Beaterok");
        expect(obj).toEqual(person.getGithub());
      });
      it("overrides the role from employee to Engineer",()=>{
        const obj = "Engineer";
        const person = new Engineer("Alex",2, "alexander.loburev@gmail.com","Engineer");
        expect(obj).toEqual(person.getRole());
      });
      it("should throw an error if not provided any values", ()=>{
        const cb = () =>new Engineer("Alex",2, "alexander.loburev@gmail.com");
        const err = new Error("The you must pass the github name parameter");
        expect(cb).toThrowError(err);
      });
 });