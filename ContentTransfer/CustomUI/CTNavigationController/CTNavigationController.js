import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import DeviceSelection from '../../Screens/DeviceSelection/DeviceSelection'
import GetStartedScreen from '../../Screens/GetStarted/GetStarted'
import CTConstants from '../../Constants/CTConstants';

export const CTNavigationController = StackNavigator({
  GetStartedScreen: { screen: GetStartedScreen,
                      navigationOptions: {
                                            title: CTConstants.CT_GET_STRATED_NAV_TITLE,
                                            headerLeft: null
                                         }
                    },
  DeviceSelection: { screen: DeviceSelection,
                     navigationOptions: {
                                            title: CTConstants.CT_SETUP_NAV_TITLE,
                                            headerLeft: null
                                        }
                   }
});

export default class LandingScreen extends Component {
  render() {
    return (
      <CTNavigationController/>
    );
  }
}
