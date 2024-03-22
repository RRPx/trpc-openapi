"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Category;
(function (Category) {
    Category["NEWCAST"] = "NEWCAST";
    Category["WARNING"] = "WARNING";
    Category["IMPORTANT"] = "IMPORTANT";
    Category["RESERVATION_COMPLETED"] = "RESERVATION_COMPLETED";
    Category["RESERVATION_REJECTED"] = "RESERVATION_REJECTED";
})(Category || (exports.Category = Category = {}));
TypeGraphQL.registerEnumType(Category, {
    name: "Category",
    description: undefined,
});
