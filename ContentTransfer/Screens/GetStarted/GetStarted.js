import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GetStartedScreenStyles } from './styles';
import CTCustomButton from '../../CustomUI/CTCustomButton/CTCustomButton';
import CTConstants from '../../Constants/CTConstants';
import { CTPrimaryMessageLabel, CTSecondaryMessageLabel, CTAttributedLabel } from '../../CustomUI/CTCustomLabel/CTCustomLabel'

export default class GetStartedScreen extends Component {

  handleSignIn = () => {
    console.log('Button Pressed')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View margin={0} style={GetStartedScreenStyles.container}>
        <View marginLeft={40} marginRight={40} marginTop={10} marginBottom={10} style={{flex: 4}}>
          <CTPrimaryMessageLabel infoText={CTConstants.CT_GET_STARTED_HEADER}>
          </CTPrimaryMessageLabel>
        </View>
        <View marginLeft={40} marginRight={40} marginTop={0} marginBottom={0} style={{flex: 2.5}}>
          <CTSecondaryMessageLabel infoText={CTConstants.CT_GET_STRATED_SECONDARY_MESSGE}>
          </CTSecondaryMessageLabel>
        </View>
        <View marginLeft={40} marginRight={40} marginTop={20} marginBottom={20} style={{flex: 2.5}}>
          <CTAttributedLabel infoText={CTConstants.CT_GET_STARTED_TNC_PART1} attributedText={CTConstants.CT_GET_STARTED_TNC_PART2} attributedTextAction={this.handleSignIn}>
          </CTAttributedLabel>
        </View>
        <View margin={40} style={{flex: 1}}>
          <CTCustomButton
            titleText={CTConstants.CT_GET_STRATED_BUTTON_TITLE}
            onPress={() => navigate("DeviceSelection", {screen: "DeviceSelection"})}
            isSolidButton={true}
          />
        </View>
      </View>
    );
  }
}
