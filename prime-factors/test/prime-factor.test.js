const PrimeFactor = require('../src/prime-factor');

const tests = {
    1: [],
    2: [2],
    3: [3],
    4: [2,2],
    5: [5],
    6: [2,3],
    7: [7],
    8: [2,2,2],
    9: [3,3],
    10: [2,5],
    11: [11],
    12: [2,2,3],
    4620: [2,2,3,5,7,11]
};

it(`should say it expects integer`,
    () => {
        expect(
            () => {
                PrimeFactor.calculate('test')
            }
        ).toThrow(`expected an integer, got a string, test`)
    }
)

it(`should say it expects integer greater than 0`,
    () => {
        expect(
            () => {
                PrimeFactor.calculate(0)
            }
        ).toThrow(`lowest accepted value is 1, got 0`)
    }
)

it(`should say it expects integer greater than 0`,
    () => {
        expect(
            () => {
                PrimeFactor.calculate(-1)
            }
        ).toThrow(`lowest accepted value is 1, got -1`)
    }
)


Object.keys(tests).forEach(
    input => {
        let val = parseInt(input);
        it (`should be [${tests[val]}]`,
            () => {
                expect(PrimeFactor.calculate(val)).toEqual(tests[val])
            }
        )
    }
);
