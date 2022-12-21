const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const fs = require('fs')



function sortTeam(team){
    teamArray = [];
    team.forEach(element =>{
        if(element.getRole() === 'Manager'){

            const manager = managerCard(element);
            teamArray.push(manager);
            
        }else if(element.getRole() === 'Engineer'){

            const engineer = engineerCard(element);
            teamArray.push(engineer);

        }else if(element.getRole() === 'Intern'){

            const intern = internCard(element);
            teamArray.push(intern);

        }
    })


function managerCard(Manager){
    return `
    <div class="col-2">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${Manager.name}</h5>
            <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${Manager.id}</li>
            <li class="list-group-item">Email:${Manager.email}</li>
            <li class="list-group-item">Office:${Manager.officeNumber}</li>
        </ul>
    </div>
</div>
`
}

function engineerCard(Engineer){
    return  `
    <div class="col-2">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${Engineer.name}</h5>
            <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${Engineer.id}</li>
            <li class="list-group-item">Email:${Engineer.email}</li>
            <li class="list-group-item">Github:${Engineer.getGithub()}</li>
        </ul>
    </div>
</div>
`
}

function internCard(Intern){
    return`
    <div class="col-2">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${Intern.name}</h5>
            <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${Intern.id}</li>
            <li class="list-group-item">Email:${Intern.email}</li>
            <li class="list-group-item">Office:${Intern.school}</li>
        </ul>
    </div>
</div>
`
}
return teamArray;
}
module.exports = (team) =>{
    return `<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>

<body>
    <header class="p-4 mb-2 bg-danger text-white text-center">
        <h1>Team Dashboard</h1>

    </header>
    <main>
        <div class="row justify-content-evenly">

            ${sortTeam(team).toString()}

        </div>

    </main>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"></script>
</body>

</html>`
}
