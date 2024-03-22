"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionScalarWhereInput_1 = require("../inputs/SessionScalarWhereInput");
const SessionUncheckedUpdateManyWithoutUserInput_1 = require("../inputs/SessionUncheckedUpdateManyWithoutUserInput");
let SessionUpdateManyWithWhereWithoutUserInput = class SessionUpdateManyWithWhereWithoutUserInput {
};
exports.SessionUpdateManyWithWhereWithoutUserInput = SessionUpdateManyWithWhereWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionScalarWhereInput_1.SessionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionScalarWhereInput_1.SessionScalarWhereInput)
], SessionUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedUpdateManyWithoutUserInput_1.SessionUncheckedUpdateManyWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUncheckedUpdateManyWithoutUserInput_1.SessionUncheckedUpdateManyWithoutUserInput)
], SessionUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
exports.SessionUpdateManyWithWhereWithoutUserInput = SessionUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUpdateManyWithWhereWithoutUserInput", {})
], SessionUpdateManyWithWhereWithoutUserInput);
