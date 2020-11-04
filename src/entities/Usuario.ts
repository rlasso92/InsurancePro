import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export default class Usuario {
  @Field(() => ID)
  readonly id!: string
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
