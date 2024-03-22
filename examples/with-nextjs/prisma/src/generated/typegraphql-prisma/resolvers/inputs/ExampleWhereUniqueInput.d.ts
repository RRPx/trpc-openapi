import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExampleWhereInput } from "../inputs/ExampleWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class ExampleWhereUniqueInput {
    id?: number | undefined;
    AND?: ExampleWhereInput[] | undefined;
    OR?: ExampleWhereInput[] | undefined;
    NOT?: ExampleWhereInput[] | undefined;
    name?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
