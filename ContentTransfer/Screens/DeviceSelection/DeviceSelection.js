import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import CTCustomButton from '../../CustomUI/CTCustomButton/CTCustomButton';
import CTConstants from '../../Constants/CTConstants';
import { DeviceSelectionScreenStyles } from './styles';
import { CTPrimaryMessageLabel, CTSecondaryMessageLabel, CTAttributedLabel } from '../../CustomUI/CTCustomLabel/CTCustomLabel';
import { CTDoubLabelCheckBoxItem } from '../../CustomUI/CTCustomListItems/CTDoubleLabelCheckBoxItem'

export default class DeviceSelection extends Component {

  handleNextTapped = () => {
    console.log('Next Button Pressed')
  }

  renderItem = ({item}) => (
    <CTDoubLabelCheckBoxItem primaryText={item.primText} secondaryText={item.secText} isChecked={item.isChecked} onPressItem={this.itemSelected.bind(this, {item})}/>
  );

  itemSelected = ({item}) => {
    const newDeviceItems = this.state.deviceItems
    if (newDeviceItems[0].isChecked == newDeviceItems[1].isChecked) {
      for(let i = 0; i < 2; i++){
        if (item.primText == newDeviceItems[i].primText) {
          newDeviceItems[i].isChecked = !newDeviceItems[i].isChecked
        }
  		}
    }else {
      newDeviceItems[0].isChecked = !newDeviceItems[0].isChecked
      newDeviceItems[1].isChecked = !newDeviceItems[1].isChecked
    }
    this.setState({deviceItems: newDeviceItems});
  };

  constructor(props) {
    super(props);
    this.state = {deviceItems: [{primText: CTConstants.CT_DEVICE_OLD_PRIM_TEXT, secText: CTConstants.CT_DEVICE_OLD_SEC_TEXT, isChecked: false},
                                {primText: CTConstants.CT_DEVICE_NEW_PRIM_TEXT, secText: CTConstants.CT_DEVICE_NEW_SEC_TEXT, isChecked: false}]
                 };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View margin={0} style={DeviceSelectionScreenStyles.container}>
        <View marginLeft={40} marginRight={40} marginTop={20} marginBottom={20}>
          <CTPrimaryMessageLabel infoText={CTConstants.CT_DEVICE_COMBINATION_HEADER}>
          </CTPrimaryMessageLabel>
        </View>
        <View style={DeviceSelectionScreenStyles.headerSeperator} marginLeft={40} marginRight={40} marginTop={0} marginBottom={10}>
        </View>
        <FlatList
          data={this.state.deviceItems}
          renderItem={this.renderItem}
          extraData={this.state}
          keyExtractor={item => item.primText}
        />
        <View margin={40} style={{position:'absolute', bottom:0, alignSelf: 'center'}}>
          <CTCustomButton
            titleText={CTConstants.CT_NEXT_BUTTON_TITLE}
            onPress={this.handleNextTapped}
          />
        </View>
      </View>
    );
  }
}
