"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionUncheckedUpdateWithoutUserInput_1 = require("../inputs/SessionUncheckedUpdateWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpdateWithWhereUniqueWithoutUserInput = class SessionUpdateWithWhereUniqueWithoutUserInput {
};
exports.SessionUpdateWithWhereUniqueWithoutUserInput = SessionUpdateWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedUpdateWithoutUserInput_1.SessionUncheckedUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUncheckedUpdateWithoutUserInput_1.SessionUncheckedUpdateWithoutUserInput)
], SessionUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.SessionUpdateWithWhereUniqueWithoutUserInput = SessionUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUpdateWithWhereUniqueWithoutUserInput", {})
], SessionUpdateWithWhereUniqueWithoutUserInput);
