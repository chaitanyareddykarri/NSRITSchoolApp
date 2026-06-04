export const PREDEFINED_CLASSES = [
  {label: 'Nursery', value: 'Nursery', order: 1},
  {label: 'LKG', value: 'LKG', order: 2},
  {label: 'UKG', value: 'UKG', order: 3},
  {label: '1', value: '1', order: 4},
  {label: '2', value: '2', order: 5},
  {label: '3', value: '3', order: 6},
  {label: '4', value: '4', order: 7},
  {label: '5', value: '5', order: 8},
  {label: '6', value: '6', order: 9},
  {label: '7', value: '7', order: 10},
  {label: '8', value: '8', order: 11},
  {label: '9', value: '9', order: 12},
  {label: '10', value: '10', order: 13},
];

export const isValidPredefinedClass = className =>
  PREDEFINED_CLASSES.some(item => item.value === String(className));
