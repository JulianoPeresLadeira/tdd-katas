class StringCalculator {

    static get customDelimitatorSignal () {
        return  '//';
    }
    static get defaultDelimitators () {
        return [',', '\n'];
    } 

    static add(input) {

        const getOperands = () => {

            const treatCustomDelimitators = () => {
                const splitInput = input.split('\n');
                const customDelimitator = splitInput[0].split(StringCalculator.customDelimitatorSignal)[1];
                splitInput.shift();
                input = splitInput.join('\n').split(customDelimitator).join(defaultDelimitator);
            }
            const hasDefaultDelimitator = () => input.startsWith(StringCalculator.customDelimitatorSignal);

            const defaultDelimitator = StringCalculator.defaultDelimitators[0];

            if (hasDefaultDelimitator()) {
                treatCustomDelimitators();
            }

            const redelimitedInput = StringCalculator.defaultDelimitators.reduce(
                (iteratedInput, delim) => {
                    return iteratedInput.split(delim).join(defaultDelimitator);
                }, input
            );

            return redelimitedInput
                .split(defaultDelimitator)
                .map(i => parseInt(i))
                .filter(op => op <= 1000)
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