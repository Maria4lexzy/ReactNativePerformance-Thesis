import { AppiumDriver } from "@bam.tech/appium-helper";
import { TestCase, measurePerformance } from "@perf-profiler/e2e";
import * as child from 'child_process';

const bundleId = "dk.smukfesthesis2";
const appActivity = "dk.smukfesthesis2.MainActivity";

const runTest = async () => {
  const driver = await AppiumDriver.create({
    appPackage: bundleId,
    appActivity,
  });

  const testCase: TestCase = {
    beforeTest: async () => {
      child.execSync(`adb shell input tap 84 184`);
      await driver.wait(1000);
    },
    run: async () => {
      await driver.clickElementByText("Hjem");
      await driver.findElementByText("Re-render");
      child.execSync(`adb shell input tap 125 488`);
       await driver.wait(500);
       child.execSync(`adb shell input tap 125 488`);
       await driver.wait(500);
        child.execSync(`adb shell input tap 125 488`);
       await driver.wait(500);
    },
    // Duration is optional, but helps in getting consistent measures.
    // Measures will be taken for this duration, regardless of test duration
    duration: 14000,
  };

  const { writeResults } = await measurePerformance(bundleId, testCase,10,1);
  writeResults();
};

runTest();