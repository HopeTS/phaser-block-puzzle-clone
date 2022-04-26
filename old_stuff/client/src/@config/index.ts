import Phaser from "phaser";

/** Phaser config */
const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Block Puzzle",

  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },

  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },

  parent: "game",
  backgroundColor: "#08081e",
};

export default gameConfig;
