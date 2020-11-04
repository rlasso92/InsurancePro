import log from 'loglevel'
import { AppContext } from 'src/context'
import { UsuarioCreateInput } from '../models/index'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { Usuario } from '../entities/index'

@Resolver()
export default class UsuarioResolver {
  @Query(() => [Usuario])
  usuarios(@Ctx() { prisma }: AppContext) {
    return prisma.usuario.findMany()
  }

  @Mutation(() => Usuario, { nullable: true })
  async agregarUsuario(
    @Arg('data')
    {
      nombre,
      apellido,
      edad,
      correo,
      perfil,
      departamento,
      rol,
    }: UsuarioCreateInput,
    @Ctx() { prisma }: AppContext,
  ) {
    try {
      const user = await prisma.usuario.create({
        data: { apellido, nombre, correo, edad, departamento, perfil, rol },
      })
      return user
    } catch (err) {
      log.error(err)
      return null
    }
  }
}
