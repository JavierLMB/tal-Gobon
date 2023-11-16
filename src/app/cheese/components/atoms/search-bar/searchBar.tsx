import styled from "styled-components";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    onSearch(value);
  };

  return (
    <SearchContainer>
      <SearchBarInput
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        value={searchTerm}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  padding: 1rem;
`;

const SearchBarInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;
