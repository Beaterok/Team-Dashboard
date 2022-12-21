const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML')
const fs = require('fs')

const team = [];

const init =() =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Managers Name:'
        },
        {
            type: 'number',
            name:  'id',
            message: 'Managers ID:'
        },
        {
            type:'input',
            name: 'email',
            message:'Managers Email:'
        },
        {
            type:'number',
            name: 'officeNumber',
            message:'Managers Office Number:'
        }
    ])
    .then((data) =>{
        const manager = new Manager(data.name,data.id,data.email,data.officeNumber);
        team.push(manager);

        menu();
    })
};

function menu(){
    inquirer.prompt([
        {
            type:'list',
            name: 'add',
            message:'Managers Office Number:',
            choices:['Engineer','Intern','None']
        }
    ])
    .then((data) =>{
        if(data.add == 'Engineer'){
            return addEngineer();
        } else if (data.add =='Intern'){
            return addIntern();
        }else 
        return writeFile();
    })
};

function addEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineers Name:'
        },
        {
            type: 'number',
            name:  'id',
            message: 'Engineers ID:'
        },
        {
            type:'input',
            name: 'email',
            message:'Engineers Email:'
        },
        {
            type:'number',
            name: 'git',
            message:'Engineers GitHub:'
        }
    ])
    .then((data) =>{
        const engineer = new Engineer(data.name,data.id,data.email,data.git);
        team.push(engineer);

        menu();
    })
}

function addIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern Name:'
        },
        {
            type: 'number',
            name:  'id',
            message: 'Intern ID:'
        },
        {
            type:'input',
            name: 'email',
            message:'Intern Email:'
        },
        {
            type:'number',
            name: 'school',
            message:'Intern School:'
        }
    ])
    .then((data) =>{
        const intern = new Intern(data.name,data.id,data.email,data.school);
        team.push(intern);

        menu();
    })
}

function writeFile(){
    fs.writeFileSync('./dist/index.html', generateHTML(team));
}

init();