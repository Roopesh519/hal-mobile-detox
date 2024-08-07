import { BeforeAll,AfterAll} from '@cucumber/cucumber';
import detox from 'detox';
const { device } = detox;
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30000)

BeforeAll({ timeout: 300 * 1000 }, async () => {
  await detox.init("android");
  await device.launchApp();
  // await device.reloadReactNative();
  await new Promise(resolve => setTimeout(resolve, 10000));
});

AfterAll({ timeout: 120 * 1000 }, async () => {
  await detox.cleanup()
});
