export class ImageGifs {
  constructor(public gif:any) {
  }
}

export class ImagePortraitIcon {
  displayIcon:string
  bustPortrait:string
  isPlayableCharacter: boolean
  constructor(_displayIcon:string = "", _bustPortrait:string = "", _isPlayableCharacter:boolean = true) {
    this.displayIcon = _displayIcon
    this.bustPortrait = _bustPortrait
    this.isPlayableCharacter = _isPlayableCharacter
  }
}