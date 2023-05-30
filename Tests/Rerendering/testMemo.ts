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
      await driver.clickElementByText("Lists");
      await driver.wait(500);
      await driver.clickElementByText("Rerender");
    },
    run: async () => {
      await driver.wait(500);
      child.execSync(`adb shell input tap 970 600`);
      await driver.wait(800);
      child.execSync(`adb shell input tap 970 712`);
      await driver.wait(800);
      child.execSync(`adb shell input tap 970 824`);
      await driver.wait(800);
      child.execSync(`adb shell input tap 970 936`);
      await driver.wait(800);
      child.execSync(`adb shell input tap 970 1180`);
      await driver.wait(800);
      child.execSync(`adb shell input tap 970 1310`);
      await driver.wait(800);
      child.execSync(`adb shell input tap 970 1417`);
      await driver.wait(800);
      child.execSync(`adb shell input tap 970 1527`);
      await driver.wait(800);
      child.execSync(`adb shell input tap 970 1656`);
      await driver.wait(800);
      child.execSync(`adb shell input tap 970 1752`);
      await driver.wait(800);
      child.execSync(`adb shell input tap 970 1864`);
       await driver.wait(800);
      child.execSync(`adb shell input tap 970 2000`);
    },
    // Duration is optional, but helps in getting consistent measures.
    // Measures will be taken for this duration, regardless of test duration
    duration: 20000,
  };

  const { writeResults } = await measurePerformance(bundleId, testCase,10,1);
  writeResults();
};

runTest();