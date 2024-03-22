"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SessionUncheckedCreateInput = class SessionUncheckedCreateInput {
};
exports.SessionUncheckedCreateInput = SessionUncheckedCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionUncheckedCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SessionUncheckedCreateInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SessionUncheckedCreateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SessionUncheckedCreateInput.prototype, "expires", void 0);
exports.SessionUncheckedCreateInput = SessionUncheckedCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUncheckedCreateInput", {})
], SessionUncheckedCreateInput);
