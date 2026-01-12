class TestRunner {
  testName = "LoginTest";

  run() {
    console.log(`Running ${this.testName}`);
  }
}
const test = new TestRunner();
test.run();

const runner = new TestRunner();
setTimeout(runner.run, 1000);
// Output after 1 second:
// Running undefined
// The output is "Running undefined" because when the run method is called by setTimeout, 
// the context (this) is lost. In this case, 'this' does not refer to the instance of TestRunner, 
// so this.testName is undefined.

// ✅ Fix:
setTimeout(() => runner.run(), 1000);
// Output after 1 second:
// Running LoginTest
// By using an arrow function, we preserve the context of 'this', so it correctly refers to the 
// instance of TestRunner.