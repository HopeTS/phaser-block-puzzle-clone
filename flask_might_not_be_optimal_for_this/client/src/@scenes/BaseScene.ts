import Phaser from "phaser";

/** Scene superclass */
class BaseScene extends Phaser.Scene {
  /** Phaser game config */
  public CONFIG: Phaser.Types.Core.GameConfig;

  /** Center of the screen */
  public SCREEN_CENTER: [number, number];

  constructor(key: string, config: Phaser.Types.Core.GameConfig) {
    super(key);

    this.CONFIG = config;
  }
}

export default BaseScene;
