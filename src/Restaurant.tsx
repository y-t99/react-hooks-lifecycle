import consola from "consola";
import { useLayoutEffect, useRef, useState } from "react";

function Restaurant() {
  const [order, setOrder] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    consola.info("The trigger reason: fires before the browser repaints the screen.")
    if (!order && menuRef.current) {
      menuRef.current.style.backgroundColor = '#f0f0f0';
      consola.info("Menu background color updated");
    }
  }, [order]);

  const handleOrder = (dish: string) => {
    setOrder(dish);
    if (menuRef.current) {
      menuRef.current.style.backgroundColor = '#E0FFFF';
    }
  };

  if (order) {
    consola.info("The trigger reason: The component’s (or one of its ancestors’) state has been updated.");
    consola.box("React preparing the order in the kitchen...", order);
    return (
      <div>
        <p>The waiter has placed the order on the table.</p>
      </div>
    )
  } else {
    consola.info("The trigger reason: It’s the component’s initial render.");
    consola.box("The waiter perparing the menu on the table for customer...");
    return (
      <div ref={menuRef}>
        <h2>Menu</h2>
        <button onClick={() => handleOrder("Pizza")}>Order Pizza</button>
        <button onClick={() => handleOrder("Burger")}>Order Burger</button>
        <button onClick={() => handleOrder("Salad")}>Order Salad</button>
      </div>
    );
  }
}

export default Restaurant;