import { ApolloServer, gql } from 'apollo-server-micro'
import { users } from '../../data'

const typeDefs = gql`
  type Query {
    users: [User!]!
    user: User!
  }
  type User {
    name: String
    id: String
  }
`

const resolvers = {
  Query: {
    users(parent, args, context) {
      console.log(users);
      return users
    },
    user(parent, args, context) {
      return users[0]
    }
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })