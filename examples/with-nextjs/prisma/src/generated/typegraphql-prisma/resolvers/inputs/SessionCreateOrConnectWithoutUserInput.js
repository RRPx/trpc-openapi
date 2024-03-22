"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionUncheckedCreateWithoutUserInput_1 = require("../inputs/SessionUncheckedCreateWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionCreateOrConnectWithoutUserInput = exports.SessionCreateOrConnectWithoutUserInput = class SessionCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedCreateWithoutUserInput_1.SessionUncheckedCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUncheckedCreateWithoutUserInput_1.SessionUncheckedCreateWithoutUserInput)
], SessionCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.SessionCreateOrConnectWithoutUserInput = SessionCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionCreateOrConnectWithoutUserInput", {})
], SessionCreateOrConnectWithoutUserInput);
