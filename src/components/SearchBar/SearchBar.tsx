import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onTerm, onReset }: SearchBarPropsType) {
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let input = (
      event.currentTarget.elements[0] as HTMLInputElement
    ).value.trim();

    if (input == "") {
      toast("Please enter search term!");
      return;
    }

    onTerm(input);
    onReset(1);
    event.currentTarget.reset();
  }

  return (
    <header className={css.header}>
      <form onSubmit={submitHandler} className={css.form}>
        <input
          className={css.search}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <Toaster />
        <button>Search</button>
      </form>
    </header>
  );
}
