import {StyleSheet} from 'react-native';
import { colors } from '../../CustomUI/CTColors/styles';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
  },
  main: {
    fontSize: 30,
    textAlign: 'center',
    color: colors.blackColor,
    fontWeight: '400',
    fontStyle: 'italic',
    fontFamily: 'NHaasGroteskDSStd-66MdIt'
  },
});
