export interface Agent {
  displayIcon:string  
  bustPortrait:string
  background:string
}
export interface Info {
  displayIcon:string
  bustPortrait:string
  isPlayableCharacter:boolean
  abilities:Abilitie[]
  description:string
  role:Role[]
}

export interface AbilitieRoleAgent {
  abilities:Abilitie[]
  description:string
  role:Role[]
}

export interface Role {
  description:string
  displayName:string
  displayIcon:string
}

export interface Abilitie {
  description:string
  displayIcon:string
  displayName:string
  slot:string
}

export class AgentsInfo {
  displayIcon:string
  bustPortrait:string
  isPlayableCharacter: boolean
  abilities:Abilitie[]
  description:string
  role:Role[]
  constructor(
    _displayIcon:string = "",
   _bustPortrait:string = "",
    _isPlayableCharacter:boolean = true,
    _abilities:Abilitie[] = [],
    _description:string ="",
    _role:Role[] = []) {
    this.displayIcon = _displayIcon
    this.bustPortrait = _bustPortrait
    this.isPlayableCharacter = _isPlayableCharacter
    this.abilities = _abilities
    this.description = _description
    this.role = _role
  }
}