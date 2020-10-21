import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile153830Navigator from '../features/UserProfile153830/navigator';
import Tutorial153829Navigator from '../features/Tutorial153829/navigator';
import NotificationList153801Navigator from '../features/NotificationList153801/navigator';
import Settings153800Navigator from '../features/Settings153800/navigator';
import Settings153792Navigator from '../features/Settings153792/navigator';
import UserProfile153790Navigator from '../features/UserProfile153790/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile153830: { screen: UserProfile153830Navigator },
Tutorial153829: { screen: Tutorial153829Navigator },
NotificationList153801: { screen: NotificationList153801Navigator },
Settings153800: { screen: Settings153800Navigator },
Settings153792: { screen: Settings153792Navigator },
UserProfile153790: { screen: UserProfile153790Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
