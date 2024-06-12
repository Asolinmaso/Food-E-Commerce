
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <Link href="/cart">
        <div className="relative flex items-center p-2 bg-blue-600 text-white rounded-full shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path fill="green" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
</svg>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center h-6 w-6 text-xs font-bold bg-red-500 text-white rounded-full">
              {totalItems}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CartIcon;
