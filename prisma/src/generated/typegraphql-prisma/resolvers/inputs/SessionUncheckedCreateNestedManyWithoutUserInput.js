"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUncheckedCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateManyUserInputEnvelope_1 = require("../inputs/SessionCreateManyUserInputEnvelope");
const SessionCreateOrConnectWithoutUserInput_1 = require("../inputs/SessionCreateOrConnectWithoutUserInput");
const SessionCreateWithoutUserInput_1 = require("../inputs/SessionCreateWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUncheckedCreateNestedManyWithoutUserInput = class SessionUncheckedCreateNestedManyWithoutUserInput {
};
exports.SessionUncheckedCreateNestedManyWithoutUserInput = SessionUncheckedCreateNestedManyWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SessionCreateWithoutUserInput_1.SessionCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionUncheckedCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SessionCreateOrConnectWithoutUserInput_1.SessionCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionUncheckedCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateManyUserInputEnvelope_1.SessionCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateManyUserInputEnvelope_1.SessionCreateManyUserInputEnvelope)
], SessionUncheckedCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionUncheckedCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.SessionUncheckedCreateNestedManyWithoutUserInput = SessionUncheckedCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUncheckedCreateNestedManyWithoutUserInput", {})
], SessionUncheckedCreateNestedManyWithoutUserInput);
