// @flow

import { makeExecutableSchema } from 'graphql-tools'
import Knex from 'knex'
import knexConfig from '../../knexfile'
import { isProd } from '../shared/config'

import Message from './models/message'

Message.knex(isProd ? knexConfig.production : knexConfig.development)

const resolvers = {
  Query: {
    messages: () => {
      return Message
        .query()
        .then((messages) => messages);
    }
  },
  Mutation: {
    addMessage: (_, { text }) => {
      return Message
        .query()
        .insert({ text })
        .then(message => {
          return message
        })
    }
  }
}

const schema = `
type Message {
  id: Int!
  text: String
}

# the schema allows the following query:
type Query {
  messages: [Message]
}

# this schema allows the following mutation:
type Mutation {
  addMessage (
    text: String
  ): Message
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
  mutation: Mutation
}
`

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
