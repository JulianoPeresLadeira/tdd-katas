const Greeter = require('../src/greeter');

const getTimeAtHour = (hour, minutes = 0, seconds = 0) => {
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

beforeAll(
    () => {
        const time = getTimeAtHour(0);
        jest.spyOn(Date, 'now').mockImplementation(() => time);
        console.log = jest.fn();
    }
)

test('No input',
    () => {
        const result = 'Good night <>'
        expect(Greeter.greet('')).toBe(result);
        expect(console.log).toHaveBeenCalledWith(result);
    }
)

test('Tests trimming of input',
    () => {
        const result = 'Good night <Test>';
        expect(Greeter.greet('  test  ')).toBe(result);
        expect(console.log).toHaveBeenCalledWith(result);
    }
)

test('Capitalization of first letter',
    () => {
        const result = 'Good night <Test>'
        expect(Greeter.greet('test')).toBe(result);
        expect(console.log).toHaveBeenCalledWith(result);
    }
)


describe('Validating Morning greetings',
    () => {

        const hours = [6,7,8,9,10,11];

        hours.forEach(
            hour => {
                test(`Good morning at ${hour}`,
                     () => {
                        const time = getTimeAtHour(hour);
                        jest.spyOn(Date, 'now').mockImplementation(() => time);
                        const result = 'Good morning <Test>';
                        expect(Greeter.greet('test')).toBe(result);
                        expect(console.log).toHaveBeenCalledWith(result);
                    }
                )
            }
        )                
    }
)

describe('Validating default greeting',
    () => {
        const hours = [12,13,14,15,16,17];

        hours.forEach(
            hour => {
                test(`Hello at ${hour}`,
                     () => {
                        const time = getTimeAtHour(hour)
                        jest.spyOn(Date, 'now').mockImplementation(() => time);
                        const result = 'Hello <Test>';
                        expect(Greeter.greet('test')).toBe(result);
                        expect(console.log).toHaveBeenCalledWith(result);
                    }
                )
            }
        )                

    }
)

describe('Validating Evening greetings',
    () => {

        const hours = [18,19,20,21];

        hours.forEach(
            hour => {
                test(`Good evening at ${hour}`,
                    () => {
                        const time = getTimeAtHour(hour)
                        jest.spyOn(Date, 'now').mockImplementation(() => time);
                        const result = 'Good evening <Test>'
                        expect(Greeter.greet('test')).toBe(result);
                        expect(console.log).toHaveBeenCalledWith(result);
                    }
                )
            }
        )                
    }
)

describe('Validating Night greetings',
    () => {
        const hours = [22,23,0,1,2,3,4,5];

        hours.forEach(
            hour => {
                test(`Good night at ${hour}`,
                    () => {
                        const time = getTimeAtHour(hour)
                        jest.spyOn(Date, 'now').mockImplementation(() => time);
                        const result = 'Good night <Test>'
                        expect(Greeter.greet('test')).toBe(result);
                        expect(console.log).toHaveBeenCalledWith(result);
                    }
                )
            }
        )                

    }
)
