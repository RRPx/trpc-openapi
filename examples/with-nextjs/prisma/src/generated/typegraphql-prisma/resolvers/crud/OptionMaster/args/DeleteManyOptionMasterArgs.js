"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOptionMasterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterWhereInput_1 = require("../../../inputs/OptionMasterWhereInput");
let DeleteManyOptionMasterArgs = exports.DeleteManyOptionMasterArgs = class DeleteManyOptionMasterArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], DeleteManyOptionMasterArgs.prototype, "where", void 0);
exports.DeleteManyOptionMasterArgs = DeleteManyOptionMasterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyOptionMasterArgs);
