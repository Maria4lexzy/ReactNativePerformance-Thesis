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
      child.execSync(`adb shell input tap 120 506`);
      child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 120 623`);
      child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 1000 2000`);
      /////////////////////////////////////
      child.execSync(`adb shell input tap 120 882`);
      child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 120 1000`);
      child.execSync(`adb shell input tap 1000 2000`);
      child.execSync(`adb shell input tap 1000 2000`);
      await driver.wait(550);
    },
    run: async () => {
      await driver.wait(500);
      child.execSync(`adb shell input tap 120 506`);
       await driver.wait(500);
      child.execSync(`adb shell input tap 116 1836`);
      await driver.wait(20);
      child.execSync(`adb shell input tap 970 1848`);
       await driver.wait(20);
      child.execSync(`adb shell input tap 120 623`);
      await driver.wait(500);
      child.execSync(`adb shell input tap 116 1836`);
      await driver.wait(20);
      child.execSync(`adb shell input tap 970 1848`);
       await driver.wait(20);
      /////////////////////////////////////
      child.execSync(`adb shell input tap 120 882`);
       await driver.wait(500);
      child.execSync(`adb shell input tap 116 1836`);
      await driver.wait(20);
      child.execSync(`adb shell input tap 970 1848`);
       await driver.wait(20);
      child.execSync(`adb shell input tap 120 1000`);
      await driver.wait(20);
      child.execSync(`adb shell input tap 116 1836`);
      await driver.wait(20);
      child.execSync(`adb shell input tap 970 1848`);
      await driver.wait(20);
    },
    // Duration is optional, but helps in getting consistent measures.
    // Measures will be taken for this duration, regardless of test duration
    duration: 12000,
  };

  const { writeResults } = await measurePerformance(bundleId, testCase,10,1);
  writeResults();
};

runTest();