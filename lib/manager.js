const Employee = require("./employee");

const managerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "manager's name?"
    },
    {
        type: 'input',
        name: 'email',
        message: "manager's email?"
    },
    {
        type: 'input',
        name: 'id',
        message: "manager's Id?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "manager's office number?"
    }

]

//manager constructor extends employee constructor 
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

	getOfficeNumber() {
		return this.officeNumber;
	}

}

module.exports = { Manager, managerQuestions } ;
