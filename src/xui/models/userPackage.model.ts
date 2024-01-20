import 'reflect-metadata';

import { Field, ObjectType } from '@nestjs/graphql';

import { BaseModel } from '../../common/models/base.model';
import { BigNumberScalar } from '../../common/scalars/bigNumber';

@ObjectType()
export class UserPackage extends BaseModel {
  @Field()
  name: string;

  @Field()
  link: string;

  @Field(() => BigNumberScalar)
  remainingTraffic: bigint;

  @Field(() => BigNumberScalar)
  totalTraffic: bigint;

  @Field(() => BigNumberScalar)
  expiryTime: bigint;
}
