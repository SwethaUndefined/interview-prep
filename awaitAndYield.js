// await pausing execution until the Promise resolves

// yield pausing and resuming the generator function's execution.

function* generatorExample() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let gen = generatorExample();
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3