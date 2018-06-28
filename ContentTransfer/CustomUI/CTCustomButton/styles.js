import {StyleSheet} from 'react-native';
import { colors } from '../CTColors/styles';

export const buttonStyles = StyleSheet.create({
  roundedButton: {
    opacity: 1,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 20,
    borderColor: colors.blackColor,
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
 },
 buttonText: {
   fontSize: 20,
   textAlign: 'center',
   color: colors.blackColor,
   fontWeight: 'bold',
   fontStyle: 'normal',
   fontFamily: 'NHaasGroteskTXStd-55Rg'
 },
 solidRoundedButton: {
   opacity: 1,
   alignSelf: 'center',
   padding: 10,
   borderRadius: 20,
   borderColor: colors.blackColor,
   backgroundColor: colors.blackColor,
   borderWidth: 1,
},
solidButtonText: {
  fontSize: 20,
  textAlign: 'center',
  color: colors.whiteColor,
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontFamily: 'NHaasGroteskTXStd-55Rg'
}
});
