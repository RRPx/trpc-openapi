"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUpsertWithWhereUniqueWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterUncheckedCreateWithoutCastInput_1 = require("../inputs/OptionMasterUncheckedCreateWithoutCastInput");
const OptionMasterUncheckedUpdateWithoutCastInput_1 = require("../inputs/OptionMasterUncheckedUpdateWithoutCastInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterUpsertWithWhereUniqueWithoutCastInput = exports.OptionMasterUpsertWithWhereUniqueWithoutCastInput = class OptionMasterUpsertWithWhereUniqueWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], OptionMasterUpsertWithWhereUniqueWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateWithoutCastInput_1.OptionMasterUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateWithoutCastInput_1.OptionMasterUncheckedUpdateWithoutCastInput)
], OptionMasterUpsertWithWhereUniqueWithoutCastInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedCreateWithoutCastInput_1.OptionMasterUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedCreateWithoutCastInput_1.OptionMasterUncheckedCreateWithoutCastInput)
], OptionMasterUpsertWithWhereUniqueWithoutCastInput.prototype, "create", void 0);
exports.OptionMasterUpsertWithWhereUniqueWithoutCastInput = OptionMasterUpsertWithWhereUniqueWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUpsertWithWhereUniqueWithoutCastInput", {})
], OptionMasterUpsertWithWhereUniqueWithoutCastInput);
