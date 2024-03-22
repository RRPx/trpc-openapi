import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];
declare const crudResolversMap: {
    Example: typeof crudResolvers.ExampleCrudResolver;
    Account: typeof crudResolvers.AccountCrudResolver;
    Session: typeof crudResolvers.SessionCrudResolver;
    VerificationToken: typeof crudResolvers.VerificationTokenCrudResolver;
    UserRank: typeof crudResolvers.UserRankCrudResolver;
    CastInformation: typeof crudResolvers.CastInformationCrudResolver;
    User: typeof crudResolvers.UserCrudResolver;
    Cast: typeof crudResolvers.CastCrudResolver;
    Client: typeof crudResolvers.ClientCrudResolver;
    Address: typeof crudResolvers.AddressCrudResolver;
    Favorite: typeof crudResolvers.FavoriteCrudResolver;
    ShiftManagement: typeof crudResolvers.ShiftManagementCrudResolver;
    Review: typeof crudResolvers.ReviewCrudResolver;
    Reservation: typeof crudResolvers.ReservationCrudResolver;
    ChatRoom: typeof crudResolvers.ChatRoomCrudResolver;
    ChatMessage: typeof crudResolvers.ChatMessageCrudResolver;
    Inquiry: typeof crudResolvers.InquiryCrudResolver;
    Notification: typeof crudResolvers.NotificationCrudResolver;
    BankInformation: typeof crudResolvers.BankInformationCrudResolver;
    OptionMaster: typeof crudResolvers.OptionMasterCrudResolver;
};
type ResolverModelNames = keyof typeof crudResolversMap;
type ModelResolverActionNames<TModel extends ResolverModelNames> = keyof typeof crudResolversMap[TModel]["prototype"];
export type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>> & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
};
export type ResolversEnhanceMap = {
    [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};
export declare function applyResolversEnhanceMap(resolversEnhanceMap: ResolversEnhanceMap): void;
type ArgsTypesNames = keyof typeof argsTypes;
type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<keyof typeof argsTypes[TArgsType]["prototype"], number | symbol>;
type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<ArgFieldNames<TArgsType>>;
export type ArgConfig<TArgsType extends ArgsTypesNames> = {
    class?: ClassDecorator[];
    fields?: ArgFieldsConfig<TArgsType>;
};
export type ArgsTypesEnhanceMap = {
    [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};
export declare function applyArgsTypesEnhanceMap(argsTypesEnhanceMap: ArgsTypesEnhanceMap): void;
declare const relationResolversMap: {
    Account: typeof relationResolvers.AccountRelationsResolver;
    Session: typeof relationResolvers.SessionRelationsResolver;
    UserRank: typeof relationResolvers.UserRankRelationsResolver;
    CastInformation: typeof relationResolvers.CastInformationRelationsResolver;
    User: typeof relationResolvers.UserRelationsResolver;
    Cast: typeof relationResolvers.CastRelationsResolver;
    Client: typeof relationResolvers.ClientRelationsResolver;
    Address: typeof relationResolvers.AddressRelationsResolver;
    Favorite: typeof relationResolvers.FavoriteRelationsResolver;
    ShiftManagement: typeof relationResolvers.ShiftManagementRelationsResolver;
    Review: typeof relationResolvers.ReviewRelationsResolver;
    Reservation: typeof relationResolvers.ReservationRelationsResolver;
    ChatRoom: typeof relationResolvers.ChatRoomRelationsResolver;
    ChatMessage: typeof relationResolvers.ChatMessageRelationsResolver;
    Notification: typeof relationResolvers.NotificationRelationsResolver;
    BankInformation: typeof relationResolvers.BankInformationRelationsResolver;
    OptionMaster: typeof relationResolvers.OptionMasterRelationsResolver;
};
type RelationResolverModelNames = keyof typeof relationResolversMap;
type RelationResolverActionNames<TModel extends RelationResolverModelNames> = keyof typeof relationResolversMap[TModel]["prototype"];
export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames> = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>> & {
    _all?: MethodDecorator[];
};
export type RelationResolversEnhanceMap = {
    [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};
export declare function applyRelationResolversEnhanceMap(relationResolversEnhanceMap: RelationResolversEnhanceMap): void;
export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];
type FieldsConfig<TTypeKeys extends string = string> = Partial<Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>> & {
    _all?: PropertyDecorator[];
};
type ModelNames = keyof typeof models;
type ModelFieldNames<TModel extends ModelNames> = Exclude<keyof typeof models[TModel]["prototype"], number | symbol>;
type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<ModelFieldNames<TModel>>;
export type ModelConfig<TModel extends ModelNames> = {
    class?: ClassDecorator[];
    fields?: ModelFieldsConfig<TModel>;
};
export type ModelsEnhanceMap = {
    [TModel in ModelNames]?: ModelConfig<TModel>;
};
export declare function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap): void;
type OutputTypesNames = keyof typeof outputTypes;
type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<keyof typeof outputTypes[TOutput]["prototype"], number | symbol>;
type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<OutputTypeFieldNames<TOutput>>;
export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
    class?: ClassDecorator[];
    fields?: OutputTypeFieldsConfig<TOutput>;
};
export type OutputTypesEnhanceMap = {
    [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};
export declare function applyOutputTypesEnhanceMap(outputTypesEnhanceMap: OutputTypesEnhanceMap): void;
type InputTypesNames = keyof typeof inputTypes;
type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<keyof typeof inputTypes[TInput]["prototype"], number | symbol>;
type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<InputTypeFieldNames<TInput>>;
export type InputTypeConfig<TInput extends InputTypesNames> = {
    class?: ClassDecorator[];
    fields?: InputTypeFieldsConfig<TInput>;
};
export type InputTypesEnhanceMap = {
    [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};
export declare function applyInputTypesEnhanceMap(inputTypesEnhanceMap: InputTypesEnhanceMap): void;
export {};
