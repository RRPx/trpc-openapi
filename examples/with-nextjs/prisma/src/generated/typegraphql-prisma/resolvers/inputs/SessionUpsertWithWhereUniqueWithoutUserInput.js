"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionUncheckedCreateWithoutUserInput_1 = require("../inputs/SessionUncheckedCreateWithoutUserInput");
const SessionUncheckedUpdateWithoutUserInput_1 = require("../inputs/SessionUncheckedUpdateWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpsertWithWhereUniqueWithoutUserInput = exports.SessionUpsertWithWhereUniqueWithoutUserInput = class SessionUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedUpdateWithoutUserInput_1.SessionUncheckedUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUncheckedUpdateWithoutUserInput_1.SessionUncheckedUpdateWithoutUserInput)
], SessionUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedCreateWithoutUserInput_1.SessionUncheckedCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUncheckedCreateWithoutUserInput_1.SessionUncheckedCreateWithoutUserInput)
], SessionUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.SessionUpsertWithWhereUniqueWithoutUserInput = SessionUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUpsertWithWhereUniqueWithoutUserInput", {})
], SessionUpsertWithWhereUniqueWithoutUserInput);
