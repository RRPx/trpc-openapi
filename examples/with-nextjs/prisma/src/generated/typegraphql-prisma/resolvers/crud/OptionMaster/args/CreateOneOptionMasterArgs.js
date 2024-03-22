"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneOptionMasterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterUncheckedCreateInput_1 = require("../../../inputs/OptionMasterUncheckedCreateInput");
let CreateOneOptionMasterArgs = exports.CreateOneOptionMasterArgs = class CreateOneOptionMasterArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterUncheckedCreateInput_1.OptionMasterUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OptionMasterUncheckedCreateInput_1.OptionMasterUncheckedCreateInput)
], CreateOneOptionMasterArgs.prototype, "data", void 0);
exports.CreateOneOptionMasterArgs = CreateOneOptionMasterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneOptionMasterArgs);
