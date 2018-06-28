import React, { Component } from 'react';
import { View } from 'react-native';
import CTCustomButton from '../../CustomUI/CTCustomButton/CTCustomButton';
import CTConstants from '../../Constants/CTConstants';
import { DeviceSelectionScreenStyles } from './styles';
import { CTPrimaryMessageLabel, CTSecondaryMessageLabel, CTAttributedLabel } from '../../CustomUI/CTCustomLabel/CTCustomLabel'

export default class DeviceSelection extends Component {

  handleNextTapped = () => {
    console.log('Next Button Pressed')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View margin={0} style={DeviceSelectionScreenStyles.container}>
        <View marginLeft={40} marginRight={40} marginTop={20} marginBottom={20}>
          <CTPrimaryMessageLabel infoText={CTConstants.CT_DEVICE_COMBINATION_HEADER}>
          </CTPrimaryMessageLabel>
        </View>
        <View style={DeviceSelectionScreenStyles.headerSeperator} marginLeft={40} marginRight={40} marginTop={0} marginBottom={10}>
        </View>
        <View margin={40} style={{position:'absolute', bottom:0, alignSelf: 'center'}}>
          <CTCustomButton
            titleText={CTConstants.CT_NEXT_BUTTON_TITLE}
            onPress={this.handleNextTapped}
          />
        </View>
      </View>
    );
  }
}
