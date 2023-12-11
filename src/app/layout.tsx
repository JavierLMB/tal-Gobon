"use client";
import { Alkatra } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../../registery";
import styled, { ThemeProvider } from "styled-components";
import { CartProvider } from "react-use-cart";

import { theme } from "./theme";

const alkatra = Alkatra({ subsets: ["latin"] });

const metadata = {
  title: "tal-Ġobon - Premium Cheese Delights",
  description:
    "Indulge in the finest selection of premium cheeses at tal-Ġobon. Discover exquisite flavors, curated for cheese enthusiasts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <html lang="en">
          <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link
              rel="shortcut icon"
              type="image/png"
              href="/GobonLogo/small/GobonLogo.png"
            />
          </head>
          <StyledComponentsRegistry>
            <StyledBody className={alkatra.className}>
              <StyledContainer>{children}</StyledContainer>
            </StyledBody>
          </StyledComponentsRegistry>
        </html>
      </CartProvider>
    </ThemeProvider>
  );
}

const StyledBody = styled.body`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primaryDark},
    ${({ theme }) => theme.colors.primaryLight}
  );
`;

const StyledContainer = styled.div`
  max-width: 180rem;
  margin: 0rem auto;
  background-color: #fff2db;
`;
