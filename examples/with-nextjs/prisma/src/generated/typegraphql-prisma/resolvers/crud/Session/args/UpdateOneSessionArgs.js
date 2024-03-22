"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionUncheckedUpdateInput_1 = require("../../../inputs/SessionUncheckedUpdateInput");
const SessionWhereUniqueInput_1 = require("../../../inputs/SessionWhereUniqueInput");
let UpdateOneSessionArgs = exports.UpdateOneSessionArgs = class UpdateOneSessionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedUpdateInput_1.SessionUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUncheckedUpdateInput_1.SessionUncheckedUpdateInput)
], UpdateOneSessionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], UpdateOneSessionArgs.prototype, "where", void 0);
exports.UpdateOneSessionArgs = UpdateOneSessionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSessionArgs);
