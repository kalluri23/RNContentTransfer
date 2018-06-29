import {StyleSheet} from 'react-native';
import { colors } from '../CTColors/styles';

export const ListItemStyles = StyleSheet.create({
  primaryTextStyle: {
    fontSize: 20,
    textAlign: 'left',
    color: colors.blackColor,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'NHaasGroteskDSStd-55Rg'
  },

  secondaryTextStyle: {
    fontSize: 10,
    textAlign: 'left',
    color: colors.blackColor,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'NHaasGroteskDSStd-55Rg'
  },
  
  itemContainer: {
    backgroundColor: colors.whiteColor
  }
});
