"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CupNumber = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CupNumber;
(function (CupNumber) {
    CupNumber["ACUP"] = "ACUP";
    CupNumber["BCUP"] = "BCUP";
    CupNumber["CCUP"] = "CCUP";
    CupNumber["DCUP"] = "DCUP";
    CupNumber["ECUP"] = "ECUP";
    CupNumber["FCUP"] = "FCUP";
    CupNumber["GCUP"] = "GCUP";
    CupNumber["HCUP"] = "HCUP";
    CupNumber["OTHER"] = "OTHER";
    CupNumber["SECRET"] = "SECRET";
})(CupNumber || (exports.CupNumber = CupNumber = {}));
TypeGraphQL.registerEnumType(CupNumber, {
    name: "CupNumber",
    description: undefined,
});
