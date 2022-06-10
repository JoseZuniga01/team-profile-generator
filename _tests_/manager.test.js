// This will use our manager builder 
const Manager = require('../lib/manager');

// this will create a new object for our manager 
test('create a new Manager', () => {
    const employee = new Manager('Vanessa Love', 37, 'vanessa.love@gmail.com', 3895944);
    
    expect(employee.name).toBe("Vanessa Love");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
})

test('All methids are tested for manager class', () => {
    const employee = new Manager('Vanessa Love', 37, 'vanessa.love@gmail.com', 3895944);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');
})