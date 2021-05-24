const Employee = require('./Employee');

class Manager extends Employee {
    constructor(firstName, lastName, id, office) {
        super(firstName, lastName, id);
        
        this.office = office;
        this.role = 'Manager';
        this.icon = 'fas fa-mug-hot';
    };

    getOffice() {
        return `<span>Office Number:</span> ${this.office}`;
    };
};

module.exports = Manager;
