import { Item } from '../gql/graphql';
import { mapModelToColor } from './itemCard';
import SetItemForSale from '../views/Profile/Inventory/SetItemForSale';
import RefundItem from '../views/Profile/Inventory/RefundItem';

export const MyItemCard = ({ item }: { item: Item | undefined }) => {
  return (
    <div
      className={
        'flex flex-col gap-2 justify-between border-2 rounded-md shadow-md py-2 my-1 mx-2 px-2  ' +
        mapModelToColor(item?.model?.name?.toString())
      }
    >
      <h1 className="font-semibold"> {item?.name?.toUpperCase()}</h1>

      <p>Price: {item?.price?.toFixed(2)}</p>
      <SetItemForSale item={item} />
      <RefundItem itemId={Number(item?.id)} />
    </div>
  );
};
