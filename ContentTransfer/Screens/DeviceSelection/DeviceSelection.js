import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../CustomUI/CTColors/styles';
import CTCustomButton from '../../CustomUI/CTCustomButton/CTCustomButton';
import CTConstants from '../../Constants/CTConstants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.blackColor,
    fontWeight: '400',
    fontStyle: 'italic',
    fontFamily: 'NHaasGroteskDSStd-66MdIt'
  },
});

export default class DeviceSelection extends Component {

  handleNextTapped = () => {
    console.log('Next Button Pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>
          {CTConstants.CT_DEVICE_COMBINATION_HEADER}
        </Text>
        <CTCustomButton
          titleText={CTConstants.CT_NEXT_BUTTON_TITLE}
          onPress={this.handleNextTapped}
        />
      </View>
    );
  }
}
