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

export default class GetStartedScreen extends Component {

  handleSignIn = () => {
    console.log('Button Pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>
          {CTConstants.CT_GET_STRATED_PRIMARY_MESSGE}
        </Text>
        <CTCustomButton
          titleText={CTConstants.CT_GET_STRATED_BUTTON_TITLE}
          onPress={this.handleSignIn}
          isSolidButton={true}
        />
      </View>
    );
  }
}
