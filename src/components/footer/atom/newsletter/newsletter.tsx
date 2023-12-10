import { useState } from "react";
import styled, { css } from "styled-components";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <StyledNewsletterContainer>
      <StyledSubscribedNotification $subscribed={subscribed}>
        Subscribed
      </StyledSubscribedNotification>
      <StyledNewsletterTitle>Subscribe to Our Newsletter</StyledNewsletterTitle>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          <StyledNewsletterInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
        </label>
        <br />

        <StyledNewsletterButton type="submit">Subscribe</StyledNewsletterButton>
      </StyledForm>
    </StyledNewsletterContainer>
  );
}

const StyledNewsletterContainer = styled.div`
  position: relative;
  margin-bottom: 5rem;
`;

const StyledSubscribedNotification = styled.div<{ $subscribed: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0rem;
  padding: 0.3rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  transition: all 0.3s cubic-bezier(0.01, -0.02, 0.51, 1.6);

  ${({ $subscribed }) => css`
    right: ${$subscribed ? "0rem" : "-14rem"};
  `};

  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: ${({ theme }) => theme.fonts.header3Font};
  }
`;

const StyledNewsletterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.defaultFont};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    text-align: center;
  }
`;

const StyledForm = styled.form`
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }
`;

const StyledNewsletterInput = styled.input`
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.v1Shadow};
  color: ${({ theme }) => theme.colors.primaryDark};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.accentGoldLighter};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    width: 50rem;
    border-radius: 1rem;
  }
`;

const StyledNewsletterButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.01, -0.02, 0.51, 1.6);
  box-shadow: ${({ theme }) => theme.shadows.v1Shadow};
  font-size: ${({ theme }) => theme.fonts.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
  @media (min-width: ${({ theme }) => theme.breakpoints.bpNormals}) {
    width: 20rem;
    border-radius: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentGoldLight};
    box-shadow: ${({ theme }) => theme.shadows.v2Shadow};
  }

  &:active {
    transform: translateY(3px);
    box-shadow: none;
  }
`;
