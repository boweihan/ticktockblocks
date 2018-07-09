import Colors from '../constants/colors';

const tileTypes = [
  { name: 'standard', color: Colors.white },
  { name: 'bomb', color: Colors.darkRed },
  { name: 'laser', color: Colors.lightGreen },
  { name: 'dud', color: Colors.darkGray },
  // { name: 'ticktock', color: Colors.darkGray },
];

class TileTypes {
  static getRandomTileType = () => {
    // https://stackoverflow.com/questions/16110758/generate-random-number-with-a-non-uniform-distribution
    const beta = Math.sin((Math.random() * Math.PI / 2) ^ 2);
    const betaLeft = beta < 0.5 ? 2 * beta : 2 * (1 - beta);
    const num = Math.floor(Math.random() * 4);
    return tileTypes[num];
  };
}

export default TileTypes;
