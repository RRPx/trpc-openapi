"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOptionMasterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterUncheckedUpdateInput_1 = require("../../../inputs/OptionMasterUncheckedUpdateInput");
const OptionMasterWhereUniqueInput_1 = require("../../../inputs/OptionMasterWhereUniqueInput");
let UpdateOneOptionMasterArgs = class UpdateOneOptionMasterArgs {
};
exports.UpdateOneOptionMasterArgs = UpdateOneOptionMasterArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateInput_1.OptionMasterUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateInput_1.OptionMasterUncheckedUpdateInput)
], UpdateOneOptionMasterArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], UpdateOneOptionMasterArgs.prototype, "where", void 0);
exports.UpdateOneOptionMasterArgs = UpdateOneOptionMasterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneOptionMasterArgs);
