import { Field, InputType } from 'type-graphql'

@InputType()
export default class UsuarioCreateInput {
  @Field(() => String)
  nombre!: string
  @Field(() => String)
  apellido!: string
  @Field(() => String)
  edad!: string
  @Field(() => String)
  correo!: string
  @Field(() => String)
  perfil!: string
  @Field(() => String)
  departamento!: string
  @Field(() => String)
  rol!: string
}
