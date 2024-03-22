"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyChatMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatMessageCreateManyInput_1 = require("../../../inputs/ChatMessageCreateManyInput");
let CreateManyChatMessageArgs = exports.CreateManyChatMessageArgs = class CreateManyChatMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatMessageCreateManyInput_1.ChatMessageCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyChatMessageArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyChatMessageArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyChatMessageArgs = CreateManyChatMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyChatMessageArgs);
