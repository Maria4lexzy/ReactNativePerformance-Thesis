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
      child.execSync(`adb shell input tap 166 448`);child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 166 548`);child.execSync(`adb shell input tap 1000 2000`);

      child.execSync(`adb shell input tap 524 448`);child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 524 548`);child.execSync(`adb shell input tap 1000 2000`);

      child.execSync(`adb shell input tap 875 448`);child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 875 548`);child.execSync(`adb shell input tap 1000 2000`);

      child.execSync(`adb shell input tap 170 694`);child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 170 777`);child.execSync(`adb shell input tap 1000 2000`);

      child.execSync(`adb shell input tap 516 694`);child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 516 777`);child.execSync(`adb shell input tap 1000 2000`);

      child.execSync(`adb shell input tap 883 694`);child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 883 777`);child.execSync(`adb shell input tap 1000 2000`);

      await driver.wait(4050);
    },
    run: async () => {
     child.execSync(`adb shell input tap 166 448`);child.execSync(`adb shell input tap 423 1840`);
      child.execSync(`adb shell input tap 166 548`);child.execSync(`adb shell input tap 423 1840`);
await driver.wait(500);
        child.execSync(`adb shell input tap 524 448`);child.execSync(`adb shell input tap 423 1840`);
      child.execSync(`adb shell input tap 524 548`);child.execSync(`adb shell input tap 423 1840`);
await driver.wait(500);
        child.execSync(`adb shell input tap 875 448`);child.execSync(`adb shell input tap 423 1840`);
      child.execSync(`adb shell input tap 875 548`);child.execSync(`adb shell input tap 423 1840`);
await driver.wait(500);
      child.execSync(`adb shell input tap 170 694`);child.execSync(`adb shell input tap 423 1840`);
      child.execSync(`adb shell input tap 170 777`);child.execSync(`adb shell input tap 423 1840`);

await driver.wait(500);
        child.execSync(`adb shell input tap 516 694`);child.execSync(`adb shell input tap 423 1840`);
      child.execSync(`adb shell input tap 516 777`);child.execSync(`adb shell input tap 423 1840`);
await driver.wait(500);
 child.execSync(`adb shell input tap 883 694`);child.execSync(`adb shell input tap 423 1840`);
      child.execSync(`adb shell input tap 883 777`);child.execSync(`adb shell input tap 423 1840`);
      await driver.wait(500);
    },
    // Duration is optional, but helps in getting consistent measures.
    // Measures will be taken for this duration, regardless of test duration
    duration: 18000,
  };

  const { writeResults } = await measurePerformance(bundleId, testCase,10,1);
  writeResults();
};

runTest();