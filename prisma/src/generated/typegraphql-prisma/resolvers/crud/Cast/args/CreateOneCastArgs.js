"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateInput_1 = require("../../../inputs/CastUncheckedCreateInput");
let CreateOneCastArgs = class CreateOneCastArgs {
};
exports.CreateOneCastArgs = CreateOneCastArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateInput_1.CastUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateInput_1.CastUncheckedCreateInput)
], CreateOneCastArgs.prototype, "data", void 0);
exports.CreateOneCastArgs = CreateOneCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCastArgs);
