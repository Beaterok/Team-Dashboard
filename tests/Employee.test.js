const Employee = require('../lib/Employee');
 
describe('Employee', () => {

  it('Should create and employee object that takes in name, id, and email. and should equal to itself when compared', () => {
    const obj = {
    name:"Alex",
    id: 2,
    email:"alexander.loburev@gmail.com",
    role:"Employee"
    };

    const person = new Employee("Alex",2, "alexander.loburev@gmail.com");
    expect(obj).toEqual(person);
  });

  it("should return employee name",()=>{
    const name = "Alex";
    const person = new Employee("Alex",2, "alexander.loburev@gmail.com");
    expect(name).toEqual(person.getName());
  });

  it("should return employee id",()=>{
    const id = 2;
    const person = new Employee("Alex",2, "alexander.loburev@gmail.com");
    expect(id).toEqual(person.getId());
  });

  it("should return email of the employee",()=>{
    const email = "alexander.loburev@gmail.com";
    const person = new Employee("Alex",2, "alexander.loburev@gmail.com");
    expect(email).toEqual(person.getEmail());
  });

  it("should return employees role",()=>{
    const role ="Employee";
    const person = new Employee("Alex",2, "alexander.loburev@gmail.com");
    expect(role).toEqual(person.getRole());
  });

  it("should throw an error if not provided any values", ()=>{
    const cb = () =>new Employee();
    const err = new Error("The employee has to have name, id, and email as parameters")
    expect(cb).toThrowError(err);
  });
});
