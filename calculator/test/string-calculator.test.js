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

describe('validates simple add operations', 
    () => {

        const operand1 = [1,2,3,4];
        const operand2 = [1,2,3,4];

        operand1.forEach(
            op1 => {
                operand2.forEach(
                    op2 => {
                        it(`${op1} + ${op2} == ${op1 + op2}`,
                            () => {
                                expect(StringCalculator.add(`${op1},${op2}`)).toBe(op1 + op2)
                            }
                        )
                    }
                )
            }
        );

    }
)