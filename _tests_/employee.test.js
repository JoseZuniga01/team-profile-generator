// This will use Employee builder
const Employee = require('../lib/employee');

// This will create new object of employee
test('creates a new Employee', () => {
    const employee = new Employee('Jose Zuniga', 27, 'josecarlos237@gmail.com');

    expect(employee.name).toBe("Jose Zuniga");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('All methods are Tested for Employee class', () => {
    const employee = new Employee('Jose Zuniga', 27, 'josecarlos237@gmail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})