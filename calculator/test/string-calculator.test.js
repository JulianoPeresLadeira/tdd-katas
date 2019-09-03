const StringCalculator = require('../src/string-calculator');

it('should be 0',
    () => {
        expect(StringCalculator.add('')).toBe(0)
    }
)

it('should ignore values greater than 1000',
    () => {
        expect(StringCalculator.add('1001, 1000, 1,1002')).toBe(1001)
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

describe('validates simple comma separated add operations', 
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

describe('validates newline separated add operations', 
    () => {
        const operand1 = [1,2,3,4];
        const operand2 = [1,2,3,4];

        operand1.forEach(
            op1 => {
                operand2.forEach(
                    op2 => {
                        it(`${op1} + ${op2} == ${op1 + op2}`,
                            () => {
                                expect(StringCalculator.add(`${op1}\n${op2}`)).toBe(op1 + op2)
                            }
                        )
                    }
                )
            }
        );

    }
)

describe('validates multiple delimited operations',
    () => {
        const operand1 = [1,2];
        const operand2 = [3,4];
        const operand3 = [5,6];

        operand1.forEach(
            op1 => {
                operand2.forEach(
                    op2 => {
                        operand3.forEach(
                            op3 => {
                                it(`${op1} + ${op2} + ${op3} == ${op1 + op2 + op3}`,
                                    () => {
                                        expect(StringCalculator.add(`${op1}\n${op2},${op3}`)).toBe(op1 + op2 + op3);
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
)

describe('validates treatment of negative operands',
    () => {
        test('if throws error on negative operand',
            () => {
                expect(() => StringCalculator.add('1,-1')).toThrow('negatives not allowed: -1')
            }
        )

        test('if throws error on multiple negative operands',
            () => {
                expect(() => StringCalculator.add('1,-1\n2,-2')).toThrow('negatives not allowed: -1,-2')
            }
        )
    }
)

describe('validates multiple line delimitators',
    () => {
        const customDelimitators = ['#', '%', '@', '!', '#####', '%%%%%', '@@@@@', '!!!!!'];

        customDelimitators.forEach(
            customDelim => {
                it (`should work with the ${customDelim} custom delimitator`,
                    () => {
                        expect(StringCalculator.add(`//${customDelim}\n1${customDelim}2${customDelim}3${customDelim}4`)).toBe(10)
                    }
                )
            }
        )
    }
)