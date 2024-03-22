"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionUncheckedCreateInput_1 = require("../../../inputs/SessionUncheckedCreateInput");
const SessionUncheckedUpdateInput_1 = require("../../../inputs/SessionUncheckedUpdateInput");
const SessionWhereUniqueInput_1 = require("../../../inputs/SessionWhereUniqueInput");
let UpsertOneSessionArgs = class UpsertOneSessionArgs {
};
exports.UpsertOneSessionArgs = UpsertOneSessionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], UpsertOneSessionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedCreateInput_1.SessionUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUncheckedCreateInput_1.SessionUncheckedCreateInput)
], UpsertOneSessionArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedUpdateInput_1.SessionUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUncheckedUpdateInput_1.SessionUncheckedUpdateInput)
], UpsertOneSessionArgs.prototype, "update", void 0);
exports.UpsertOneSessionArgs = UpsertOneSessionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSessionArgs);
