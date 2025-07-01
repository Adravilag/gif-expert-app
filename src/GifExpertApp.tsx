// File: src/GifExpertApp.tsx

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (newCategory: string) => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(value: string) => {
          onAddCategory(value);
        }}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
