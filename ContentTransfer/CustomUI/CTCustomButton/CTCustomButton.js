import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from './styles';

export default CTCustomButton = (props) => {
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

export class CTRadioButton extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <TouchableOpacity style={buttonStyles.radioButton}>
        <View style={this.props.isChecked ? buttonStyles.radioButtonChecked : buttonStyles.radioButtonUnchecked}>
        </View>
      </TouchableOpacity>
    );
  }
};
