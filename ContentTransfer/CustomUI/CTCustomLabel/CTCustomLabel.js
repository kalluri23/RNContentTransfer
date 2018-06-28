import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { LabelStyles } from './styles'

export const CTPrimaryMessageLabel = (props) => {
  const { infoText, maxLines } = props;
  return (
    <Text style={LabelStyles.primaryMessageStyle} adjustsFontSizeToFit={true} minimumFontScale={0.5} numberOfLines={maxLines} ellipsizeMode={'tail'}>
          {infoText}
    </Text>
  );
};

CTPrimaryMessageLabel.propTypes = {
  infoText: PropTypes.string.isRequired,
  maxLines: PropTypes.number
};

CTPrimaryMessageLabel.defaultProps = {
  infoText: 'Label',
  maxLines: 1
};

export const CTSecondaryMessageLabel = (props) => {
  const { infoText } = props;
  return (
    <Text style={LabelStyles.secondaryMessageStyle}>
          {infoText}
    </Text>
  );
};

CTSecondaryMessageLabel.propTypes = {
  infoText: PropTypes.string.isRequired
};

CTSecondaryMessageLabel.defaultProps = {
  infoText: 'Label'
};

export const CTAttributedLabel = (props) => {
  const { infoText, attributedText, attributedTextAction } = props;
  return (
    <Text>
      <Text style={LabelStyles.secondaryMessageStyle}>
            {infoText}
      </Text>
      <Text style={LabelStyles.linkStyle} onPress={attributedTextAction}>
            {attributedText}
      </Text>
    </Text>
  );
};

CTAttributedLabel.propTypes = {
  infoText: PropTypes.string.isRequired,
  attributedText: PropTypes.string.isRequired,
  attributedTextAction: PropTypes.func
};

CTAttributedLabel.defaultProps = {
  infoText: 'Label',
  attributedText: 'Attributed Label',
  attributedTextAction: () => console.log('attributedText Pressed')
};
