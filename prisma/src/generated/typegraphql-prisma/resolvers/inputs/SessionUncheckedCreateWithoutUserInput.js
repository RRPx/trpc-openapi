"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUncheckedCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SessionUncheckedCreateWithoutUserInput = class SessionUncheckedCreateWithoutUserInput {
};
exports.SessionUncheckedCreateWithoutUserInput = SessionUncheckedCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionUncheckedCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SessionUncheckedCreateWithoutUserInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SessionUncheckedCreateWithoutUserInput.prototype, "expires", void 0);
exports.SessionUncheckedCreateWithoutUserInput = SessionUncheckedCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUncheckedCreateWithoutUserInput", {})
], SessionUncheckedCreateWithoutUserInput);
