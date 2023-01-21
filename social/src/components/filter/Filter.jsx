import { useState } from "react";
import "./index.css";

const Filter = ({ setFilterState }) => {
  const [inputFilter, setInputFilter] = useState("");

  const onHandleInput = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(inputFilter);
  };

  return (
    <div>
      <form className="Filter" onSubmit={onHandleSubmit}>
        <input
          type="text"
          class="text"
          value={inputFilter}
          onChange={onHandleInput}
          placeholder="Search..."
        />
        <input type="submit" class="submit" value="GO" />
      </form>
    </div>
  );
};

export default Filter;
