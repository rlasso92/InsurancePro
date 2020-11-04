import { Resolver, Query, Arg, Ctx } from 'type-graphql'
import { AppContext } from '../context'

@Resolver()
export default class UsuarioTestResolver {
  @Query(() => String)
  usuario(@Arg('nombre') nombre: string) {
    return `hello ${nombre}`
  }

  //This is an encoder    password with argon2
  @Query(() => String, { nullable: true })
  hash(@Arg('plain') plain: string, @Ctx() { hs }: AppContext) {
    return hs.hash(plain)
  }

  //This is an encoder password verifier
  @Query(() => Boolean)
  check(
    @Arg('hashed') hashed: string,
    @Arg('plain') plain: string,
    @Ctx() { hs }: AppContext,
  ) {
    return hs.check(hashed, plain)
  }
}
