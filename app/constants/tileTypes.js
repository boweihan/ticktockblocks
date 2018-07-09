import Colors from '../constants/colors';

const tileTypes = [
  { name: 'standard', color: Colors.lightGray },
  { name: 'bomb', color: Colors.darkRed },
  { name: 'laser', color: Colors.lightGreen },
  { name: 'ticktock', color: Colors.darkGray },
];

class TileTypes {
  static getRandomTileType = () => {
    const num = Math.floor(Math.random() * 3);
    return tileTypes[num];
  };
}

export default TileTypes;
