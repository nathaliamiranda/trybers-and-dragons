import Race from './Race';

export default class Dwarf extends Race {
  private static _racesInst = 0;
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._racesInst += 1;
    return this._racesInst;
  }
}