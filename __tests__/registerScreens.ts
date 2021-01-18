import { Navigation } from "react-native-navigation";
import SimpleScreen from "./simple/SimpleScreen"
import ScreenOne from "./screen_navigation/ScreenOne"
import ScreenTwo from "./screen_navigation/ScreenTwo"
import {FunctionComponent} from "./functional/FunctionComponent";

Navigation.registerComponent('EXAMPLES.SIMPLE_SCEEN', () => SimpleScreen);
Navigation.registerComponent('EXAMPLES.SCREEN_ONE', () => ScreenOne);
Navigation.registerComponent('EXAMPLES.SCREEN_TWO', () => ScreenTwo);
Navigation.registerComponent('EXAMPLES.FUNCTIONAL', () => FunctionComponent);

// Navigation.events().registerAppLaunchedListener(async () => {
//   console.log("OWOWOOWOWOWOOWOWOWOW")
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'Home'
//             }
//           }
//         ]
//       }
//     }
//   });
// });
