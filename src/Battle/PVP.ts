import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    player: Fighter,
    private _player2: Fighter,
  ) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}