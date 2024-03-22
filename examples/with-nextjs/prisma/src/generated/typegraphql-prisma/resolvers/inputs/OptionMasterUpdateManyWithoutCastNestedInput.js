"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterUpdateManyWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterCreateOrConnectWithoutCastInput_1 = require("../inputs/OptionMasterCreateOrConnectWithoutCastInput");
const OptionMasterCreateWithoutCastInput_1 = require("../inputs/OptionMasterCreateWithoutCastInput");
const OptionMasterScalarWhereInput_1 = require("../inputs/OptionMasterScalarWhereInput");
const OptionMasterUpdateManyWithWhereWithoutCastInput_1 = require("../inputs/OptionMasterUpdateManyWithWhereWithoutCastInput");
const OptionMasterUpdateWithWhereUniqueWithoutCastInput_1 = require("../inputs/OptionMasterUpdateWithWhereUniqueWithoutCastInput");
const OptionMasterUpsertWithWhereUniqueWithoutCastInput_1 = require("../inputs/OptionMasterUpsertWithWhereUniqueWithoutCastInput");
const OptionMasterWhereUniqueInput_1 = require("../inputs/OptionMasterWhereUniqueInput");
let OptionMasterUpdateManyWithoutCastNestedInput = exports.OptionMasterUpdateManyWithoutCastNestedInput = class OptionMasterUpdateManyWithoutCastNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateWithoutCastInput_1.OptionMasterCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateOrConnectWithoutCastInput_1.OptionMasterCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterUpsertWithWhereUniqueWithoutCastInput_1.OptionMasterUpsertWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutCastNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterUpdateWithWhereUniqueWithoutCastInput_1.OptionMasterUpdateWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutCastNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterUpdateManyWithWhereWithoutCastInput_1.OptionMasterUpdateManyWithWhereWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutCastNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterScalarWhereInput_1.OptionMasterScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterUpdateManyWithoutCastNestedInput.prototype, "deleteMany", void 0);
exports.OptionMasterUpdateManyWithoutCastNestedInput = OptionMasterUpdateManyWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterUpdateManyWithoutCastNestedInput", {})
], OptionMasterUpdateManyWithoutCastNestedInput);
