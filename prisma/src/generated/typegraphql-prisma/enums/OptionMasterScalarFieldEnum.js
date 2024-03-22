"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OptionMasterScalarFieldEnum;
(function (OptionMasterScalarFieldEnum) {
    OptionMasterScalarFieldEnum["id"] = "id";
    OptionMasterScalarFieldEnum["option_menu"] = "option_menu";
    OptionMasterScalarFieldEnum["fee"] = "fee";
    OptionMasterScalarFieldEnum["is_display"] = "is_display";
    OptionMasterScalarFieldEnum["created_at"] = "created_at";
    OptionMasterScalarFieldEnum["updated_at"] = "updated_at";
})(OptionMasterScalarFieldEnum || (exports.OptionMasterScalarFieldEnum = OptionMasterScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OptionMasterScalarFieldEnum, {
    name: "OptionMasterScalarFieldEnum",
    description: undefined,
});
