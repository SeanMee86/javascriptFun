const singleton = (() => {
    let instance;
    createInstance = () => {
        return {
            greeting: 'hello',
            sayHello: () => {
                console.log(this.greeting);
            }
        };
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
    const inst1 = singleton.getInstance();
    const inst2 = singleton.getInstance();

    alert(`Same instance? ${inst1 === inst2 ? 'yes' : 'no'}`)
};
run();