import { AppiumDriver } from "@bam.tech/appium-helper";
import { TestCase, measurePerformance } from "@perf-profiler/e2e";
import * as child from "child_process";
const bundleId = "dk.smukfesthesis2";
const appActivity = "dk.smukfesthesis2.MainActivity";

const runTest = async () => {
  const driver = await AppiumDriver.create({
    appPackage: bundleId,
    appActivity, 
  });

  const testCase: TestCase = {
    beforeTest: async () => {
      //driver.stopApp();
      // await driver.clickElementByText("Scroll to Top");
      
    child.execSync(`adb shell input tap 99 174`);
    await driver.wait(1000);
    child.execSync(`adb shell input tap 243 394`);
       await driver.wait(3000);
    },
    run: async () => {
      // run is where measuring will happen, insert e2e logic here
      //driver.startApp();
      // You should probably add a finder to wait for the app to start
      // await driver.clickElementByText("Lists");

// adb shell input swipe 500 2000 0 50 50;
// adb shell sleep 1;
// adb shell input swipe 500 2000 0 50 50;
// adb shell sleep 2;
// adb shell input tap  489.3 2097;
// adb shell sleep 2;
// adb shell input tap 489.3  298;



child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 500`);
  await driver.wait(1000);
child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 500`);
  await driver.wait(1000);
child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 100`);
  await driver.wait(1500);
child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 50`);
  await driver.wait(2200);
child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 100`);
  await driver.wait(1500);
child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 50`);
  await driver.wait(2200);
child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 100`);
  await driver.wait(2000);
//  await driver.scrollToEnd();




        // await driver.scrollToEnd(100);
     //  await driver.wait(1000);
       

     
    },
    // Duration is optional, but helps in getting consistent measures.
    // Measures will be taken for this duration, regardless of test duration
    duration: 30000,
  };
// first param = number of iterations
// second param = number or retries in case of errors
  const { writeResults } = await measurePerformance(bundleId, testCase,5,2);
  writeResults();
};

runTest(); 
   