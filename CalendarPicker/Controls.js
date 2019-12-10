import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default function Controls({ styles, textStyles, label, onPressControl, disabled, icon }) {

  let content = icon ? icon : <Text style={[styles, textStyles]}>{label}</Text>;
  return (
    <TouchableOpacity style={styles} onPress={() => onPressControl()}>
      {content}
    </TouchableOpacity>
  );
  // return (
  //   <TouchableOpacity
  //     onPress={() => onPressControl()}
  //     disabled={disabled}
  //   >
  //     <Text style={[styles, textStyles]}>
  //       { disabled ? null : label }
  //     </Text>
  //   </TouchableOpacity>
  // );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
};
