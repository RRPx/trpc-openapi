import { ChatMessageCreateManyChat_roomInputEnvelope } from "../inputs/ChatMessageCreateManyChat_roomInputEnvelope";
import { ChatMessageCreateOrConnectWithoutChat_roomInput } from "../inputs/ChatMessageCreateOrConnectWithoutChat_roomInput";
import { ChatMessageCreateWithoutChat_roomInput } from "../inputs/ChatMessageCreateWithoutChat_roomInput";
import { ChatMessageScalarWhereInput } from "../inputs/ChatMessageScalarWhereInput";
import { ChatMessageUpdateManyWithWhereWithoutChat_roomInput } from "../inputs/ChatMessageUpdateManyWithWhereWithoutChat_roomInput";
import { ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput } from "../inputs/ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput";
import { ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput } from "../inputs/ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";
export declare class ChatMessageUpdateManyWithoutChat_roomNestedInput {
    create?: ChatMessageCreateWithoutChat_roomInput[] | undefined;
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChat_roomInput[] | undefined;
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChat_roomInput[] | undefined;
    createMany?: ChatMessageCreateManyChat_roomInputEnvelope | undefined;
    set?: ChatMessageWhereUniqueInput[] | undefined;
    disconnect?: ChatMessageWhereUniqueInput[] | undefined;
    delete?: ChatMessageWhereUniqueInput[] | undefined;
    connect?: ChatMessageWhereUniqueInput[] | undefined;
    update?: ChatMessageUpdateWithWhereUniqueWithoutChat_roomInput[] | undefined;
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChat_roomInput[] | undefined;
    deleteMany?: ChatMessageScalarWhereInput[] | undefined;
}
