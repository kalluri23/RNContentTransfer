import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { ListItemStyles } from './styles';
import { CTRadioButton } from '../CTCustomButton/CTCustomButton';


export class CTDoubLabelCheckBoxItem extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <TouchableOpacity onPress={this.props.onPressItem}>
            <View style={ListItemStyles.itemContainer} marginLeft={40} marginRight={40} marginTop={10} marginBottom={10}>
              <CTRadioButton isChecked={this.props.isChecked}/>
              <View marginLeft={10}>
                <View>
                  <Text style={ListItemStyles.primaryTextStyle} adjustsFontSizeToFit={true} minimumFontScale={0.5} numberOfLines={1} ellipsizeMode={'tail'}>
                        {this.props.primaryText}
                  </Text>
                </View>
                <View marginTop={5}>
                  <Text style={ListItemStyles.secondaryTextStyle} adjustsFontSizeToFit={true} minimumFontScale={0.5} numberOfLines={1} ellipsizeMode={'tail'}>
                        {this.props.secondaryText}
                  </Text>
                </View>
              </View>
            </View>
        </TouchableOpacity>
      );
    }
};
