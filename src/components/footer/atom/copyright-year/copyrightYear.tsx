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

  return <StyledYearr>© {currentYear} tal-Ġobon</StyledYearr>;
}

const StyledYearr = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.smallFont};
  color: ${({ theme }) => theme.colors.defaultFont};
`;
