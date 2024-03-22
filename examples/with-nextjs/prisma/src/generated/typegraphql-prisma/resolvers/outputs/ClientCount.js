"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCountFavoriteArgs_1 = require("./args/ClientCountFavoriteArgs");
const ClientCountNotificationArgs_1 = require("./args/ClientCountNotificationArgs");
const ClientCountReservationArgs_1 = require("./args/ClientCountReservationArgs");
const ClientCountReviewArgs_1 = require("./args/ClientCountReviewArgs");
let ClientCount = exports.ClientCount = class ClientCount {
    getFavorite(root, args) {
        return root.favorite;
    }
    getReservation(root, args) {
        return root.reservation;
    }
    getReview(root, args) {
        return root.review;
    }
    getNotification(root, args) {
        return root.notification;
    }
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "favorite",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ClientCount, ClientCountFavoriteArgs_1.ClientCountFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ClientCount.prototype, "getFavorite", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "reservation",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ClientCount, ClientCountReservationArgs_1.ClientCountReservationArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ClientCount.prototype, "getReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "review",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ClientCount, ClientCountReviewArgs_1.ClientCountReviewArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ClientCount.prototype, "getReview", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "notification",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ClientCount, ClientCountNotificationArgs_1.ClientCountNotificationArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ClientCount.prototype, "getNotification", null);
exports.ClientCount = ClientCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ClientCount", {})
], ClientCount);
