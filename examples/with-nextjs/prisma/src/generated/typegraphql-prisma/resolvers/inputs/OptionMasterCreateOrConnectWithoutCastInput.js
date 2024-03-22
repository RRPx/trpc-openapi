"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCreateOrConnectWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterUncheckedCreateWithoutCastInput_1 = require("../inputs/OptionMasterUncheckedCreateWithoutCastInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterCreateOrConnectWithoutCastInput = exports.OptionMasterCreateOrConnectWithoutCastInput = class OptionMasterCreateOrConnectWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], OptionMasterCreateOrConnectWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedCreateWithoutCastInput_1.OptionMasterUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedCreateWithoutCastInput_1.OptionMasterUncheckedCreateWithoutCastInput)
], OptionMasterCreateOrConnectWithoutCastInput.prototype, "create", void 0);
exports.OptionMasterCreateOrConnectWithoutCastInput = OptionMasterCreateOrConnectWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterCreateOrConnectWithoutCastInput", {})
], OptionMasterCreateOrConnectWithoutCastInput);
