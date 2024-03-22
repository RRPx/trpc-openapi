"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUpdateManyWithWhereWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterScalarWhereInput_1 = require("../inputs/OptionMasterScalarWhereInput");
const OptionMasterUncheckedUpdateManyWithoutCastInput_1 = require("../inputs/OptionMasterUncheckedUpdateManyWithoutCastInput");
let OptionMasterUpdateManyWithWhereWithoutCastInput = class OptionMasterUpdateManyWithWhereWithoutCastInput {
};
exports.OptionMasterUpdateManyWithWhereWithoutCastInput = OptionMasterUpdateManyWithWhereWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterScalarWhereInput_1.OptionMasterScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterScalarWhereInput_1.OptionMasterScalarWhereInput)
], OptionMasterUpdateManyWithWhereWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateManyWithoutCastInput_1.OptionMasterUncheckedUpdateManyWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateManyWithoutCastInput_1.OptionMasterUncheckedUpdateManyWithoutCastInput)
], OptionMasterUpdateManyWithWhereWithoutCastInput.prototype, "data", void 0);
exports.OptionMasterUpdateManyWithWhereWithoutCastInput = OptionMasterUpdateManyWithWhereWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUpdateManyWithWhereWithoutCastInput", {})
], OptionMasterUpdateManyWithWhereWithoutCastInput);
