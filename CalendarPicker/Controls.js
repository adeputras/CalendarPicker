import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default function Controls({ styles, textStyles, label, onPressControl, disabled, icon }) {

  let content = icon || <Text style={[styles, textStyles]}>{label}</Text>;
  return (
    <TouchableOpacity style={styles} onPress={() => onPressControl()}>
      {content}
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
};
