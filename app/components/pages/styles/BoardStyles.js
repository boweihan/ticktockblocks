import { Dimensions } from 'react-native';
import Colors from '../../../constants/colors';

const Width = Dimensions.get('window').width;

export default {
  game: {
    flex: 1,
    alignItems: 'center',
  },
  board: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 30,
    paddingVertical: 4,
    width: Width * 0.8 + 10,
    borderWidth: 5,
    borderColor: Colors.white,
    borderTopWidth: 0,
  },
};
