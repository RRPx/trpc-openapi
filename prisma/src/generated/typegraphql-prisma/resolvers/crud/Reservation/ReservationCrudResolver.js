"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateReservationArgs_1 = require("./args/AggregateReservationArgs");
const CreateManyReservationArgs_1 = require("./args/CreateManyReservationArgs");
const CreateOneReservationArgs_1 = require("./args/CreateOneReservationArgs");
const DeleteManyReservationArgs_1 = require("./args/DeleteManyReservationArgs");
const DeleteOneReservationArgs_1 = require("./args/DeleteOneReservationArgs");
const FindFirstReservationArgs_1 = require("./args/FindFirstReservationArgs");
const FindFirstReservationOrThrowArgs_1 = require("./args/FindFirstReservationOrThrowArgs");
const FindManyReservationArgs_1 = require("./args/FindManyReservationArgs");
const FindUniqueReservationArgs_1 = require("./args/FindUniqueReservationArgs");
const FindUniqueReservationOrThrowArgs_1 = require("./args/FindUniqueReservationOrThrowArgs");
const GroupByReservationArgs_1 = require("./args/GroupByReservationArgs");
const UpdateManyReservationArgs_1 = require("./args/UpdateManyReservationArgs");
const UpdateOneReservationArgs_1 = require("./args/UpdateOneReservationArgs");
const UpsertOneReservationArgs_1 = require("./args/UpsertOneReservationArgs");
const helpers_1 = require("../../../helpers");
const Reservation_1 = require("../../../models/Reservation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReservation_1 = require("../../outputs/AggregateReservation");
const ReservationGroupBy_1 = require("../../outputs/ReservationGroupBy");
let ReservationCrudResolver = class ReservationCrudResolver {
    async aggregateReservation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReservationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async reservations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async reservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByReservation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneReservation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reservation.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.ReservationCrudResolver = ReservationCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReservation_1.AggregateReservation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReservationArgs_1.AggregateReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "aggregateReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReservationArgs_1.CreateManyReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "createManyReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reservation_1.Reservation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneReservationArgs_1.CreateOneReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "createOneReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReservationArgs_1.DeleteManyReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "deleteManyReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneReservationArgs_1.DeleteOneReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "deleteOneReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReservationArgs_1.FindFirstReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "findFirstReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReservationOrThrowArgs_1.FindFirstReservationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "findFirstReservationOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reservation_1.Reservation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReservationArgs_1.FindManyReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "reservations", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReservationArgs_1.FindUniqueReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "reservation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReservationOrThrowArgs_1.FindUniqueReservationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "getReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReservationGroupBy_1.ReservationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReservationArgs_1.GroupByReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "groupByReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReservationArgs_1.UpdateManyReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "updateManyReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reservation_1.Reservation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneReservationArgs_1.UpdateOneReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "updateOneReservation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reservation_1.Reservation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneReservationArgs_1.UpsertOneReservationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservationCrudResolver.prototype, "upsertOneReservation", null);
exports.ReservationCrudResolver = ReservationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reservation_1.Reservation)
], ReservationCrudResolver);
