function echoType(input) {

    let inputType = typeof(input);
    console.log(inputType);
    
    if (inputType === 'string' || inputType === 'number') {
        console.log(input);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

//echoType('Hello, JavaScript!');
//echoType(18);
//echoType(null);
