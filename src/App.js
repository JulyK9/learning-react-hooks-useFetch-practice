import { useState } from "react";
import GithubUser from "./components/GithubUser";
import SearchForm from "./components/SearchForm";

import "./styles.css";

export default function App() {
  const [login, setLogin] = useState("");

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GithubUser login={login} />
    </>
  );
}
