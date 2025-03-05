function receivesAFunction(cb,spy){
    return cb (spy)
}

receivesAFunction(function (spy) {return spy }) 

function returnsANamedFunction (){ function fn() {
    console.log ()
}
    return fn
}  

function returnsAnAnonymousFunction(){ return function() {
    console.log("hello");
}
}

