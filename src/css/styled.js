import styled from 'styled-components';

export const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(props) => props.height + 2}px;
  padding-left: calc(50% - ${(props) => props.width / 2 + 85}px);
  top: 0;
  @media (max-width: 56.25em) {
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > 250 ? 250 / 2 + 85 : props.width / 2 + 85}px
    );
  }

  @media (max-width: 37.5em) {
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > 200 ? 200 / 2 + 85 : props.width / 2 + 85}px
    );
  }

  @media (max-width: 31.25em) {
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > 150 ? 150 / 2 + 85 : props.width / 2 + 85}px
    );
  }

  @media (max-width: 25em) {
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > 120 ? 120 / 2 + 85 : props.width / 2 + 85}px
    );
  }

  @media (max-width: 21.875em) {
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > 100 ? 100 / 2 + 85 : props.width / 2 + 85}px
    );
  }
`;

export const CarouselItem = styled.div`
  position: absolute;
  top: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  opacity: 1;

  @media (max-width: 56.25em) {
    max-width: 250px;
    height: ${(props) =>
      props.width > 250 ? (250 / props.width) * props.height : props.height}px;
  }

  @media (max-width: 37.5em) {
    max-width: 200px;
    height: ${(props) =>
      props.width > 200 ? (200 / props.width) * props.height : props.height}px;
  }

  @media (max-width: 31.25em) {
    max-width: 150px;
    height: ${(props) =>
      props.width > 150 ? (150 / props.width) * props.height : props.height}px;
  }

  @media (max-width: 25em) {
    max-width: 120px;
    height: ${(props) =>
      props.width > 120 ? (120 / props.width) * props.height : props.height}px;
  }

  @media (max-width: 21.875em) {
    max-width: 100px;
    height: ${(props) =>
      props.width > 100 ? (100 / props.width) * props.height : props.height}px;
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
