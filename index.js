const {prompt} = require("inquirer")
const {menuQuest} = require("./questions")
const db = require("./conncection/connection")

function promptMenu(){
prompt(menuQuest).then(({initial}) => {
    console.log(initial);
    switch (initial) {
        case "view all departments":
            viewAlldepartments()
            break;
    
        default:
            console.log("Something went wrong!");
            promptMenu()
            break;
    }
}) }

function viewAlldepartments(){
db.promise().query("SELECT name FROM department").then(([response]) => {
    console.table(response)
      promptMenu()
})
  
}

promptMenu()