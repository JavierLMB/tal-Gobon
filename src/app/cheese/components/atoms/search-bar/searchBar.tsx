import styled from "styled-components";
import { useState } from "react";

type SearchBarProps = {
  searchTerm: string;
  onSearchTerm: (value: string) => void;
};

export default function SearchBar({
  searchTerm,
  onSearchTerm,
}: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearchTerm(value);
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
