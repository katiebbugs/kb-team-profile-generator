const Manager = require ('../lib/Manager');

const manager = new Manager('Boba', 'Fett', 70, 10);

test('creates a manager object', () => {
    expect(manager.firstName).toBe('Boba');
    expect(manager.lastName).toBe('Fett');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.role).toBe('Manager');
    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.icon).toBe('fas fa-mug-hot');
});

test('get manager icon', () => {
    expect(manager.getIcon()).toEqual(expect.stringContaining(manager.icon));
});

test('get manager role', () => {
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role));
});

test('get manager name', () => {
    expect(manager.getName()).toEqual(expect.stringContaining(`${manager.firstName} ${manager.lastName}`));
});

test('get manager ID', () => {
    expect(manager.getId()).toEqual(expect.stringContaining(`${manager.id}`));
});

test('get manager email', () => {
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('get manager office number', () => {
    expect(manager.getOffice()).toEqual(expect.stringContaining(`${manager.office}`));
});