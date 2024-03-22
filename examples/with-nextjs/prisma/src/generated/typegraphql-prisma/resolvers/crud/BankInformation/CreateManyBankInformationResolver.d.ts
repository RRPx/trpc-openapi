import type { GraphQLResolveInfo } from "graphql";
import { CreateManyBankInformationArgs } from "./args/CreateManyBankInformationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBankInformationResolver {
    createManyBankInformation(ctx: any, info: GraphQLResolveInfo, args: CreateManyBankInformationArgs): Promise<AffectedRowsOutput>;
}
