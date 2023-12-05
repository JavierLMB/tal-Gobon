"use client";

import type { Metadata } from "next";
import { Alkatra } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../../registery";
import styled, { ThemeProvider } from "styled-components";
import { CartProvider } from "react-use-cart";

import { theme } from "./theme";

const alkatra = Alkatra({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <StyledComponentsRegistry>
            <StyledBody className={alkatra.className}>{children}</StyledBody>
          </StyledComponentsRegistry>
        </html>
      </CartProvider>
    </ThemeProvider>
  );
}

const StyledBody = styled.body`
  /* background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.accentGoldLight},
    ${({ theme }) => theme.colors.accentGoldLighter}
  );
  background-repeat: no-repeat; */
  background-color: #fff2db;
`;
