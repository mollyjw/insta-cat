import { Time } from "@angular/common"

export class Favorite {
  id: string
  image_id: string
  sub_id: string
  created_at: string

  constructor ({
    id = '',
    image_id = '',
    sub_id = '',
    created_at = ''
  }) {
    Object.assign(this)
    this.id = id
    this.image_id = image_id
    this.sub_id = sub_id
    this.created_at = created_at
  }
}
