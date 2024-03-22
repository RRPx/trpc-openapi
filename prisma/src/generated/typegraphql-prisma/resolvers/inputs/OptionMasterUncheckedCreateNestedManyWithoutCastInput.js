"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUncheckedCreateNestedManyWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterCreateOrConnectWithoutCastInput_1 = require("../inputs/OptionMasterCreateOrConnectWithoutCastInput");
const OptionMasterCreateWithoutCastInput_1 = require("../inputs/OptionMasterCreateWithoutCastInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterUncheckedCreateNestedManyWithoutCastInput = class OptionMasterUncheckedCreateNestedManyWithoutCastInput {
};
exports.OptionMasterUncheckedCreateNestedManyWithoutCastInput = OptionMasterUncheckedCreateNestedManyWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateWithoutCastInput_1.OptionMasterCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedCreateNestedManyWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateOrConnectWithoutCastInput_1.OptionMasterCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedCreateNestedManyWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedCreateNestedManyWithoutCastInput.prototype, "connect", void 0);
exports.OptionMasterUncheckedCreateNestedManyWithoutCastInput = OptionMasterUncheckedCreateNestedManyWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUncheckedCreateNestedManyWithoutCastInput", {})
], OptionMasterUncheckedCreateNestedManyWithoutCastInput);
