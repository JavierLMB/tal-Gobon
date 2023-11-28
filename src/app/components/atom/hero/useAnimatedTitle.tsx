import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

type AnimatedTitleProp = {
  title: string;
  inView: boolean;
};

const AnimatedTitle = ({ title, inView }: AnimatedTitleProp) => {
  const animatedTitle = title.split("").map((char, index) => (
    <AnimatedLetter key={index} $delay={index * 0.1} $loaded={inView}>
      {char}
    </AnimatedLetter>
  ));

  return <AnimatedTitleContainer>{animatedTitle}</AnimatedTitleContainer>;
};

const AnimatedTitleContainer = styled.div`
  display: inline-block;
  overflow: hidden;
`;

const AnimatedLetter = styled.span<{ $delay: number; $loaded: boolean }>`
  display: inline-block;
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${({ $delay, $loaded }) => css`
    transition-delay: ${$delay}s;
    opacity: ${$loaded ? "1" : 0};
    transform: translateY(${$loaded ? "0" : "1em"});
  `};
`;

export default AnimatedTitle;
// import React, { useEffect, useState } from "react";
// import styled, { css } from "styled-components";

// type AnimatedTitleProp = {
//   title: string;
// };

// const AnimatedTitle = ({ title }: AnimatedTitleProp) => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   const animatedTitle = title.split("").map((char, index) => (
//     <AnimatedLetter key={index} $delay={index * 0.1} $loaded={loaded}>
//       {char}
//     </AnimatedLetter>
//   ));

//   return <AnimatedTitleContainer>{animatedTitle}</AnimatedTitleContainer>;
// };

// const AnimatedTitleContainer = styled.div`
//   display: inline-block;
//   overflow: hidden;
// `;

// const AnimatedLetter = styled.span<{ $delay: number; $loaded: boolean }>`
//   display: inline-block;
//   transition: opacity 0.5s ease, transform 0.5s ease;

//   ${({ $delay, $loaded }) => css`
//     transition-delay: ${$delay}s;
//     opacity: ${$loaded ? "1" : 0};
//     transform: translateY(${$loaded ? "0" : "1em"});
//   `};
// `;

// export default AnimatedTitle;
