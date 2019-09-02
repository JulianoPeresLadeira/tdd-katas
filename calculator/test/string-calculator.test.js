const StringCalculator = require('../src/string-calculator');

it('should be 0',
    () => {
        expect(StringCalculator.add('')).toBe(0)
    }
)

describe('validates single input result',
    () => {
        const values = [1,2,3,4,5,6,7,8,9];
        values.forEach(
            testVal => {
                it(`should equal ${testVal}`,
                    () => {
                        expect(StringCalculator.add(testVal.toString())).toBe(testVal);
                    }
                )
            }
        );
    }
)