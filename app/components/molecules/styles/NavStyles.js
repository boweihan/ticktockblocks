import { Dimensions } from 'react-native';
import Colors from '../../../constants/colors';

const Width = Dimensions.get('window').width;

export default {
  nav: {
    height: 60,
    width: Width,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
  },
  navButton: {
    width: 75,
  },
  iconText: {
    textAlign: 'center',
    fontSize: 30,
    color: Colors.white,
    lineHeight: 60,
  },
  navLogo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLogoElem: {
    padding: 10,
    borderRadius: 5,
    margin: 2,
  },
};
