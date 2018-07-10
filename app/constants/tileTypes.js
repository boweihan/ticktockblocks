import Colors from '../constants/colors';

const tileTypes = [
  { name: 'standard', operation: '+', color: Colors.white },
  { name: 'standard', operation: '-', color: Colors.gray },
  { name: 'standard', operation: 'x', color: Colors.green },
];

class TileTypes {
  static getRandomTileType = () => {
    // https://stackoverflow.com/questions/16110758/generate-random-number-with-a-non-uniform-distribution
    const beta = Math.sin((Math.random() * Math.PI / 2) ^ 2);
    const betaLeft = beta < 0.5 ? 2 * beta : 2 * (1 - beta);
    const num = Math.floor(Math.random() * 3);
    return { ...tileTypes[num], number: TileTypes.getRandomTileNumber() };
  };

  static getRandomTileNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  };
}

export default TileTypes;
