import { buildSchema } from 'type-graphql'
import { UsuarioTestResolver, UsuarioResolver } from './resolvers/index'

export const createSchema = async () => {
  const schema = buildSchema({
    resolvers: [UsuarioTestResolver, UsuarioResolver],
  })
  return schema
}
