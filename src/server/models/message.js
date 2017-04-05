// @flow

import { Model } from 'objection'

class Message extends Model {
  static get tableName() {
    return 'Message'
  }
}

export default Message
