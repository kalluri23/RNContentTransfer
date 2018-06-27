import {StyleSheet} from 'react-native';
import { colors } from '../CTColors/styles';

export const LabelStyles = StyleSheet.create({
  primaryMessageStyle: {
    fontSize: 40,
    textAlign: 'left',
    color: colors.blackColor,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'NHaasGroteskDSStd-75Bd'
  },

  secondaryMessageStyle: {
    fontSize: 15,
    textAlign: 'left',
    color: colors.blackColor,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'NHaasGroteskDSStd-55Rg'
  },

  linkStyle: {
    fontSize: 15,
    textAlign: 'left',
    color: colors.blueColor,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'NHaasGroteskDSStd-55Rg'
  }
});
