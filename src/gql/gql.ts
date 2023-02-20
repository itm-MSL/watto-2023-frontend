/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation UserBuy($itemId: Int!) {\n    userBuy(itemId: $itemId) {\n      successful\n      messages {\n        message\n      }\n      result {\n        buyer {\n          name\n        }\n        seller {\n          name\n        }\n        item {\n          name\n        }\n      }\n    }\n  }\n": types.UserBuyDocument,
    "\n  query ModelList {\n    modelList {\n      id\n      name\n    }\n  }\n": types.ModelListDocument,
    "\n  query TypeList {\n    typeList {\n      id\n      name\n    }\n  }\n": types.TypeListDocument,
    "\n  mutation Login($username: String!, $password: String!) {\n    signin(username: $username, password: $password) {\n      successful\n      result {\n        token\n        user {\n          id\n          name\n        }\n      }\n      messages {\n        message\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation ItemCreate($name: String!, $typeId: Int!, $modelId: Int!) {\n    itemCreate(name: $name, typeId: $typeId, modelId: $modelId) {\n      successful\n      result {\n        id\n        name\n        insertedAt\n      }\n    }\n  }\n": types.ItemCreateDocument,
    "\n  query ItemList {\n    itemsExcludingOwnedByUser {\n      id\n      name\n      model {\n        id\n        name\n      }\n      type {\n        id\n      }\n      price\n      user {\n        id\n        name\n      }\n    }\n  }\n": types.ItemListDocument,
    "\n  mutation modelCreate($name: String!, $multiplier: Float!) {\n    modelCreate(name: $name, multiplier: $multiplier) {\n      successful\n      result {\n        id\n        name\n        multiplier\n        insertedAt\n      }\n    }\n  }\n": types.ModelCreateDocument,
    "\n  query ModelById($id: Int!) {\n    modelById(id: $id) {\n      id\n      name\n      multiplier\n    }\n  }\n": types.ModelByIdDocument,
    "\n  mutation TypeCreate($name: String!, $indexPrice: Int!) {\n    typeCreate(name: $name, indexPrice: $indexPrice) {\n      successful\n      result {\n        id\n        name\n        indexPrice\n        insertedAt\n      }\n    }\n  }\n": types.TypeCreateDocument,
    "\n  query TypeById($id: Int!) {\n    typeById(id: $id) {\n      id\n      name\n      indexPrice\n    }\n  }\n": types.TypeByIdDocument,
    "\n  query Me {\n    me {\n      id\n      name\n      username\n      credits\n    }\n  }\n": types.MeDocument,
    "\n  query ItemsByUserId($userId: Int!) {\n    itemsByUserId(userId: $userId) {\n      id\n      name\n      model {\n        id\n        name\n        multiplier\n      }\n      type {\n        id\n        name\n        indexPrice\n      }\n      price\n      updatedAt\n      forSale\n    }\n  }\n": types.ItemsByUserIdDocument,
    "\n  mutation Refund($itemId: Int!) {\n    refund(itemId: $itemId) {\n      successful\n    }\n  }\n": types.RefundDocument,
    "\n  mutation ItemSellable($itemId: Int!) {\n    itemSellable(id: $itemId) {\n      successful\n    }\n  }\n": types.ItemSellableDocument,
    "\n  mutation UserCreditsUpdate($userId: Int!, $credits: Float!) {\n    userCreditsUpdate(userId: $userId, credits: $credits) {\n      successful\n      result {\n        id\n        credits\n      }\n    }\n  }\n": types.UserCreditsUpdateDocument,
    "\n  mutation Signup(\n    $username: String!\n    $password: String!\n    $name: String!\n    $credits: Float!\n  ) {\n    signup(\n      username: $username\n      password: $password\n      name: $name\n      credits: $credits\n    ) {\n      result {\n        token\n        user {\n          id\n          name\n        }\n      }\n      messages {\n        message\n      }\n    }\n  }\n": types.SignupDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UserBuy($itemId: Int!) {\n    userBuy(itemId: $itemId) {\n      successful\n      messages {\n        message\n      }\n      result {\n        buyer {\n          name\n        }\n        seller {\n          name\n        }\n        item {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UserBuy($itemId: Int!) {\n    userBuy(itemId: $itemId) {\n      successful\n      messages {\n        message\n      }\n      result {\n        buyer {\n          name\n        }\n        seller {\n          name\n        }\n        item {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ModelList {\n    modelList {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query ModelList {\n    modelList {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TypeList {\n    typeList {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query TypeList {\n    typeList {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($username: String!, $password: String!) {\n    signin(username: $username, password: $password) {\n      successful\n      result {\n        token\n        user {\n          id\n          name\n        }\n      }\n      messages {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($username: String!, $password: String!) {\n    signin(username: $username, password: $password) {\n      successful\n      result {\n        token\n        user {\n          id\n          name\n        }\n      }\n      messages {\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ItemCreate($name: String!, $typeId: Int!, $modelId: Int!) {\n    itemCreate(name: $name, typeId: $typeId, modelId: $modelId) {\n      successful\n      result {\n        id\n        name\n        insertedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation ItemCreate($name: String!, $typeId: Int!, $modelId: Int!) {\n    itemCreate(name: $name, typeId: $typeId, modelId: $modelId) {\n      successful\n      result {\n        id\n        name\n        insertedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ItemList {\n    itemsExcludingOwnedByUser {\n      id\n      name\n      model {\n        id\n        name\n      }\n      type {\n        id\n      }\n      price\n      user {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query ItemList {\n    itemsExcludingOwnedByUser {\n      id\n      name\n      model {\n        id\n        name\n      }\n      type {\n        id\n      }\n      price\n      user {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation modelCreate($name: String!, $multiplier: Float!) {\n    modelCreate(name: $name, multiplier: $multiplier) {\n      successful\n      result {\n        id\n        name\n        multiplier\n        insertedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation modelCreate($name: String!, $multiplier: Float!) {\n    modelCreate(name: $name, multiplier: $multiplier) {\n      successful\n      result {\n        id\n        name\n        multiplier\n        insertedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ModelById($id: Int!) {\n    modelById(id: $id) {\n      id\n      name\n      multiplier\n    }\n  }\n"): (typeof documents)["\n  query ModelById($id: Int!) {\n    modelById(id: $id) {\n      id\n      name\n      multiplier\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation TypeCreate($name: String!, $indexPrice: Int!) {\n    typeCreate(name: $name, indexPrice: $indexPrice) {\n      successful\n      result {\n        id\n        name\n        indexPrice\n        insertedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation TypeCreate($name: String!, $indexPrice: Int!) {\n    typeCreate(name: $name, indexPrice: $indexPrice) {\n      successful\n      result {\n        id\n        name\n        indexPrice\n        insertedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TypeById($id: Int!) {\n    typeById(id: $id) {\n      id\n      name\n      indexPrice\n    }\n  }\n"): (typeof documents)["\n  query TypeById($id: Int!) {\n    typeById(id: $id) {\n      id\n      name\n      indexPrice\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      id\n      name\n      username\n      credits\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      name\n      username\n      credits\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ItemsByUserId($userId: Int!) {\n    itemsByUserId(userId: $userId) {\n      id\n      name\n      model {\n        id\n        name\n        multiplier\n      }\n      type {\n        id\n        name\n        indexPrice\n      }\n      price\n      updatedAt\n      forSale\n    }\n  }\n"): (typeof documents)["\n  query ItemsByUserId($userId: Int!) {\n    itemsByUserId(userId: $userId) {\n      id\n      name\n      model {\n        id\n        name\n        multiplier\n      }\n      type {\n        id\n        name\n        indexPrice\n      }\n      price\n      updatedAt\n      forSale\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Refund($itemId: Int!) {\n    refund(itemId: $itemId) {\n      successful\n    }\n  }\n"): (typeof documents)["\n  mutation Refund($itemId: Int!) {\n    refund(itemId: $itemId) {\n      successful\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ItemSellable($itemId: Int!) {\n    itemSellable(id: $itemId) {\n      successful\n    }\n  }\n"): (typeof documents)["\n  mutation ItemSellable($itemId: Int!) {\n    itemSellable(id: $itemId) {\n      successful\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UserCreditsUpdate($userId: Int!, $credits: Float!) {\n    userCreditsUpdate(userId: $userId, credits: $credits) {\n      successful\n      result {\n        id\n        credits\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UserCreditsUpdate($userId: Int!, $credits: Float!) {\n    userCreditsUpdate(userId: $userId, credits: $credits) {\n      successful\n      result {\n        id\n        credits\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Signup(\n    $username: String!\n    $password: String!\n    $name: String!\n    $credits: Float!\n  ) {\n    signup(\n      username: $username\n      password: $password\n      name: $name\n      credits: $credits\n    ) {\n      result {\n        token\n        user {\n          id\n          name\n        }\n      }\n      messages {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Signup(\n    $username: String!\n    $password: String!\n    $name: String!\n    $credits: Float!\n  ) {\n    signup(\n      username: $username\n      password: $password\n      name: $name\n      credits: $credits\n    ) {\n      result {\n        token\n        user {\n          id\n          name\n        }\n      }\n      messages {\n        message\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;