class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = `${firstName}.${lastName}@companyname.com`;
        this.role = 'Employee';
        this.icon = 'fas fa-user'
    };

    getIcon() {
        return `<i class="${this.icon} fa-3x"></i>`
    };

    getRole() {  
        return this.role;
    };

    getName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getId() {
        return `<span>Employee ID:</span> ${this.id}`;
    };

    getEmail() {
        return `<a href="mailto:${
            this.email}" class="card-link">${this.email}</a>`;
    };
};

module.exports = Employee;
