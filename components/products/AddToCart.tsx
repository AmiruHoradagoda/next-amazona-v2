"use client";
import useCartService from "@/lib/hooks/userCartStore";
import { OrderItem } from "@/lib/models/OrderModel";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AddToCart({ item }: { item: OrderItem }) {
//   const router = useRouter();
  const { items, increase, decrease } = useCartService();
  const [exsistItem, setExistItem] = useState<OrderItem | undefined>();
  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);
  const addToCartHandler = () => {
    increase(item);
  };
  return exsistItem ? (
    <div>
      <button
        className="btn"
        type="button"
        onClick={() => decrease(exsistItem)}
      >
        -
      </button>
      <span className="px-2">{exsistItem.qty}</span>
      <button
        className="btn"
        type="button"
        onClick={() => increase(exsistItem)}
      >
        +
      </button>
    </div>
  ) : (
    <button
      className="btn btn-primary w-full"
      type="button"
      onClick={addToCartHandler}
    >
      Add to cart
    </button>
  );
}
