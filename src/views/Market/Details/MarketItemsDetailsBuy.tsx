import { useMutation } from '@apollo/client';
import React from 'react';
import { BuyButton } from '../../../components/buyButton';
import { graphql } from '../../../gql';

const USER_BUY = graphql(/* GraphQL */ `
  mutation UserBuy($itemId: Int!) {
    userBuy(itemId: $itemId) {
      result {
        id
        name
      }
    }
  }
`);

const MarketItemsDetailsBuy = () => {
  return <BuyButton>Buy</BuyButton>;
};

export default MarketItemsDetailsBuy;
