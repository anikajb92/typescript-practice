
function doSomething() {
  for (let i=0; i < 5; i++){
    console.log(i)
  }

  console.log("Finally" + i); // outside of scope, error in compiler
}

doSomething();