/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Naive DateTime` scalar type represents a naive date and time without
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string.
   */
  NaiveDateTime: any;
};

export type CreateItemPayload = {
  __typename?: 'CreateItemPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Item>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type CreateModelPayload = {
  __typename?: 'CreateModelPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Model>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type CreateTypePayload = {
  __typename?: 'CreateTypePayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Type>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type DeleteItemPayload = {
  __typename?: 'DeleteItemPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Item>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type DeleteModelPayload = {
  __typename?: 'DeleteModelPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Model>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type DeleteTypePayload = {
  __typename?: 'DeleteTypePayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Type>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  insertedAt?: Maybe<Scalars['NaiveDateTime']>;
  model: Model;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  type: Type;
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
};

export type Model = {
  __typename?: 'Model';
  id: Scalars['ID'];
  insertedAt?: Maybe<Scalars['NaiveDateTime']>;
  multiplier?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** create a new item */
  itemCreate?: Maybe<CreateItemPayload>;
  /** delete an item */
  itemDelete?: Maybe<DeleteItemPayload>;
  /** updates an item */
  itemUpdate?: Maybe<UpdateItemPayload>;
  /** create a new model */
  modelCreate?: Maybe<CreateModelPayload>;
  /** delete a model */
  modelDelete?: Maybe<DeleteModelPayload>;
  /** updates a model */
  modelUpdate?: Maybe<UpdateModelPayload>;
  signin?: Maybe<SigninPayload>;
  signup?: Maybe<SignupPayload>;
  /** create a new type */
  typeCreate?: Maybe<CreateTypePayload>;
  /** deletes a type */
  typeDelete?: Maybe<DeleteTypePayload>;
  /** updates a type */
  typeUpdate?: Maybe<UpdateTypePayload>;
};


export type RootMutationTypeItemCreateArgs = {
  modelId: Scalars['Int'];
  name: Scalars['String'];
  typeId: Scalars['Int'];
};


export type RootMutationTypeItemDeleteArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootMutationTypeItemUpdateArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeModelCreateArgs = {
  multiplier?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeModelDeleteArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootMutationTypeModelUpdateArgs = {
  id?: InputMaybe<Scalars['Int']>;
  multiplier?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeSigninArgs = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeSignupArgs = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeTypeCreateArgs = {
  indexPrice?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeTypeDeleteArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootMutationTypeTypeUpdateArgs = {
  id?: InputMaybe<Scalars['Int']>;
  indexPrice?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  hello?: Maybe<Scalars['String']>;
  /** fetch an item by id */
  itemById: Item;
  /** fetches a list of items */
  itemList?: Maybe<Array<Item>>;
  me?: Maybe<User>;
  /** fetch a model by id */
  modelById?: Maybe<Model>;
  /** fetches a list of models */
  modelList?: Maybe<Array<Model>>;
  /** fetch a type by id */
  typeById?: Maybe<Type>;
  /** fetch a list of types */
  typeList?: Maybe<Array<Type>>;
};


export type RootQueryTypeHelloArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeItemByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootQueryTypeModelByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootQueryTypeTypeByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SigninPayload = {
  __typename?: 'SigninPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<UserAuth>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type SignupPayload = {
  __typename?: 'SignupPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<UserAuth>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type Type = {
  __typename?: 'Type';
  id: Scalars['ID'];
  indexPrice?: Maybe<Scalars['Int']>;
  insertedAt?: Maybe<Scalars['NaiveDateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
};

export type UpdateItemPayload = {
  __typename?: 'UpdateItemPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Item>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type UpdateModelPayload = {
  __typename?: 'UpdateModelPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Model>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type UpdateTypePayload = {
  __typename?: 'UpdateTypePayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Type>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  credits?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  insertedAt?: Maybe<Scalars['NaiveDateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserAuth = {
  __typename?: 'UserAuth';
  token: Scalars['String'];
  user?: Maybe<User>;
};

/**
 * Validation messages are returned when mutation input does not meet the requirements.
 *   While client-side validation is highly recommended to provide the best User Experience,
 *   All inputs will always be validated server-side.
 *
 *   Some examples of validations are:
 *
 *   * Username must be at least 10 characters
 *   * Email field does not contain an email address
 *   * Birth Date is required
 *
 *   While GraphQL has support for required values, mutation data fields are always
 *   set to optional in our API. This allows 'required field' messages
 *   to be returned in the same manner as other validations. The only exceptions
 *   are id fields, which may be required to perform updates or deletes.
 */
export type ValidationMessage = {
  __typename?: 'ValidationMessage';
  /** A unique error code for the type of validation used. */
  code: Scalars['String'];
  /**
   * The input field that the error applies to. The field can be used to
   * identify which field the error message should be displayed next to in the
   * presentation layer.
   *
   * If there are multiple errors to display for a field, multiple validation
   * messages will be in the result.
   *
   * This field may be null in cases where an error cannot be applied to a specific field.
   */
  field?: Maybe<Scalars['String']>;
  /**
   * A friendly error message, appropriate for display to the end user.
   *
   * The message is interpolated to include the appropriate variables.
   *
   * Example: `Username must be at least 10 characters`
   *
   * This message may change without notice, so we do not recommend you match against the text.
   * Instead, use the *code* field for matching.
   */
  message?: Maybe<Scalars['String']>;
  /** A list of substitutions to be applied to a validation message template */
  options?: Maybe<Array<Maybe<ValidationOption>>>;
  /**
   * A template used to generate the error message, with placeholders for option substiution.
   *
   * Example: `Username must be at least {count} characters`
   *
   * This message may change without notice, so we do not recommend you match against the text.
   * Instead, use the *code* field for matching.
   */
  template?: Maybe<Scalars['String']>;
};

export type ValidationOption = {
  __typename?: 'ValidationOption';
  /** The name of a variable to be subsituted in a validation message template */
  key: Scalars['String'];
  /** The value of a variable to be substituted in a validation message template */
  value: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'RootMutationType', signin?: { __typename?: 'SigninPayload', successful: boolean, result?: { __typename?: 'UserAuth', token: string, user?: { __typename?: 'User', id: string, name: string } | null } | null, messages?: Array<{ __typename?: 'ValidationMessage', message?: string | null } | null> | null } | null };

export type ItemListQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemListQuery = { __typename?: 'RootQueryType', itemList?: Array<{ __typename?: 'Item', id: string, name?: string | null, price?: number | null, model: { __typename?: 'Model', id: string }, type: { __typename?: 'Type', id: string } }> | null };

export type ItemByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ItemByIdQuery = { __typename?: 'RootQueryType', itemById: { __typename?: 'Item', id: string, name?: string | null, price?: number | null, model: { __typename?: 'Model', id: string, name?: string | null, multiplier?: number | null }, type: { __typename?: 'Type', id: string, name?: string | null, indexPrice?: number | null } } };

export type ModelListQueryVariables = Exact<{ [key: string]: never; }>;


export type ModelListQuery = { __typename?: 'RootQueryType', modelList?: Array<{ __typename?: 'Model', id: string, name?: string | null }> | null };

export type TypeListQueryVariables = Exact<{ [key: string]: never; }>;


export type TypeListQuery = { __typename?: 'RootQueryType', typeList?: Array<{ __typename?: 'Type', id: string, name?: string | null }> | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'RootQueryType', me?: { __typename?: 'User', id: string, name: string, username?: string | null, credits?: number | null } | null };

export type SignupMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'RootMutationType', signup?: { __typename?: 'SignupPayload', result?: { __typename?: 'UserAuth', token: string, user?: { __typename?: 'User', id: string, name: string } | null } | null, messages?: Array<{ __typename?: 'ValidationMessage', message?: string | null } | null> | null } | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"successful"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ItemListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ItemList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<ItemListQuery, ItemListQueryVariables>;
export const ItemByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ItemById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"multiplier"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"indexPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<ItemByIdQuery, ItemByIdQueryVariables>;
export const ModelListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ModelList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modelList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ModelListQuery, ModelListQueryVariables>;
export const TypeListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TypeList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TypeListQuery, TypeListQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"credits"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;