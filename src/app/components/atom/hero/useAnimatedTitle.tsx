import styled, { css } from "styled-components";

type AnimatedTitleProp = {
  title: string;
  inView: boolean;
};

const AnimatedTitle = ({ title, inView }: AnimatedTitleProp) => {
  const animatedTitle = title.split("").map((char, index) => (
    <AnimatedLetter key={index} $delay={index * 0.1} $inView={inView}>
      {char === " " ? "\u00A0" : char}
    </AnimatedLetter>
  ));

  return <AnimatedTitleContainer>{animatedTitle}</AnimatedTitleContainer>;
};

const AnimatedTitleContainer = styled.div`
  display: inline-block;
  overflow: hidden;
`;

const AnimatedLetter = styled.span<{ $delay: number; $inView: boolean }>`
  display: inline-block;
  transition: all 0.5s ease;
  ${({ $delay, $inView }) => css`
    transition-delay: ${$delay}s;
    opacity: ${$inView ? "1" : 0};
    transform: translateY(${$inView ? "0" : "1rem"});
  `};
`;

export default AnimatedTitle;
