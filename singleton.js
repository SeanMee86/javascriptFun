const singleton = (() => {
    let instance;
    createInstance = () => {
        const person = {
            greeting: 'hello',
            sayHello: () => {
                console.log(this.greeting);
            }
        };
        return person;
    };
    return {
        getInstance: () => {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

run = () => {
    var inst1 = singleton.getInstance();
    var inst2 = singleton.getInstance();

    alert(`Same instance? ${inst1 === inst2 ? 'yes' : 'no'}`)
};
run();