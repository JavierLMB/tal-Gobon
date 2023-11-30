import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CheeseRocket() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  return (
    <div>
      <StyledCheeseImage1
        src={"/cheeseAbout/small/aboutCheese1.png"}
        alt={"tal Gobon Logo"}
        width={100}
        height={100}
        priority
        $loaded={loaded}
      />
      <StyledCheeseImage2
        src={"/cheeseAbout/small/aboutCheese2.png"}
        alt={"tal Gobon Logo"}
        width={100}
        height={100}
        priority
        $loaded={loaded}
      />
    </div>
  );
}

const shakeAnimation = keyframes`
  0%, 50%,80% {
    transform: translateX(0) rotate(0deg);
  }
  5%,  45% {
    transform: translateX(-2px) rotate(-2deg);
  }
  20%,  35% {
    transform: translateX(2px) rotate(2deg);
  }
  85% {
    transform: translateY(20px) rotate(-20deg);
  }
  90% {
    transform: translateY(-200px) rotate(45deg);
  }
  100% {
    transform: translateY(-600px) rotate(90deg);
  }
`;

const commonCheeseImageStyles = css<{ $loaded: boolean }>`
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: 34rem;
  animation: ${shakeAnimation} 3s ease-out 2s forwards;
`;

const StyledCheeseImage1 = styled(Image)<{ $loaded: boolean }>`
  ${commonCheeseImageStyles}
  left: 0.5rem;
`;
const StyledCheeseImage2 = styled(Image)<{ $loaded: boolean }>`
  ${commonCheeseImageStyles}
  right: 0.5rem;
`;
