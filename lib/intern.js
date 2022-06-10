const Employee = require("./employee");

const internQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "intern's name?"
    },
    {
        type: 'input',
        name: 'email',
        message: "intern's email?"
    },
    {
        type: 'input',
        name: 'id',
        message: "intern's Id?"
    },
    {
        type: 'input',
        name: 'school',
        message: "intern's school?"
    }

]

//intern constructor extends employee constructor 
class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}

}

module.exports = { Intern, internQuestions };