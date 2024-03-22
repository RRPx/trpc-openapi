"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionUncheckedUpdateManyInput_1 = require("../../../inputs/SessionUncheckedUpdateManyInput");
const SessionWhereInput_1 = require("../../../inputs/SessionWhereInput");
let UpdateManySessionArgs = exports.UpdateManySessionArgs = class UpdateManySessionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedUpdateManyInput_1.SessionUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUncheckedUpdateManyInput_1.SessionUncheckedUpdateManyInput)
], UpdateManySessionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereInput_1.SessionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionWhereInput_1.SessionWhereInput)
], UpdateManySessionArgs.prototype, "where", void 0);
exports.UpdateManySessionArgs = UpdateManySessionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySessionArgs);
