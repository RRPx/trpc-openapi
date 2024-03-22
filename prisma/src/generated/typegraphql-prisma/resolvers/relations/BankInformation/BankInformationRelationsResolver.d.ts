import type { GraphQLResolveInfo } from "graphql";
import { BankInformation } from "../../../models/BankInformation";
import { Cast } from "../../../models/Cast";
import { BankInformationCastArgs } from "./args/BankInformationCastArgs";
export declare class BankInformationRelationsResolver {
    cast(bankInformation: BankInformation, ctx: any, info: GraphQLResolveInfo, args: BankInformationCastArgs): Promise<Cast | null>;
}
