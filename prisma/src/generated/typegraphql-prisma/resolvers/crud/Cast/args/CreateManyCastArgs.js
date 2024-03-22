"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateManyInput_1 = require("../../../inputs/CastCreateManyInput");
let CreateManyCastArgs = class CreateManyCastArgs {
};
exports.CreateManyCastArgs = CreateManyCastArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastCreateManyInput_1.CastCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCastArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCastArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyCastArgs = CreateManyCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCastArgs);
