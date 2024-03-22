"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneBankInformationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneBankInformationArgs_1 = require("./args/CreateOneBankInformationArgs");
const BankInformation_1 = require("../../../models/BankInformation");
const helpers_1 = require("../../../helpers");
let CreateOneBankInformationResolver = exports.CreateOneBankInformationResolver = class CreateOneBankInformationResolver {
    async createOneBankInformation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bankInformation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BankInformation_1.BankInformation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneBankInformationArgs_1.CreateOneBankInformationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneBankInformationResolver.prototype, "createOneBankInformation", null);
exports.CreateOneBankInformationResolver = CreateOneBankInformationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BankInformation_1.BankInformation)
], CreateOneBankInformationResolver);
