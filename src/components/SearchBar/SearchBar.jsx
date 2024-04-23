// src/components/SearchForm.jsx
import toast, { Toaster } from "react-hot-toast";
// import css from "../SearchBar/SearchBar.module.css";

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.elements.inputValue.value;
    if (form.elements.topic.value.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSubmit(inputValue);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputValue"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
