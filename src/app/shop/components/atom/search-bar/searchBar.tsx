import styled from "styled-components";

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
  padding: 0rem 1rem 1rem 1rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    width: 50%;
    padding: 0rem 0.5rem 1rem 1rem;
  }
`;

const SearchBarInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.v1Shadow};
  color: ${({ theme }) => theme.colors.primaryDark};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryDark};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    border-radius: 1rem;
    height: 4.4rem;
  }
`;
