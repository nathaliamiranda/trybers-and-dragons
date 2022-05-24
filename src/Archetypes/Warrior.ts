import { EnergyType } from '../Energy';
import Archtypes from './Archetype';

export default class Warrior extends Archtypes {
  private static _archetypesInst = 0;
  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._archetypesInst += 1;
    return this._archetypesInst;
  }
}