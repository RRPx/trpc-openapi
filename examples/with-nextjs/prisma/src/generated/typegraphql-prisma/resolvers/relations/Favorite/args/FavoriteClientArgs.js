"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientWhereInput_1 = require("../../../inputs/ClientWhereInput");
let FavoriteClientArgs = exports.FavoriteClientArgs = class FavoriteClientArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], FavoriteClientArgs.prototype, "where", void 0);
exports.FavoriteClientArgs = FavoriteClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FavoriteClientArgs);
