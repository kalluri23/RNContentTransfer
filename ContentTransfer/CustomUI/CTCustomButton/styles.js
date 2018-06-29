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
    minWidth: 150
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
   minWidth: 150
},
solidButtonText: {
  fontSize: 20,
  textAlign: 'center',
  color: colors.whiteColor,
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontFamily: 'NHaasGroteskTXStd-55Rg'
},
radioButton: {
  opacity: 1,
  borderRadius: 12,
  borderColor: colors.blackColor,
  backgroundColor: colors.whiteColor,
  borderWidth: 2,
  height: 24,
  width: 24,
  alignItems: 'center',
  justifyContent: 'center'
},
radioButtonChecked: {
  opacity: 1,
  borderRadius: 6,
  backgroundColor: colors.blackColor,
  height: 12,
  width: 12,
  alignSelf: 'center'
},
radioButtonUnchecked: {
  opacity: 1,
  borderRadius: 6,
  backgroundColor: colors.whiteColor,
  height: 12,
  width: 12,
  alignSelf: 'center'
}
});
