"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOptionMasterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterUncheckedUpdateManyInput_1 = require("../../../inputs/OptionMasterUncheckedUpdateManyInput");
const OptionMasterWhereInput_1 = require("../../../inputs/OptionMasterWhereInput");
let UpdateManyOptionMasterArgs = exports.UpdateManyOptionMasterArgs = class UpdateManyOptionMasterArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateManyInput_1.OptionMasterUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateManyInput_1.OptionMasterUncheckedUpdateManyInput)
], UpdateManyOptionMasterArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], UpdateManyOptionMasterArgs.prototype, "where", void 0);
exports.UpdateManyOptionMasterArgs = UpdateManyOptionMasterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyOptionMasterArgs);
