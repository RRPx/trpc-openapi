"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUpdateWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterUncheckedUpdateWithoutCastInput_1 = require("../inputs/OptionMasterUncheckedUpdateWithoutCastInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterUpdateWithWhereUniqueWithoutCastInput = class OptionMasterUpdateWithWhereUniqueWithoutCastInput {
};
exports.OptionMasterUpdateWithWhereUniqueWithoutCastInput = OptionMasterUpdateWithWhereUniqueWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], OptionMasterUpdateWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateWithoutCastInput_1.OptionMasterUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateWithoutCastInput_1.OptionMasterUncheckedUpdateWithoutCastInput)
], OptionMasterUpdateWithWhereUniqueWithoutCastInput.prototype, "data", void 0);
exports.OptionMasterUpdateWithWhereUniqueWithoutCastInput = OptionMasterUpdateWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUpdateWithWhereUniqueWithoutCastInput", {})
], OptionMasterUpdateWithWhereUniqueWithoutCastInput);
