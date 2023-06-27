import {StyleSheet} from 'react-native';

const indexStyles = StyleSheet.create({
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  verticalFlex: {
    flex: 1,
    flexDirection: 'column',
  },
  shadowProp: {
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 4,
  },
});

export {indexStyles};
