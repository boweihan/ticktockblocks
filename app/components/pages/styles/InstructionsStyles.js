import Colors from '../../../constants/colors';

export default {
  instructions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  list: {
    backgroundColor: Colors.lightBrown,
    padding: 10,
    borderRadius: 5,
  },
  step: {
    borderRadius: 5,
    backgroundColor: Colors.lightgray,
    margin: 5,
    flex: 1,
    flexDirection: 'row',
  },
  stepNumber: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: Colors.darkBrown,
  },
  stepInfo: {
    flex: 6,
    alignItems: 'center',
  },
  stepNumberText: {
    fontFamily: 'MontserratBold',
    fontSize: 30,
    color: Colors.white,
  },
  stepInfoText: {
    fontFamily: 'MontserratBold',
    color: Colors.darkBrown,
    margin: 10,
    marginTop: 20,
  },
  stepImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
};
