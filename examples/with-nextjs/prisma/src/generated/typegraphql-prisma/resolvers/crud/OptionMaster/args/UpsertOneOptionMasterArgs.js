"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneOptionMasterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterUncheckedCreateInput_1 = require("../../../inputs/OptionMasterUncheckedCreateInput");
const OptionMasterUncheckedUpdateInput_1 = require("../../../inputs/OptionMasterUncheckedUpdateInput");
const OptionMasterWhereUniqueInput_1 = require("../../../inputs/OptionMasterWhereUniqueInput");
let UpsertOneOptionMasterArgs = exports.UpsertOneOptionMasterArgs = class UpsertOneOptionMasterArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], UpsertOneOptionMasterArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedCreateInput_1.OptionMasterUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedCreateInput_1.OptionMasterUncheckedCreateInput)
], UpsertOneOptionMasterArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedUpdateInput_1.OptionMasterUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedUpdateInput_1.OptionMasterUncheckedUpdateInput)
], UpsertOneOptionMasterArgs.prototype, "update", void 0);
exports.UpsertOneOptionMasterArgs = UpsertOneOptionMasterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneOptionMasterArgs);
