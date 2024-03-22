"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOptionMasterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterWhereUniqueInput_1 = require("../../../inputs/OptionMasterWhereUniqueInput");
let FindUniqueOptionMasterArgs = class FindUniqueOptionMasterArgs {
};
exports.FindUniqueOptionMasterArgs = FindUniqueOptionMasterArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], FindUniqueOptionMasterArgs.prototype, "where", void 0);
exports.FindUniqueOptionMasterArgs = FindUniqueOptionMasterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueOptionMasterArgs);
