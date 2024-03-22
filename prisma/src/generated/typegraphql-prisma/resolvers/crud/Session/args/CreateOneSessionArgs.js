"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionUncheckedCreateInput_1 = require("../../../inputs/SessionUncheckedCreateInput");
let CreateOneSessionArgs = class CreateOneSessionArgs {
};
exports.CreateOneSessionArgs = CreateOneSessionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUncheckedCreateInput_1.SessionUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUncheckedCreateInput_1.SessionUncheckedCreateInput)
], CreateOneSessionArgs.prototype, "data", void 0);
exports.CreateOneSessionArgs = CreateOneSessionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSessionArgs);
