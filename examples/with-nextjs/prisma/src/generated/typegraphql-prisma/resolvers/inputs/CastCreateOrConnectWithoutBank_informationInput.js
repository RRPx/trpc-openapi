"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateOrConnectWithoutBank_informationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutBank_informationInput_1 = require("../inputs/CastUncheckedCreateWithoutBank_informationInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateOrConnectWithoutBank_informationInput = exports.CastCreateOrConnectWithoutBank_informationInput = class CastCreateOrConnectWithoutBank_informationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateOrConnectWithoutBank_informationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutBank_informationInput_1.CastUncheckedCreateWithoutBank_informationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutBank_informationInput_1.CastUncheckedCreateWithoutBank_informationInput)
], CastCreateOrConnectWithoutBank_informationInput.prototype, "create", void 0);
exports.CastCreateOrConnectWithoutBank_informationInput = CastCreateOrConnectWithoutBank_informationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateOrConnectWithoutBank_informationInput", {})
], CastCreateOrConnectWithoutBank_informationInput);
