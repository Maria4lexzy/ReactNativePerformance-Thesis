import { AppiumDriver } from "@bam.tech/appium-helper";
import { TestCase, measurePerformance } from "@perf-profiler/e2e";

import {execSync} from 'child_process';
const bundleId = "dk.smukfesthesis2";
const appActivity = "dk.smukfesthesis2.MainActivity";

const runTest = async () => {
  const driver = await AppiumDriver.create({
    appPackage: bundleId,
    appActivity, 
  });

  const testCase: TestCase = {
    beforeTest: async () => {
      await driver.wait(1000);
      driver.startApp();
      await driver.wait(1000);
      await driver.findElementByText("Re-render");
// child.execSync(`adb shell input tap 99 174`);
//     await driver.wait(20);
// child.execSync(`adb shell input tap 270 417`);
//        await driver.wait(1000);
    },
    run: async () => {
    
      await driver.wait(1000);
      execSync(`adb shell input tap 777 2203`);
      await driver.wait(4000);
      await driver.scrollDown(10);
      await driver.scrollDown(2);
      await driver.scrollDown(10);
      await driver.scrollDown(2);
      await driver.scrollDown(10);
      await driver.scrollDown(9);
      await driver.scrollDown(10);
      await driver.scrollDown(2);
      await driver.scrollDown(10);
      await driver.scrollDown(10);
      await driver.scrollDown(20);
      await driver.scrollDown(5);
      await driver.scrollDown(10);
      await driver.scrollDown(5);
      await driver.scrollDown(10);
      await driver.scrollDown(10);
      await driver.scrollDown(20);
      await driver.scrollDown(10);
      await driver.scrollDown(10);
      await driver.scrollDown(1);
      await driver.scrollDown(10);
      await driver.scrollDown(10);
      await driver.scrollDown(30);
      await driver.scrollDown(5);
      await driver.scrollDown(10);
      await driver.scrollDown(5);
      await driver.scrollDown(10);
      await driver.scrollDown(10);
      await driver.scrollDown(15);
      await driver.scrollDown(20);
      await driver.scrollDown(10);
      let exists = false;
      while(exists)
      {
      
        driver.findElementByText("Niarn").then((result)=>{
        if(result.elementId)
            exists = true;
        }).catch(e=>{
          console.log(e);
        })
        await driver.wait(2000);
        //@ts-ignore
        if(exists !== true)
        {
          await driver.scrollDown(20);
          await driver.scrollDown(20);
          await driver.scrollDown(10);
        }
      }
      execSync(`adb shell input tap 166 491`);
      await driver.wait(4000);
       driver.stopApp();
        //@ts-ignore
      // run is where measuring will happen, insert e2e logic here
      //
      // You should probably add a finder to wait for the app to start
      // await driver.clickElementByText("Lists");


// child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 500`);
//   await driver.wait(1000);
// child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 500`);
//   await driver.wait(1000);
// child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 100`);
//   await driver.wait(1500);
// child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 50`);
//   await driver.wait(2200);
// child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 100`);
//   await driver.wait(1500);
// child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 50`);
// child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 50`);
//   await driver.wait(2200);
// child.execSync(`adb shell input touchscreen swipe 900 1900 900 600 100`);





        // await driver.scrollToEnd(100);
     //  await driver.wait(1000);
       

     
    },
    // Duration is optional, but helps in getting consistent measures.
    // Measures will be taken for this duration, regardless of test duration
    // duration: 20000,
  };
// first param = number of iterations
// second param = number or retries in case of errors
  const { writeResults } = await measurePerformance(bundleId, testCase,5,3);
  writeResults();
};

runTest(); 
   