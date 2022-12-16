const {prompt} = require("inquirer")
const {menuQuest} = require("./questions")
const db = require("./connection/connection");

function promptMenu() {
    prompt(menuQuest).then(({
        initial
    }) => {
        console.log(initial);
        switch (initial) {
            case "view all departments":
                viewAlldepartments()
                break;

            case "view all roles":
                viewAllroles()
                break;

            case "view all employees":
                viewAllemployees()
                break;

                default:
                console.log("Something went wrong!");
                promptMenu()
                break;
        }
    })
}



function viewAlldepartments() {
    db.promise().query("SELECT name FROM department").then(([response]) => {
        console.table(response)
        promptMenu()
    })
}

function viewAllroles() {
    db.promise().query("Select role.id, role.title, role.salary, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id").then(([response]) => {
        console.table(response)
        promptMenu()
    })
}

function viewAllemployees() {
    db.promise().query("Select employee.first_name, employee.last_name, role.title, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN  role on employee.role_id = role.id LEFT JOIN employee manager on manager.id = employee.manager_id").then(([response]) => {
        console.table(response)
        promptMenu()
    })
}


promptMenu()