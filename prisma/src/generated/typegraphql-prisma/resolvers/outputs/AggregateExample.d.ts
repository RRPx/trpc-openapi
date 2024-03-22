import { ExampleAvgAggregate } from "../outputs/ExampleAvgAggregate";
import { ExampleCountAggregate } from "../outputs/ExampleCountAggregate";
import { ExampleMaxAggregate } from "../outputs/ExampleMaxAggregate";
import { ExampleMinAggregate } from "../outputs/ExampleMinAggregate";
import { ExampleSumAggregate } from "../outputs/ExampleSumAggregate";
export declare class AggregateExample {
    _count: ExampleCountAggregate | null;
    _avg: ExampleAvgAggregate | null;
    _sum: ExampleSumAggregate | null;
    _min: ExampleMinAggregate | null;
    _max: ExampleMaxAggregate | null;
}
