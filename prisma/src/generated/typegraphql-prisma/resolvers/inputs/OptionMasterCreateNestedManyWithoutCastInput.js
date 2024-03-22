"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCreateNestedManyWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterCreateOrConnectWithoutCastInput_1 = require("../inputs/OptionMasterCreateOrConnectWithoutCastInput");
const OptionMasterCreateWithoutCastInput_1 = require("../inputs/OptionMasterCreateWithoutCastInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterCreateNestedManyWithoutCastInput = class OptionMasterCreateNestedManyWithoutCastInput {
};
exports.OptionMasterCreateNestedManyWithoutCastInput = OptionMasterCreateNestedManyWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateWithoutCastInput_1.OptionMasterCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterCreateNestedManyWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateOrConnectWithoutCastInput_1.OptionMasterCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterCreateNestedManyWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterCreateNestedManyWithoutCastInput.prototype, "connect", void 0);
exports.OptionMasterCreateNestedManyWithoutCastInput = OptionMasterCreateNestedManyWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterCreateNestedManyWithoutCastInput", {})
], OptionMasterCreateNestedManyWithoutCastInput);
