export interface GunsInfo {
  displayName:string
  displayIcon:string
  KillStreamIcon:string
  weaponStats:WeaponStats
  damageRanges:DamageRanges[]
  shopData:ShopData
}

export interface WeaponStats {
  fireRate:number
  magazineSize:number
  runSpeedMultiplier:string
  equipTimeSeconds:number
  reloadTimeSeconds:number
  wallPenetration:string
  adsStats:AdsStats
  altShotgunStats:AltShotgunStats
}

export interface AdsStats {
  zoomMultiplier:number
  fireRate:number
  runSpeedMultiplier:number
} 

export interface DamageRanges {
  rangeStartMeters:number
  rangeEndMeters:number
  headDamage:number
  bodyDamage:number
  legDamage:number
}

export interface ShopData {
  cost:number
  // category:string
  categoryText:string
  newImage:string
}

export interface AltShotgunStats {
  shotgunPelletCount:number
  burstRate:number
}