import { ChatMessageUncheckedCreateInput } from "../../../inputs/ChatMessageUncheckedCreateInput";
import { ChatMessageUncheckedUpdateInput } from "../../../inputs/ChatMessageUncheckedUpdateInput";
import { ChatMessageWhereUniqueInput } from "../../../inputs/ChatMessageWhereUniqueInput";
export declare class UpsertOneChatMessageArgs {
    where: ChatMessageWhereUniqueInput;
    create: ChatMessageUncheckedCreateInput;
    update: ChatMessageUncheckedUpdateInput;
}
