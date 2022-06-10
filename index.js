// require page creation + node modules 
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateHTML = require('./src/HTMLtemplate');

// profiles for team members
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

const profileArray = []; 

// manager questions 
const attachManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Manager?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("What is The Managers name?");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the the manager's ID?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("What is the manager's ID?")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('What is the managers email?')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('What is their office number?')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInfo => {
        const  { name, id, email, officeNumber } = managerInfo; 
        const manager = new Manager (name, id, email, officeNumber);

        profileArray.push(manager); 
        console.log(manager); 
    })
};

const attachEmployee = () => {
    
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose an employee you would like to add",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the emplaoyee's name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("enter an employee's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What's the the employee's ID?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("enter the employee's ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('enter an email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github username?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("enter the employee's github username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the Intern attend?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("enter the intern's school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAttachEmployee',
            message: 'Are there more team members you would like to add?',
            default: false
        }
    ])
    //store all data for employee types
    .then(employeeInformation => {

        let { name, id, email, role, github, school, confirmAttachEmployee } = employeeInformation; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        profileArray.push(employee); 

        if (confirmAttachEmployee) {
            return attachEmployee(profileArray); 
        } else {
            return profileArray;
        }
    })

};


// write all new profile to HTML file 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("We have generated your team profile! Please visit the index.html :)")
        }
    })
}; 

attachManager()
  .then(attachEmployee)
  .then(profileArray => {
    return generateHTML(profileArray);
  })
  .then(indexHTML => {
    return writeFile(indexHTML);
  })
  .catch(err => {
 console.log(err);
  });