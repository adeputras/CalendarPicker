import React from 'react';
import {
  View,
  Text,
  Platform
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import Controls from './Controls';

function isSameMonthAndYear(date, month, year) {
  if (date) {
    return date.month() === month && date.year() === year
  }
  return false;
}

export default function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    months,
    previousTitle,
    previousIcon,
    nextTitle,
    nextIcon,
    textStyle,
    restrictMonthNavigation,
    maxDate,
    minDate,
    headingLevel
  } = props;
  const MONTHS = months? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previous = previousTitle ? previousTitle : 'Previous';
  const next = nextTitle ? nextTitle : 'Next';
  const month = MONTHS[currentMonth];
  const year = currentYear;

  const disablePreviousMonth = restrictMonthNavigation && isSameMonthAndYear(minDate, currentMonth, currentYear);
  const disableNextMonth = restrictMonthNavigation && isSameMonthAndYear(maxDate, currentMonth, currentYear);

  const accessibilityProps = { accessibilityRole: 'header' };
  if (Platform.OS === 'web') {
    accessibilityProps['aria-level'] = headingLevel;
  }

  return (
    <View style={styles.headerWrapper}>
      <Controls
        disabled={disablePreviousMonth}
        label={previous}
        icon={previousIcon}
        onPressControl={onPressPrevious}
        styles={[styles.monthSelector, styles.prev]}
        textStyles={textStyle}
      />
      <View>
        <Text style={[styles.monthLabel, textStyle]} {...accessibilityProps}>
           { month } { year }
        </Text>
      </View>
      <Controls
        disabled={disableNextMonth}
        label={next}
        icon={nextIcon}
        onPressControl={onPressNext}
        styles={[styles.monthSelector, styles.next]}
        textStyles={textStyle}
      />
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
};
