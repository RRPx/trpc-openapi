"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOptionMasterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterCreateManyInput_1 = require("../../../inputs/OptionMasterCreateManyInput");
let CreateManyOptionMasterArgs = class CreateManyOptionMasterArgs {
};
exports.CreateManyOptionMasterArgs = CreateManyOptionMasterArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterCreateManyInput_1.OptionMasterCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyOptionMasterArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyOptionMasterArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyOptionMasterArgs = CreateManyOptionMasterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyOptionMasterArgs);
