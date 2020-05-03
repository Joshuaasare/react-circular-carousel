import styled from 'styled-components';

export const maxWidth = {
  TAB_PORTRAIT: 300,
  PHONE: 250,
  MID_PHONE: 230,
  MINI_PHONE: 200,
  MICRO_PHONE: 180
};

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
          props.width > maxWidth.TAB_PORTRAIT
            ? maxWidth.TAB_PORTRAIT / 2 + 85
            : props.width / 2 + 85}px
    );
    height: ${(props) =>
      props.width > maxWidth.TAB_PORTRAIT
        ? (maxWidth.TAB_PORTRAIT / props.width) * props.height + 2
        : props.height + 2}px;
  }

  @media (max-width: 37.5em) {
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > maxWidth.PHONE
            ? maxWidth.PHONE / 2 + 85
            : props.width / 2 + 85}px
    );

    height: ${(props) =>
      props.width > maxWidth.PHONE
        ? (maxWidth.PHONE / props.width) * props.height + 2
        : props.height + 2}px;
  }

  @media (max-width: 31.25em) {
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > maxWidth.MID_PHONE
            ? maxWidth.MID_PHONE / 2 + 85
            : props.width / 2 + 85}px
    );
    height: ${(props) =>
      props.width > maxWidth.MID_PHONE
        ? (maxWidth.MID_PHONE / props.width) * props.height + 2
        : props.height + 2}px;
  }

  @media (max-width: 25em) {
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > maxWidth.MINI_PHONE
            ? maxWidth.MINI_PHONE / 2 + 85
            : props.width / 2 + 85}px
    );
    height: ${(props) =>
      props.width > maxWidth.MINI_PHONE
        ? (maxWidth.MINI_PHONE / props.width) * props.height + 2
        : props.height + 2}px;
  }

  @media (max-width: 21.875em) {
    padding-left: calc(
      50% -
        ${(props) =>
          props.width > maxWidth.MICRO_PHONE
            ? maxWidth.MICRO_PHONE / 2 + 85
            : props.width / 2 + 85}px
    );
    height: ${(props) =>
      props.width > maxWidth.MICRO_PHONE
        ? (maxWidth.MICRO_PHONE / props.width) * props.height + 2
        : props.height + 2}px;
  }
`;

export const CarouselItem = styled.div`
  position: absolute;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  top: 0;
  cursor: pointer;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  opacity: 1;
  outline: none;

  @media (max-width: 56.25em) {
    max-width: ${maxWidth.TAB_PORTRAIT}px;
    height: ${(props) =>
      props.width > maxWidth.TAB_PORTRAIT
        ? (maxWidth.TAB_PORTRAIT / props.width) * props.height
        : props.height}px;
  }

  @media (max-width: 37.5em) {
    max-width: ${maxWidth.PHONE}px;
    height: ${(props) =>
      props.width > maxWidth.PHONE
        ? (maxWidth.PHONE / props.width) * props.height
        : props.height}px;
  }

  @media (max-width: 31.25em) {
    max-width: ${maxWidth.MID_PHONE}px;
    height: ${(props) =>
      props.width > maxWidth.MID_PHONE
        ? (maxWidth.MID_PHONE / props.width) * props.height
        : props.height}px;
  }

  @media (max-width: 25em) {
    max-width: ${maxWidth.MINI_PHONE}px;
    height: ${(props) =>
      props.width > maxWidth.MINI_PHONE
        ? (maxWidth.MINI_PHONE / props.width) * props.height
        : props.height}px;
  }

  @media (max-width: 21.875em) {
    max-width: ${maxWidth.MICRO_PHONE}px;
    height: ${(props) =>
      props.width > maxWidth.MICRO_PHONE
        ? (maxWidth.MICRO_PHONE / props.width) * props.height
        : props.height}px;
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
