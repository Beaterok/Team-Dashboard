const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    it("Intern should receive a school as a parameter", () => {
        const school = "UNC bootcamp";
        const person = new Intern("Alex",2, "alexander.loburev@gmail.com","UNC bootcamp");
        expect(school).toEqual(person.getSchool());
    });
    it("overrides the role from employee to Intern", () => {
        const obj = "Intern";
        const person = new Intern("Alex",2, "alexander.loburev@gmail.com","Intern");
        expect(obj).toEqual(person.getRole());
    });
    it("should throw an error if not provided any values", () => {
        const cb = () => new Intern("Alex",2, "alexander.loburev@gmail.com");
        const err = new Error("The you must pass the school name parameter");
        expect(cb).toThrowError(err);
    });
});