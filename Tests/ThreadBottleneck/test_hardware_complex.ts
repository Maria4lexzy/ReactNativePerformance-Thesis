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
      child.execSync(`adb shell input tap 122 477`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 122 477`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 239 728`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 239 728`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 239 728`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 171 1011`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 171 852`);
        await driver.wait(100);
      child.execSync(`adb shell input tap 171 1149`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 171 1312`);
        await driver.wait(100);
      child.execSync(`adb shell input tap 509 1147`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 171 1011`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 171 852`);
        await driver.wait(100);
      child.execSync(`adb shell input tap 171 1149`);
      await driver.wait(100);
      child.execSync(`adb shell input tap 171 1312`);
        await driver.wait(100);
      child.execSync(`adb shell input tap 509 1147`);
      await driver.wait(100);
    },
    // Duration is optional, but helps in getting consistent measures.
    // Measures will be taken for this duration, regardless of test duration
    duration: 7500,
  };

  const { writeResults } = await measurePerformance(bundleId, testCase,1,1);
  writeResults();
};

runTest();