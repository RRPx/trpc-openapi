"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformation_1 = require("../../../models/BankInformation");
const Cast_1 = require("../../../models/Cast");
const CastInformation_1 = require("../../../models/CastInformation");
const Favorite_1 = require("../../../models/Favorite");
const Notification_1 = require("../../../models/Notification");
const OptionMaster_1 = require("../../../models/OptionMaster");
const Reservation_1 = require("../../../models/Reservation");
const Review_1 = require("../../../models/Review");
const ShiftManagement_1 = require("../../../models/ShiftManagement");
const User_1 = require("../../../models/User");
const UserRank_1 = require("../../../models/UserRank");
const CastBank_informationArgs_1 = require("./args/CastBank_informationArgs");
const CastCast_informationArgs_1 = require("./args/CastCast_informationArgs");
const CastFavoriteArgs_1 = require("./args/CastFavoriteArgs");
const CastNotificationArgs_1 = require("./args/CastNotificationArgs");
const CastOption_masterArgs_1 = require("./args/CastOption_masterArgs");
const CastReservationArgs_1 = require("./args/CastReservationArgs");
const CastReviewArgs_1 = require("./args/CastReviewArgs");
const CastShift_managementArgs_1 = require("./args/CastShift_managementArgs");
const CastUserArgs_1 = require("./args/CastUserArgs");
const helpers_1 = require("../../../helpers");
let CastRelationsResolver = exports.CastRelationsResolver = class CastRelationsResolver {
    async user(cast, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            where: {
                id: cast.id,
            },
        }).user({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async user_rank(cast, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            where: {
                id: cast.id,
            },
        }).user_rank({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async favorite(cast, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            where: {
                id: cast.id,
            },
        }).favorite({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async notification(cast, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            where: {
                id: cast.id,
            },
        }).notification({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async option_master(cast, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            where: {
                id: cast.id,
            },
        }).option_master({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async shift_management(cast, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            where: {
                id: cast.id,
            },
        }).shift_management({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async review(cast, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            where: {
                id: cast.id,
            },
        }).review({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async cast_information(cast, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            where: {
                id: cast.id,
            },
        }).cast_information({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async reservation(cast, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            where: {
                id: cast.id,
            },
        }).reservation({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bank_information(cast, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cast.findUniqueOrThrow({
            where: {
                id: cast.id,
            },
        }).bank_information({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cast_1.Cast, Object, Object, CastUserArgs_1.CastUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => UserRank_1.UserRank, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cast_1.Cast, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CastRelationsResolver.prototype, "user_rank", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Favorite_1.Favorite], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cast_1.Cast, Object, Object, CastFavoriteArgs_1.CastFavoriteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastRelationsResolver.prototype, "favorite", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Notification_1.Notification], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cast_1.Cast, Object, Object, CastNotificationArgs_1.CastNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastRelationsResolver.prototype, "notification", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OptionMaster_1.OptionMaster], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cast_1.Cast, Object, Object, CastOption_masterArgs_1.CastOption_masterArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastRelationsResolver.prototype, "option_master", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ShiftManagement_1.ShiftManagement], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cast_1.Cast, Object, Object, CastShift_managementArgs_1.CastShift_managementArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastRelationsResolver.prototype, "shift_management", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Review_1.Review], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cast_1.Cast, Object, Object, CastReviewArgs_1.CastReviewArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastRelationsResolver.prototype, "review", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => CastInformation_1.CastInformation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cast_1.Cast, Object, Object, CastCast_informationArgs_1.CastCast_informationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastRelationsResolver.prototype, "cast_information", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reservation_1.Reservation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cast_1.Cast, Object, Object, CastReservationArgs_1.CastReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastRelationsResolver.prototype, "reservation", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [BankInformation_1.BankInformation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cast_1.Cast, Object, Object, CastBank_informationArgs_1.CastBank_informationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CastRelationsResolver.prototype, "bank_information", null);
exports.CastRelationsResolver = CastRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cast_1.Cast)
], CastRelationsResolver);
