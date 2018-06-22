# RNContentTransfer
Crossplatform app to demonstrate development of react native


NOTES

-- Run the below commands to setup the project
   react-native upgrade  (regenerates the ios and android folders)
   react-native link (links the regenerated folders with node modules)


--

iOS Specific configuration to run on device:

Generate main.jsbundle

react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios

Switch jsCodeLocation URL based on environment using below code in appdelegate:

NSURL *jsCodeLocation;

#if TARGET_OS_SIMULATOR
      jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
      jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
