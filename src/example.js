const unusedVariable = "this will cause an error"

function testFunction() {
  const message = "Hello World"
  console.log(message)
  const anotherUnused = "double quotes violation"
  return "test"
}

testFunction()