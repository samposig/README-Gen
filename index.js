
const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./utils/generateMarkdown")

//prompt questions that will be saved for README
const questions = [
    {
        type:"input",
        name:"title",
        message:"What the title of your repo?",
    },
    {
        type:"input",
        name:"description",
        message:"What is the description of the project?",
    },
    {
        type:"input",
        name:"installation",
        message:"What is the installation process?",
    },
    {
        type:"input",
        name:"username",
        message:"What is your Github username?",
    },
    {
        type:"input",
        name:"repo",
        message:"What is the name of your repository?",
    },
    {
        type:"list",
        name:"license",
        message:"What the title of your rep",
        choices: ['ApacheLicense2.0', 'MITLicense', 'ISCLicense', ' CC-BY-4.0', 'CC-BY-SA-4.0 ', 'BoostSoftwareLicense1.0', 'TheUnlicense'],
    
    }, 
    {
        type:"input",
        name:"usage",
        message:"What is the usage of this app?",
    },
    {
        type:"input",
        name:"contribution",
        message:"How do other developers contribute to this project?",
    },

    {
        type:"input",
        name:"test",
        message:"Provide any test of application",
    },
    {
        type:"input",
        name:"email",
        message:"What is email?",
    }
];
//starts prompts for questions in array
function prompt(){
    return inquirer.prompt(questions)
}
//creates a readme.md file
function writeToFile(data) {
    fs.writeFile("README1.md", data, err => {
        console.log(err)
    })
}
//takes data logged by user and inserts into readme doc
function init() {
    prompt()
        .then(data => {
            return generateREADME(data)
        })
        .then(page => {
            return writeToFile(page)
        }) 
}

// Function call to initialize app
init();
