import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ExampleWhereInput {
    AND?: ExampleWhereInput[] | undefined;
    OR?: ExampleWhereInput[] | undefined;
    NOT?: ExampleWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
