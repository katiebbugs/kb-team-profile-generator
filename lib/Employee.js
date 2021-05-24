class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = `${firstName}.${lastName}@companyname.com`;
        this.role = 'Employee';
        this.icon = 'fas fa-user'
    };

    getName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getId() {
        return `<span class="has-text-weight-bold">ID:</span> ${this.id}`;
    };

    getEmail() {
        return `<span class="has-text-weight-bold">Email:</span> <a href="mailto:${
            this.email}" class="has-text-info">${this.email}</a>`;
    };

    getRole() {  
        return this.role;
    };
    
    getIcon() {
        return `<i class="${this.icon} fa-3x"></i>`
    };
};

module.exports = Employee;