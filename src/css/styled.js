import styled from 'styled-components'

export const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(props) => props.height + 2}rem;
  padding-left: calc((100% - ${(props) => (2.9 * props.width) / 2}rem) / 2);
  @media (max-width: 56.25em) {
  }

  @media (max-width: 37.5em) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 25em) {
    height: ${(props) => props.height / 1.3 + 1}rem;
  }
`

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

  @media (max-width: 56.25em) {
  }

  @media (max-width: 37.5em) {
    margin-left: -${(props) => props.width / 3.5}rem;
  }

  @media (max-width: 25em) {
    top: 0;
    height: ${(props) => props.height / 1.3}rem;
    width: ${(props) => props.width / 1.3}rem;
  }
`
