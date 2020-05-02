import styled from 'styled-components';

export const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(props) => props.height + 2}rem;
  padding-left: calc(50% - ${(props) => props.width / 2 + 5.5}rem);
  top: 0;
  @media (max-width: 56.25em) {
    max-height: 26rem;
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > 25 ? 25 / 2 + 5.5 : props.width / 2 + 5.5}rem
    );
  }

  @media (max-width: 37.5em) {
    max-height: 22rem;
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > 20 ? 20 / 2 + 5.5 : props.width / 2 + 5.5}rem
    );
  }

  @media (max-width: 31.25em) {
    max-height: 16rem;
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > 15 ? 15 / 2 + 5.5 : props.width / 2 + 5.5}rem
    );
  }

  @media (max-width: 25em) {
    max-height: 13rem;
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > 15 ? 12 / 2 + 7.5 : props.width / 2 + 5.5}rem
    );
  }

  @media (max-width: 21.875em) {
    max-height: 11rem;
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > 10 ? 10 / 2 + 7.5 : props.width / 2 + 5.5}rem
    );
  }
`;

export const CarouselItem = styled.div`
  position: absolute;
  top: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  border: solid 1px #f0f5f1;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease;
  background: #fff;
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;
  opacity: 1;
  display: inline-flex;

  @media (max-width: 56.25em) {
    max-height: 25rem;
    max-width: 25rem;
  }

  @media (max-width: 37.5em) {
    max-height: 20rem;
    max-width: 20rem;
  }

  @media (max-width: 31.25em) {
    max-height: 15rem;
    max-width: 15rem;
  }

  @media (max-width: 25em) {
    max-height: 12rem;
    max-width: 12rem;
  }

  @media (max-width: 21.875em) {
    max-height: 10rem;
    max-width: 10rem;
  }
`;

export const ForwardIcon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;
  border-radius: 1000rem;
  padding: ${(props) => props.width}rem;
  margin-left: ${(props) => props.cardWidth}rem;
`;

export const BackIcon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;
  z-index: 40;
  background-color: #fff;
  border-radius: 1000rem;
  padding: ${(props) => props.width / 2}rem;
`;
