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
      await driver.clickElementByText("Rerender");
    },
    run: async () => {
      await driver.wait(500);
      child.execSync(`adb shell input tap 76 196`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 965 141`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 120 524`);
      await driver.wait(100);
    },
    // Duration is optional, but helps in getting consistent measures.
    // Measures will be taken for this duration, regardless of test duration
    duration: 5000,
  };

  const { writeResults } = await measurePerformance(bundleId, testCase,10,1);
  writeResults();
};

runTest();