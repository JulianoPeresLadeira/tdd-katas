class StringCalculator {

    static add(input) {

        const getOperands = () => input.split(',').map(i => parseInt(i))

        if (input == '') {
            return 0;
        }

        return getOperands().reduce((acc, curr) => acc + curr, 0);
    }
}

module.exports = StringCalculator;