"use client"
import { useState } from 'react';
import FilterSearchBar from '../components/FilterSearchBar';
import ItemList from '../components/ItemList';

const items = [
  { id: 1, name: 'Burger 1', image: 'chicken_burger', description: 'Delicious burger', quantity: 1 },
  { id: 2, name: 'Burger 2', image: 'burger', description: 'Yummy burger', quantity: 1 },
  { id: 3, name: 'Burger 3', image: 'burger', description: 'Tasty burger', quantity: 1 },
  { id: 4, name: 'Burger 4', image: 'burger', description: 'Amazing burger', quantity: 1 },
  { id: 5, name: 'Pizza 1', image: 'pizza', description: 'Delicious pizza', quantity: 1 },
  { id: 6, name: 'Pizza 2', image: 'pizza', description: 'Yummy pizza', quantity: 1 },
  { id: 7, name: 'Pizza 3', image: 'pizza', description: 'Tasty pizza', quantity: 1 },
  { id: 8, name: 'Drink 1', image: 'drink', description: 'Refreshing drink', quantity: 1 },
  { id: 9, name: 'Drink 2', image: 'drink', description: 'Cool drink', quantity: 1 },
  { id: 10, name: 'Drink 3', image: 'drink', description: 'Icy drink', quantity: 1 },
  { id: 11, name: 'Drink 4', image: 'drink', description: 'Chilled drink', quantity: 1 },
];

const HomePage = () => {
  const [filteredItems, setFilteredItems] = useState(items);

  const filterItems = (searchTerm) => {
    setFilteredItems(
      items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div>
      <FilterSearchBar filterItems={filterItems} />
      <ItemList items={filteredItems} />
    </div>
  );
};

export default HomePage;
