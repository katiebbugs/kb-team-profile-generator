// pages
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const addEmployee = employeeInfo => {
    let cards = '';

    employeeInfo.forEach(employee => {    
        
        const { firstName, lastName, id, role } = employee;
        let newEmployee = '';
        let roleInfo = '';

        switch (role) {
            case 'Manager':
                newEmployee = new Manager(firstName, lastName, id, employee.office);
                roleInfo = newEmployee.getOffice();
                break;
            case 'Engineer': 
                newEmployee = new Engineer(firstName, lastName, id, employee.github);
                roleInfo = newEmployee.getGithub();
                break;
            case 'Intern':
                newEmployee = new Intern(firstName, lastName, id, employee.school);
                roleInfo = newEmployee.getSchool();
                break;
            default:
                newEmployee = new Employee(firstName, lastName, id);
        };
        cards += `
                <div class="col-6 col-md-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-title">
                                ${newEmployee.getIcon()}
                                <h5>${newEmployee.getName()}</h5>
                            </div>
                            <p class="card-subtitle mb-2 text-muted">${newEmployee.getRole()}</p>
                            <p class="card-text">${newEmployee.getId()}<br/>
                            ${newEmployee.getEmail()}<br/>
                            ${roleInfo}</p>
                        </div>
                    </div>
                </div>`  
    });
    return cards;
};

const generatePage = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

            <title>Team Profile</title>
        </head>
        <body class="container">
            <header class="row align-items-start bg-info">
                <div class="col primary">
                    <h1 class="text-center">The Team</h1>
                </div>
            </header>
            <main class="row align-items-center">
                <section class="container">
                    <div class="row row-cols-2">
                        ${addEmployee(templateData)}
                    </div>
                </section>
            </main>
        </body>
    </html>
    `;
};

module.exports = generatePage;
