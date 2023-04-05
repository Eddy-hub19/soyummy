export const getColor = (
  errors,
  values,
  defaultColor = 'rgba(255, 255, 255, 0.8)'
) => {
  if (
    errors === 'Your password protection is not enough. Add a number!' ||
    errors === 'Your password protection is not enough. Add a letter!'
  ) {
    return '#F6C23E';
  }
  return values ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
};
