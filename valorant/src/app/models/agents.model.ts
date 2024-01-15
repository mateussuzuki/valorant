export interface Agent {
  displayIcon:string  
  bustPortrait:string
  background:string
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

export interface AgentsInfo {
  displayName:string
  displayIcon:string
  bustPortrait:string
  isPlayableCharacter: boolean
  abilities:Abilitie[]
  description:string
  role:Role
}