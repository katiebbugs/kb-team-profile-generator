const Intern = require('../lib/Intern');

const intern = new Intern('Boba', 'Fett', 30, 'KSU');

test('creates an intern object', () => {
    expect(intern.firstName).toBe('Boba');
    expect(intern.lastName).toBe('Fett');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('KSU');
    expect(intern.icon).toBe('fas fa-graduation-cap');
});

test('get intern icon', () => {
    expect(intern.getIcon()).toEqual(expect.stringContaining(intern.icon));
});

test('get intern role', () => {
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role));
});

test('get intern name', () => {
    expect(intern.getName()).toEqual(expect.stringContaining(`${intern.firstName} ${intern.lastName}`));
});

test('get intern employee ID', () => {
    expect(intern.getId()).toEqual(expect.stringContaining(`${intern.id}`));
});

test('get intern email', () => {
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('get intern school', () => {
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});