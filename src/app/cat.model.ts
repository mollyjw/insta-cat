export class Cat {
  breeds: Array<any>
  id: string
  url: string
  width: number
  height: number

  constructor({
    breeds = [],
    id = '',
    url = '',
    width = null,
    height = null
  }) {
    Object.assign(this)
    this.breeds = breeds
    this.id = id
    this.url = url
    this.width = width
    this.height = height
  }
}
