const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => {
  if (!arr.find( e => e.result === "W")) {
    return undefined
  } else {
    return arr.find( e => e.result === "W").year
  }
}