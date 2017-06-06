function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    var i = "cat"
    return function animal() {
        return i
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("something")
    }
}