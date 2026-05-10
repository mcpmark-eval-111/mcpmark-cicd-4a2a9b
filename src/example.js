const unusedVariable = "this will cause an error"
const anotherUnused = 'test'

function testFunction() {
  console.log("This uses double quotes and no semicolon")
  const x = 5
  return x
}

testFunction()
