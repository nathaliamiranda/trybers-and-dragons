import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    private _monster: SimpleFighter[],
  ) {
    super(player);
  }

  private fightBattle(monster: (SimpleFighter)): number {
    while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
      this.player.attack(monster);
      monster.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }

  fight(): (number) {
    const monsters = this._monster.map((m) => this.fightBattle(m));
    const result = monsters.some((a: number) => a === -1);
    
    return result ? -1 : 1;
  }
}