// File: src/components/AddCategory.tsx

import { useState } from "react";

const AddCategory = ({ onNewCategory }: { onNewCategory: (category: string) => void }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length > 0) {
      onNewCategory(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={onSubmit} aria-label="formulario de busqueda" className="add-category-form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      ></input>
    </form>
  );
};

export default AddCategory;
