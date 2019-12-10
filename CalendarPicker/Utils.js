/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

export const Utils = {
  START_DATE: 'START_DATE',
  END_DATE: 'END_DATE',
  WEEKDAYS: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  WEEKDAYS_MON: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  MONTHS: [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ],
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  getDaysInMonth: function(month, year) {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  },
};
