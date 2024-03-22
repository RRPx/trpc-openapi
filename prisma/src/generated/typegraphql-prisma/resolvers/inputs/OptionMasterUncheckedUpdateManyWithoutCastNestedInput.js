"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUncheckedUpdateManyWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterCreateOrConnectWithoutCastInput_1 = require("../inputs/OptionMasterCreateOrConnectWithoutCastInput");
const OptionMasterCreateWithoutCastInput_1 = require("../inputs/OptionMasterCreateWithoutCastInput");
const OptionMasterScalarWhereInput_1 = require("../inputs/OptionMasterScalarWhereInput");
const OptionMasterUpdateManyWithWhereWithoutCastInput_1 = require("../inputs/OptionMasterUpdateManyWithWhereWithoutCastInput");
const OptionMasterUpdateWithWhereUniqueWithoutCastInput_1 = require("../inputs/OptionMasterUpdateWithWhereUniqueWithoutCastInput");
const OptionMasterUpsertWithWhereUniqueWithoutCastInput_1 = require("../inputs/OptionMasterUpsertWithWhereUniqueWithoutCastInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterUncheckedUpdateManyWithoutCastNestedInput = class OptionMasterUncheckedUpdateManyWithoutCastNestedInput {
};
exports.OptionMasterUncheckedUpdateManyWithoutCastNestedInput = OptionMasterUncheckedUpdateManyWithoutCastNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateWithoutCastInput_1.OptionMasterCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateOrConnectWithoutCastInput_1.OptionMasterCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterUpsertWithWhereUniqueWithoutCastInput_1.OptionMasterUpsertWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterUpdateWithWhereUniqueWithoutCastInput_1.OptionMasterUpdateWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterUpdateManyWithWhereWithoutCastInput_1.OptionMasterUpdateManyWithWhereWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterScalarWhereInput_1.OptionMasterScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput.prototype, "deleteMany", void 0);
exports.OptionMasterUncheckedUpdateManyWithoutCastNestedInput = OptionMasterUncheckedUpdateManyWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUncheckedUpdateManyWithoutCastNestedInput", {})
], OptionMasterUncheckedUpdateManyWithoutCastNestedInput);
