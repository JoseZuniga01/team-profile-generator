// This will use engineer builder
const Engineer = require('../lib/engineer');

// This will craete new object for engineer 
test('creates a new Engineer', () => {
    const employee = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');
    
    expect(employee.name).toBe("Jose Zuniga");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

test('All methids are tested Engineer class', () => {
    const employee = new Engineer('John Smith', 35, 'johnsmith@gmail.com', 'johnsmith35');
  
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');
  })
