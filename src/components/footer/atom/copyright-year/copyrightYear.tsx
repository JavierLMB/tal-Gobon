import { useState, useEffect } from "react";
import styled from "styled-components";

export default function CopyrightYear() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <StyledYearr>© {currentYear} tal-Gobon</StyledYearr>;
}

const StyledYearr = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.smallFont};
  color: ${({ theme }) => theme.colors.defaultFont};
`;
