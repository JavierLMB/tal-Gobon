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
      <form onSubmit={handleSubmit}>
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
      </form>
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
    right: ${$subscribed ? "0rem" : "-10rem"};
  `};
`;

const StyledNewsletterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.defaultFont};
`;

const StyledNewsletterInput = styled.input`
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.primaryDark};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.accentGoldLighter};
  }
`;

const StyledNewsletterButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.sizes.defaultFont};
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.accentGoldLighter};
`;
