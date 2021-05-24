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
                <div class="column is-one-quarter-desktop">
                    <div class="card">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    ${newEmployee.getIcon()}
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">${newEmployee.getName()}</p>
                                    <p class="subtitle is-6">${newEmployee.getRole()}</p>
                                </div>
                            </div>
                            <div class="content">
                                <p>${newEmployee.getId()}<br/>
                                ${newEmployee.getEmail()}<br/>
                                ${roleInfo}</p>
                            </div>
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" />

            <title>Team Profile</title>
        </head>
        <body>
            <section class="hero is-info is-bold">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title is-1">The Team</h1>
                    </div>
                </div>
            </section>
            <main class="m-6">
                <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                    ${addEmployee(templateData)}
                </div>
            </main>
        </body>
    </html>
    `;
};

module.exports = generatePage;