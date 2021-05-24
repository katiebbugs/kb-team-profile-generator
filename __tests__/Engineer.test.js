const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Boba', 'Fett', 20, 'bountycoder');

test('creates an engineer object', () => {
    expect(engineer.firstName).toBe('Boba');
    expect(engineer.lastName).toBe('Fett');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.role).toBe('Engineer');
    expect(engineer.icon).toBe('fas fa-laptop-code');
});

test('get engineer icon', () => {
    expect(engineer.getIcon()).toEqual(expect.stringContaining(engineer.icon));
});

test('get engineer role', () => {
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role));
});

test('get engineer name', () => {
    expect(engineer.getName()).toEqual(expect.stringContaining(`${engineer.firstName} ${engineer.lastName}`));
});

test('get engineer employee ID', () => {
    expect(engineer.getId()).toEqual(expect.stringContaining(`${engineer.id}`));
});

test('get engineer email', () => {
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('get engineer github', () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});