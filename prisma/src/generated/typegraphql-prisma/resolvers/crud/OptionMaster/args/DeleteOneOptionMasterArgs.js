"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneOptionMasterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterWhereUniqueInput_1 = require("../../../inputs/OptionMasterWhereUniqueInput");
let DeleteOneOptionMasterArgs = class DeleteOneOptionMasterArgs {
};
exports.DeleteOneOptionMasterArgs = DeleteOneOptionMasterArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], DeleteOneOptionMasterArgs.prototype, "where", void 0);
exports.DeleteOneOptionMasterArgs = DeleteOneOptionMasterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneOptionMasterArgs);
