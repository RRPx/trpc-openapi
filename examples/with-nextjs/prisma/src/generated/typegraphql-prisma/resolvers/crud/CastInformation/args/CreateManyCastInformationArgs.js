"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCastInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationCreateManyInput_1 = require("../../../inputs/CastInformationCreateManyInput");
let CreateManyCastInformationArgs = exports.CreateManyCastInformationArgs = class CreateManyCastInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastInformationCreateManyInput_1.CastInformationCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCastInformationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCastInformationArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyCastInformationArgs = CreateManyCastInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCastInformationArgs);
