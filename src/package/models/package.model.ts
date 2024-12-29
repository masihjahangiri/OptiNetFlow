import 'reflect-metadata';

import { Field, Float, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { PackageCategory } from '@prisma/client';

import { BaseModel } from '../../common/models/base.model';

registerEnumType(PackageCategory, {
  name: 'PackageCategory',
  description: 'Package Category',
});

@ObjectType()
export class Package extends BaseModel {
  @Field(() => Float)
  traffic: number;

  @Field(() => Int)
  expirationDays: number;

  @Field(() => Float)
  price: number;

  @Field(() => Float, { nullable: true })
  discountedPrice?: number;

  @Field(() => Int)
  userCount: number;

  @Field(() => PackageCategory)
  category: PackageCategory;

  @Field(() => String, { nullable: true })
  categoryFa?: string;
}
