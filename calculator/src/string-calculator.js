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

        if (input == '') {
            return 0;
        }

        return getOperands().reduce((acc, curr) => acc + curr, 0);
    }
}

module.exports = StringCalculator;