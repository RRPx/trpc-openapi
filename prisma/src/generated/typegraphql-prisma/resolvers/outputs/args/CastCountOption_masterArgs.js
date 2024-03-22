"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCountOption_masterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterWhereInput_1 = require("../../inputs/OptionMasterWhereInput");
let CastCountOption_masterArgs = class CastCountOption_masterArgs {
};
exports.CastCountOption_masterArgs = CastCountOption_masterArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], CastCountOption_masterArgs.prototype, "where", void 0);
exports.CastCountOption_masterArgs = CastCountOption_masterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CastCountOption_masterArgs);
