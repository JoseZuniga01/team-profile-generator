const Employee = require("./employee");

const engineerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "engineer's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "engineer's github user name?"
    }

]
//engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
	getGithub() {
		return this.github;
	}
	getRole() {
		return 'Engineer';
	}


}

module.exports = { Engineer, engineerQuestions };
  