"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCountBank_informationArgs_1 = require("./args/CastCountBank_informationArgs");
const CastCountFavoriteArgs_1 = require("./args/CastCountFavoriteArgs");
const CastCountNotificationArgs_1 = require("./args/CastCountNotificationArgs");
const CastCountOption_masterArgs_1 = require("./args/CastCountOption_masterArgs");
const CastCountReservationArgs_1 = require("./args/CastCountReservationArgs");
const CastCountReviewArgs_1 = require("./args/CastCountReviewArgs");
const CastCountShift_managementArgs_1 = require("./args/CastCountShift_managementArgs");
let CastCount = class CastCount {
    getFavorite(root, args) {
        return root.favorite;
    }
    getNotification(root, args) {
        return root.notification;
    }
    getOption_master(root, args) {
        return root.option_master;
    }
    getShift_management(root, args) {
        return root.shift_management;
    }
    getReview(root, args) {
        return root.review;
    }
    getReservation(root, args) {
        return root.reservation;
    }
    getBank_information(root, args) {
        return root.bank_information;
    }
};
exports.CastCount = CastCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "favorite",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CastCount, CastCountFavoriteArgs_1.CastCountFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CastCount.prototype, "getFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "notification",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CastCount, CastCountNotificationArgs_1.CastCountNotificationArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CastCount.prototype, "getNotification", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "option_master",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CastCount, CastCountOption_masterArgs_1.CastCountOption_masterArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CastCount.prototype, "getOption_master", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "shift_management",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CastCount, CastCountShift_managementArgs_1.CastCountShift_managementArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CastCount.prototype, "getShift_management", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "review",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CastCount, CastCountReviewArgs_1.CastCountReviewArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CastCount.prototype, "getReview", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "reservation",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CastCount, CastCountReservationArgs_1.CastCountReservationArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CastCount.prototype, "getReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "bank_information",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CastCount, CastCountBank_informationArgs_1.CastCountBank_informationArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CastCount.prototype, "getBank_information", null);
exports.CastCount = CastCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CastCount", {})
], CastCount);
