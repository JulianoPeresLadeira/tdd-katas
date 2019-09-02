class StringCalculator {

    static add(input) {

        const getOperands = () => {

            const possibleDelimitators = [',', '\n'];
            const defaultDelimitator = possibleDelimitators[0];

            const redelimitedInput = possibleDelimitators.reduce(
                (iteratedInput, delim) => {
                    return iteratedInput.split(delim).join(defaultDelimitator);
                }, input
            );

            return redelimitedInput.split(defaultDelimitator).map(i => parseInt(i))
        }
        const validateOperands = (operands) => {
            const negativeOperands = operands.filter(op => op < 0);

            if (negativeOperands.length > 0) {
                throw `negatives not allowed: ${negativeOperands}`
            }
        }

        if (input == '') {
            return 0;
        }

        const operands = getOperands();
        validateOperands(operands);

        return operands.reduce((acc, curr) => acc + curr, 0);
    }
}

module.exports = StringCalculator;