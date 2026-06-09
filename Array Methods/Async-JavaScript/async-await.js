// Async Function Example

async function getMessage() {
    return "Hello";
}

getMessage().then(console.log);


// Try Catch Example

async function testError() {

    try {

        throw new Error("Something went wrong");

    }

    catch(error) {

        console.log(error.message);

    }

}

testError();
