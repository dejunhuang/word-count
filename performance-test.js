const path = require('path');

const aTestFiles = [
  '1.imperative.js',
  '2.imperative-w-functions.js',
  '3.oo-one-class.js',
  '4.oo-small-classes.js',
  '5.fp-softcore.js',
  '6.fp-pure-functions.js',
  '7.fp-pure-but-slow.js',
  '8.fp-pure-w-mori.js',
  '9.fp-currying.js',
  '10.fp-composition-and-pointfree.js',
  '11.fp-final.js'
];

function runFile(sFileName) {
  const startTime = new Date().getTime();
  const file = require(path.join(__dirname,sFileName));
  const endTime = new Date().getTime();
  const loadingTime = endTime - startTime;
  return loadingTime;
}

function runPerformanceTest(aTestFiles) {
  const aPerformanceResult = aTestFiles.map(sTestFile => {
    return {
      'testFile': sTestFile,
      'performance': runFile(sTestFile)
    }
  })
  return aPerformanceResult;
}

function printPerformaceResult(aPerformanceResult) {
  aPerformanceResult.forEach(oPerformanceResult => {
    const aToPrint = [ 'Performance:', oPerformanceResult.performance, '(ms)', 'TestFile:', oPerformanceResult.testFile ];
    console.log(aToPrint.join(' '));
  });
}

function main() {
  printPerformaceResult(runPerformanceTest(aTestFiles));
}

main();
