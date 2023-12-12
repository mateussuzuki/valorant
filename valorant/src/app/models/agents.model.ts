export interface Agent {
  displayName:string
  displayIcon:string  
  description:string
  role:Role
  abilities:Abilitie[]
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