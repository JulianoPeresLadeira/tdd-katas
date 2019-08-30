class Greeter {
    static greet(name) {
        const getGreeting = () => {
            const currentDate = new Date(Date.now());
            const currentHour = currentDate.getHours();

            if (currentHour < 6) {
                return 'Good night';
            }

            if (currentHour < 12) {
                return 'Good morning';
            }

            if (currentHour < 18) {
                return 'Hello';
            }

            if (currentHour < 22) {
                return 'Good evening';
            }
            
            return 'Good night';
        }

        name = name.trim();
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
        const greeting = getGreeting();

        const returnValue = `${greeting} <${nameCapitalized}>`;
        console.log(returnValue)
        return returnValue
    }
}

module.exports = Greeter