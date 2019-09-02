const StringCalculator = require('../src/string-calculator');

it('should be 0',
    () => {
        expect(StringCalculator.add('')).toBe(0)
    }
)