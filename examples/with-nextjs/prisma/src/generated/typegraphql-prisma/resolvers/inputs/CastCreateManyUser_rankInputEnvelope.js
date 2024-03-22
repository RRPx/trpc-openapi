"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateManyUser_rankInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateManyUser_rankInput_1 = require("../inputs/CastCreateManyUser_rankInput");
let CastCreateManyUser_rankInputEnvelope = exports.CastCreateManyUser_rankInputEnvelope = class CastCreateManyUser_rankInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastCreateManyUser_rankInput_1.CastCreateManyUser_rankInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CastCreateManyUser_rankInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastCreateManyUser_rankInputEnvelope.prototype, "skipDuplicates", void 0);
exports.CastCreateManyUser_rankInputEnvelope = CastCreateManyUser_rankInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateManyUser_rankInputEnvelope", {})
], CastCreateManyUser_rankInputEnvelope);
