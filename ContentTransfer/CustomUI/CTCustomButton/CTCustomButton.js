import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from './styles';

const CTCustomButton = (props) => {
  const { titleText, onPress, isSolidButton } = props;
  return (
    <TouchableOpacity onPress={onPress} style={isSolidButton ? buttonStyles.solidRoundedButton : buttonStyles.roundedButton}>
         <Text style={isSolidButton ? buttonStyles.solidButtonText : buttonStyles.buttonText}>
               {titleText}
         </Text>
    </TouchableOpacity>
  );
};

CTCustomButton.propTypes = {
  titleText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isSolidButton: PropTypes.bool
};

CTCustomButton.defaultProps = {
  titleText: 'Button Text',
  onPress: () => console.log('CTCustomButton Pressed'),
  isSolidButton: true
};

export default CTCustomButton;
