import Colors from '../../../constants/colors';

export default {
  game: {
    flex: 1,
    alignItems: 'center',
  },
  boardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 30,
    paddingVertical: 4,
    borderWidth: 5,
    borderColor: Colors.white,
    overflow: 'hidden',
  },
};
