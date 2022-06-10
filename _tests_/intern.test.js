// This will use intern builder 
const Intern = require('../lib/intern');

// this will create a new object for an intern 
test('creates a new Intern', () => {
    const employee = new Intern('Jacob', 18, 'jacobswole@gmail.com', 'Jswole');
    
    expect(employee.name).toBe("Jacob Swole");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('All methids are tested for intern class', () => {
    const employee = new Intern('Jacob Swole', 18, 'jacobswole@gmail.com', 'Jswole');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})