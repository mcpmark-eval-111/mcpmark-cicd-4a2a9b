const unusedVariable = "this will cause an error"

function badExample() {
    console.log("Double quotes instead of single")
    const x = 5
    return x
}

badExample()