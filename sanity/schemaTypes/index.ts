import { type SchemaTypeDefinition } from 'sanity'
import { customerType } from './customerType'
import { productType } from './productType'
import { categoryType } from './categoryType'
import { orderType } from './orderType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, customerType,  productType, orderType],
}
