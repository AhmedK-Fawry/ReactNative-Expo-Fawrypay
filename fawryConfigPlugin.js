// fawryConfigPlugin.js

// module.exports = (config, context) => {
//     // Check if the platform is iOS
//     if (context.platform === 'ios') {
//         // Modify iOS project configuration

//         // Turn off Flipper
//         config.ios.flipper = false;

//         // Turn off Hermes
//         config.ios.hermesEnabled = false;

//         // Enable use_frameworks!
//         config.ios.podspecIncludesFramework = true;

//         // Build library for distribution
//         config.ios.BUILD_LIBRARY_FOR_DISTRIBUTION = true;

//         // Define the command to run pod install after config changes
//         config.ios.afterPodInstall = 'cd ios && pod install';
//     }

//     // Return the updated config
//     return config;
// };
