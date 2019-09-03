class PrimeFactor {

    static validateInput(input) {
        if (!Number.isInteger(input)) {
            throw new Error(`expected an integer, got a ${typeof input}, ${input}`);
        }

        if (input < 1) {
            throw new Error(`lowest accepted value is 1, got ${input}`);
        }
    }

    static calculate(integer) {

        PrimeFactor.validateInput(integer);
        
        if (integer == 1) {
            return [];
        }

        for (var index = 2; index < integer; index++) {

            if (integer % index == 0) {
                return [index].concat(PrimeFactor.calculate(integer / index));
            }

        }

        return [integer];
    }
}

module.exports = PrimeFactor;
