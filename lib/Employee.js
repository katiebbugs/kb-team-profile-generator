// pages
const Employee = require ('../lib/Employee');

const employee = new Employee('Boba', 'Fett', 60);

test('creates a employee object', () => {
    expect(employee.firstName).toBe('Boba');
    expect(employee.lastName).toBe('Fett');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.role).toBe('Employee');
    expect(employee.icon).toBe('fas fa-user');
});

test('get employee icon', () => {
    expect(employee.getIcon()).toEqual(expect.stringContaining(employee.icon));
});

test('get employee role', () => {
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role));
});

test('get employee name', () => {
    expect(employee.getName()).toEqual(expect.stringContaining(`${employee.firstName} ${employee.lastName}`));
});

test('get employee ID', () => {
    expect(employee.getId()).toEqual(expect.stringContaining(`${employee.id}`));
});

test('get employee email', () => {
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});
