const { dayOfTheWeek } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('2/11/2023') );
    expect( day ).toBe('Thursday');
});