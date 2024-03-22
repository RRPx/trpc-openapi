import { ExampleOrderByWithRelationInput } from "../../../inputs/ExampleOrderByWithRelationInput";
import { ExampleWhereInput } from "../../../inputs/ExampleWhereInput";
import { ExampleWhereUniqueInput } from "../../../inputs/ExampleWhereUniqueInput";
export declare class AggregateExampleArgs {
    where?: ExampleWhereInput | undefined;
    orderBy?: ExampleOrderByWithRelationInput[] | undefined;
    cursor?: ExampleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
