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
    },
    run: async () => {
      await driver.wait(500);
      child.execSync(`adb shell input tap 75 176`);
      await driver.findElementByText("Musik")
      await driver.clickElementByText("Hjem");
      await driver.findElementByText("Rerender")
      child.execSync(`adb shell input touchscreen swipe 937 1850 937 1133 1000`);
      await driver.wait(2000);
      
    },
    // Duration is optional, but helps in getting consistent measures.
    // Measures will be taken for this duration, regardless of test duration
    duration: 8000,
  };

  const { writeResults } = await measurePerformance(bundleId, testCase,10,1);
  writeResults();
};

runTest();