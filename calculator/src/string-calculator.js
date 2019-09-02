class StringCalculator {

    static add(input) {

        const getOperands = () => {

            const possibleDelimitators = [',', '\n'];

            const delimitator = possibleDelimitators.find(
                delim => {
                    return input.indexOf(delim) > 0;
                }
            );

            return input.split(delimitator).map(i => parseInt(i))
        }

        if (input == '') {
            return 0;
        }

        return getOperands().reduce((acc, curr) => acc + curr, 0);
    }
}

module.exports = StringCalculator;