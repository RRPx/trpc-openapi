import type { GraphQLResolveInfo } from "graphql";
import { AggregateExampleArgs } from "./args/AggregateExampleArgs";
import { CreateManyExampleArgs } from "./args/CreateManyExampleArgs";
import { CreateOneExampleArgs } from "./args/CreateOneExampleArgs";
import { DeleteManyExampleArgs } from "./args/DeleteManyExampleArgs";
import { DeleteOneExampleArgs } from "./args/DeleteOneExampleArgs";
import { FindFirstExampleArgs } from "./args/FindFirstExampleArgs";
import { FindFirstExampleOrThrowArgs } from "./args/FindFirstExampleOrThrowArgs";
import { FindManyExampleArgs } from "./args/FindManyExampleArgs";
import { FindUniqueExampleArgs } from "./args/FindUniqueExampleArgs";
import { FindUniqueExampleOrThrowArgs } from "./args/FindUniqueExampleOrThrowArgs";
import { GroupByExampleArgs } from "./args/GroupByExampleArgs";
import { UpdateManyExampleArgs } from "./args/UpdateManyExampleArgs";
import { UpdateOneExampleArgs } from "./args/UpdateOneExampleArgs";
import { UpsertOneExampleArgs } from "./args/UpsertOneExampleArgs";
import { Example } from "../../../models/Example";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateExample } from "../../outputs/AggregateExample";
import { ExampleGroupBy } from "../../outputs/ExampleGroupBy";
export declare class ExampleCrudResolver {
    aggregateExample(ctx: any, info: GraphQLResolveInfo, args: AggregateExampleArgs): Promise<AggregateExample>;
    createManyExample(ctx: any, info: GraphQLResolveInfo, args: CreateManyExampleArgs): Promise<AffectedRowsOutput>;
    createOneExample(ctx: any, info: GraphQLResolveInfo, args: CreateOneExampleArgs): Promise<Example>;
    deleteManyExample(ctx: any, info: GraphQLResolveInfo, args: DeleteManyExampleArgs): Promise<AffectedRowsOutput>;
    deleteOneExample(ctx: any, info: GraphQLResolveInfo, args: DeleteOneExampleArgs): Promise<Example | null>;
    findFirstExample(ctx: any, info: GraphQLResolveInfo, args: FindFirstExampleArgs): Promise<Example | null>;
    findFirstExampleOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstExampleOrThrowArgs): Promise<Example | null>;
    examples(ctx: any, info: GraphQLResolveInfo, args: FindManyExampleArgs): Promise<Example[]>;
    example(ctx: any, info: GraphQLResolveInfo, args: FindUniqueExampleArgs): Promise<Example | null>;
    getExample(ctx: any, info: GraphQLResolveInfo, args: FindUniqueExampleOrThrowArgs): Promise<Example | null>;
    groupByExample(ctx: any, info: GraphQLResolveInfo, args: GroupByExampleArgs): Promise<ExampleGroupBy[]>;
    updateManyExample(ctx: any, info: GraphQLResolveInfo, args: UpdateManyExampleArgs): Promise<AffectedRowsOutput>;
    updateOneExample(ctx: any, info: GraphQLResolveInfo, args: UpdateOneExampleArgs): Promise<Example | null>;
    upsertOneExample(ctx: any, info: GraphQLResolveInfo, args: UpsertOneExampleArgs): Promise<Example>;
}
