import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { ListItemStyles } from './styles';
import { CTRadioButton } from '../CTCustomButton/CTCustomButton';


export const CTDoubLabelCheckBoxItem = (props) => {
    const { primaryText, secondaryText } = props;
    return (
        <View style={ListItemStyles.itemContainer} marginLeft={40} marginRight={40} marginTop={10} marginBottom={10}>
          <CTRadioButton onPress={() => console.log('Radio Button Pressed')}/>
          <Text style={ListItemStyles.primaryTextStyle} adjustsFontSizeToFit={true} minimumFontScale={0.5} numberOfLines={1} ellipsizeMode={'tail'}>
                {primaryText}
          </Text>
          <Text style={ListItemStyles.secondaryTextStyle} adjustsFontSizeToFit={true} minimumFontScale={0.5} numberOfLines={1} ellipsizeMode={'tail'}>
                {secondaryText}
          </Text>
        </View>
    );

};

CTDoubLabelCheckBoxItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired
};

CTDoubLabelCheckBoxItem.defaultProps = {
  primaryText: 'Primary Text',
  primaryText: 'Secondary Text'
};
