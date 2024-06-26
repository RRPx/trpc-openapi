import type { GraphQLResolveInfo } from "graphql";
import { AggregateBankInformationArgs } from "./args/AggregateBankInformationArgs";
import { CreateManyBankInformationArgs } from "./args/CreateManyBankInformationArgs";
import { CreateOneBankInformationArgs } from "./args/CreateOneBankInformationArgs";
import { DeleteManyBankInformationArgs } from "./args/DeleteManyBankInformationArgs";
import { DeleteOneBankInformationArgs } from "./args/DeleteOneBankInformationArgs";
import { FindFirstBankInformationArgs } from "./args/FindFirstBankInformationArgs";
import { FindFirstBankInformationOrThrowArgs } from "./args/FindFirstBankInformationOrThrowArgs";
import { FindManyBankInformationArgs } from "./args/FindManyBankInformationArgs";
import { FindUniqueBankInformationArgs } from "./args/FindUniqueBankInformationArgs";
import { FindUniqueBankInformationOrThrowArgs } from "./args/FindUniqueBankInformationOrThrowArgs";
import { GroupByBankInformationArgs } from "./args/GroupByBankInformationArgs";
import { UpdateManyBankInformationArgs } from "./args/UpdateManyBankInformationArgs";
import { UpdateOneBankInformationArgs } from "./args/UpdateOneBankInformationArgs";
import { UpsertOneBankInformationArgs } from "./args/UpsertOneBankInformationArgs";
import { BankInformation } from "../../../models/BankInformation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBankInformation } from "../../outputs/AggregateBankInformation";
import { BankInformationGroupBy } from "../../outputs/BankInformationGroupBy";
export declare class BankInformationCrudResolver {
    aggregateBankInformation(ctx: any, info: GraphQLResolveInfo, args: AggregateBankInformationArgs): Promise<AggregateBankInformation>;
    createManyBankInformation(ctx: any, info: GraphQLResolveInfo, args: CreateManyBankInformationArgs): Promise<AffectedRowsOutput>;
    createOneBankInformation(ctx: any, info: GraphQLResolveInfo, args: CreateOneBankInformationArgs): Promise<BankInformation>;
    deleteManyBankInformation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBankInformationArgs): Promise<AffectedRowsOutput>;
    deleteOneBankInformation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBankInformationArgs): Promise<BankInformation | null>;
    findFirstBankInformation(ctx: any, info: GraphQLResolveInfo, args: FindFirstBankInformationArgs): Promise<BankInformation | null>;
    findFirstBankInformationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBankInformationOrThrowArgs): Promise<BankInformation | null>;
    bankInformations(ctx: any, info: GraphQLResolveInfo, args: FindManyBankInformationArgs): Promise<BankInformation[]>;
    bankInformation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBankInformationArgs): Promise<BankInformation | null>;
    getBankInformation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBankInformationOrThrowArgs): Promise<BankInformation | null>;
    groupByBankInformation(ctx: any, info: GraphQLResolveInfo, args: GroupByBankInformationArgs): Promise<BankInformationGroupBy[]>;
    updateManyBankInformation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBankInformationArgs): Promise<AffectedRowsOutput>;
    updateOneBankInformation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBankInformationArgs): Promise<BankInformation | null>;
    upsertOneBankInformation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBankInformationArgs): Promise<BankInformation>;
}
