const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Should return office number when compared', () => {
        const obj = 101;
    
        const person = new Manager("Alex",2, "alexander.loburev@gmail.com",101);
        expect(obj).toEqual(person.officeNumber);
      });
    it("overrides the role from employee to manager",()=>{
      const obj = "Manager";
      const manager = new Manager("Alex",2, "alexander.loburev@gmail.com",101);
      expect(obj).toEqual(manager.getRole());
    });
    it("should throw an error if not provided any values", ()=>{
      const cb = () =>new Manager("Alex",2, "alexander.loburev@gmail.com");
      const err = new Error("The Manager has to have office number as parameters");
      expect(cb).toThrowError(err);
    });
});