// This will use engineer builder
const Engineer = require('../lib/engineer');

// This will craete new object for engineer 
test('creates a new Engineer', () => {
    const employee = new Engineer('Bryce Trevor', 901, 'bryce.trevor@gmail.com', 'Brycetrevor01');
    
    expect(employee.name).toBe("Bryce Trevor");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

test('All methids are tested Engineer class', () => {
    const employee = new Engineer('Jose Zuniga', 271, 'josecarlos237@gmail.com', 'josezuniga01' );
  
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');
  })
