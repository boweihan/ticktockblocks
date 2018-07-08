import Colors from '../../../constants/colors';

export default {
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 35,
    fontFamily: 'MontserratBold',
  },
  block: {
    fontSize: 14,
    fontFamily: 'MontserratBold',
    textAlign: 'center',
  },
  blockContainer: {
    margin: 2,
    padding: 10,
    borderRadius: 5,
    width: 35,
    height: 35,
    backgroundColor: 'red',
    marginBottom: 50,
  },
};
