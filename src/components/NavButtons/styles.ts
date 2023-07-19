import { Button, Popper } from "@mui/base";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";

const inLeft = keyframes`
  from { transform: translateX(-101%); }
  to { transform: translateX(0); };
  `;

const inRight = keyframes`
  from { transform: translateX(101%); }
  to { transform: translateX(0); };
  `;

const outLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-101%); };
  `;

const outRight = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(101%); };
  `;

const DefaultButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => prop !== "direction",
})<{ direction: { direction: number; hover: boolean } }>`
  font-family: var(--font-family);
  cursor: pointer;
  outline: 1px solid transparent;
  border: none;
  user-select: none;
  height: inherit;
  position: relative;

  padding-right: 1rem;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 600;
  overflow: hidden;

  transition: background-color 0.2s ease-in-out;

  &:focus-visible {
    background-color: rgb(var(--accent-primary), 0.25);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: rgb(var(--accent-primary));

    z-index: -1;
    opacity: 0;

    transition: opacity 0.2s ease-in-out;
  }

  &::after {
    ${({ direction }) =>
      direction.direction === 1 &&
      direction.hover &&
      css`
        animation: ${inRight} 0.25s ease forwards;
        opacity: 0.25;
      `}
    ${({ direction }) =>
      direction.direction === 3 &&
      direction.hover &&
      css`
        animation: ${inLeft} 0.25s ease forwards;
        opacity: 0.25;
      `}
    
    ${({ direction }) =>
      direction.direction === 3 &&
      !direction.hover &&
      css`
        animation: ${outLeft} 0.25s ease forwards;
        opacity: 0.25;
      `}
    ${({ direction }) =>
      direction.direction === 1 &&
      !direction.hover &&
      css`
        animation: ${outRight} 0.25s ease forwards;
        opacity: 0.25;
      `}

    ${({ direction }) =>
      direction.direction !== 1 &&
      direction.direction !== 3 &&
      direction.hover &&
      css`
        opacity: 0.25;
      `}
  }

  @media (hover: none) {
    &::after {
      content: none;
      animation: none;
    }
  }

  @media screen and (max-width: 56rem) {
    font-size: 0.875rem;
  }
`;

export const ContactButton = styled(DefaultButton)`
  color: rgb(var(--accent-secondary));
`;

export const RegularButton = styled(DefaultButton)`
  color: rgb(var(--text-secondary));
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: inherit;

  ${DefaultButton}:first-child:not(a>${DefaultButton}) {
    padding-left: 1rem;
  }

  ${DefaultButton}:not(:first-child):before, a>${RegularButton}:before {
    content: "";
    border-left: 1px solid rgb(var(--text-secondary));
    margin-right: 1rem;
  }
`;

export const StyledPopper = styled(Popper)`
  z-index: 101;
`;

const ListIn = keyframes`
  from {
    transform: translateY(-1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledListbox = styled("ul").withConfig({
  shouldForwardProp: (prop) => prop !== "ownerState",
})`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  min-width: 120px;
  border-radius: 0 0 0.25rem 0.25rem;

  background: rgb(var(--background-secondary), 0.788);
  border: 1px solid transparent;
  color: rgb(var(--text-secondary));
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  overflow: auto;
  list-style: none;

  animation: ${ListIn} 0.2s ease-out;
`;

export const MenuLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== "ownerState",
})`
  padding: 0.75rem 1rem;
  outline: 1px solid transparent;

  transition: background-color 0.2s ease-in-out;

  &:focus-visible {
    background-color: rgb(var(--accent-primary), 0.25);
  }
  &:hover {
    background-color: rgb(var(--accent-primary), 0.25);
  }
`;
