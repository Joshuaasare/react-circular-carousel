/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/**
 * @flow
 */

import React from 'react'
import './css/templateCarousel.css'
import { Carousel, CarouselItem } from './css/styled'

type Props = {
  list: Array<>,
  height: number,
  width: number
}

type State = {}

const SCALE_UNIT = 0.1
const SHIFT_UNIT = 90
const BIG_SHIFT_UNIT = 130

class TemplateCarousel extends React.Component<Props, State> {
  allCards: any

  nextButton: any

  prevButton: any

  componentDidMount() {
    /**
     * 💻 JS INSIDE 🖥
     */
    this.allCards = Array.from(
      document.getElementsByClassName('template-carousel__template')
    )
    this.allCards.forEach((template) =>
      template.addEventListener('click', this.onTemplateClick)
    )
    this.allCards[0].setAttribute('data-is-active', 'yes')

    this.nextButton = document.getElementById('carousel-next-btn')
    this.prevButton = document.getElementById('carousel-prev-btn')
  }

  render() {
    const { height, width } = this.props
    return (
      <Carousel
        className='template-carousel'
        height={height}
        shift={SHIFT_UNIT}
        width={width}
      >
        {this.renderTemplateThumbnails()}
      </Carousel>
    )
  }

  componentWillUnmount() {
    this.allCards.forEach((template) =>
      template.removeEventListener('click', this.onTemplateClick)
    )
  }

  /**
   * Note:
   * the main properties that are used to control the positioning
   * of the templates within the carousel are the **scale** ,  **left** and **z-index**
   * positioning. All templates already have absolute positioning.
   *
   * Also, we want the second template in the stack to pull out a bit more so
   * we can place the next/previous arrow indicator on it
   */

  renderTemplateThumbnails = () => {
    const { height, width, children } = this.props
    console.log('props', this.props)

    const totalTemplates = children.length
    return children.map((child, i) => {
      const zIndex = totalTemplates - i
      const scale = 1 - i * SCALE_UNIT
      const xAxis = 90 - i * SHIFT_UNIT
      return (
        <CarouselItem
          key={parseInt(i, 10)}
          style={{
            transform: `scale(${scale}) translateX(${xAxis}px)`,
            right: 'inherit',
            zIndex
          }}
          height={height}
          width={width}
          className='template-carousel__template'
          //   onClick={() => this.props.onSelect(template.id)}
          data-position={-1 * i}
          data-zindex={zIndex}
          data-scale={scale}
          data-xaxis={xAxis}
          data-order={i}
          data-is-active={i === 0 ? 'yes' : 'no'}
          role='link'
          tabIndex={0}
        >
          {child}
        </CarouselItem>
      )
    })
  }

  onTemplateClick = (e: Event, targetCard1 = null, targetCardPos1 = null) => {
    /**
     * a click's direct target is the image it contains,
     * let's get the enclosing div itself
     */
    // $FlowFixMe
    const targetCard =
      targetCard1 || e.target.closest('.template-carousel__template')
    const targetCardPos =
      targetCardPos1 || parseInt(targetCard.dataset.position, 10)

    // if we are shifting the cards right, we start from the first card,
    if (targetCardPos < 0)
      for (let a = 0; a < this.allCards.length; a += 1) {
        this.allCards[a].setAttribute('data-is-active', 'no')
        this.moveCard(this.allCards[a], targetCardPos)
      }
    // if we are shifting the cards left, we start from the last card,
    else if (targetCardPos > 0)
      for (let a = this.allCards.length - 1; a >= 0; a -= 1) {
        this.allCards[a].setAttribute('data-is-active', 'no')
        this.moveCard(this.allCards[a], targetCardPos)
      }

    targetCard.setAttribute('data-is-active', 'yes')

    // show/hide next/prev arrow buttons
  }

  /**
   * Use the visualization of how the cards move on the screen to understand the explanation below:
   *
   * 🦋
   * to understand how we are moving the cards, and hence the code below
   * you need to understand the plane being used.
   * first all the cards are imagined as being on a number.
   * Each card has a corresponding number from the number line.
   * We call this number the *currentCardPosition* or simply *position*
   *
   * 🏓
   * Now note that when the page is first loaded all the cards are stacked to the left.
   * Hence it is straightforward to number the cards 0, -1, -2, -3... etc
   * when they are first mounted
   *
   * However as the cards are moved along this number line, this value changes
   * Cards that move to the left of the front card will have a negative position and vice versa.
   *
   * 🐚
   * Also note that whenever a card is clicked, we have to move that card to the front
   * (as the selected card)
   * The number of steps (numbers on the number line) we have to move that card is simply
   * the absolute value of that cards current position.
   * Make sure u understand that and the rest of the code should make sense
   *
   * Also important:🐳
   * When moving a card from the left to right,  we might have to move it "up" to 0,
   * before moving it down to a certain position.
   * Of course, its possible this will not be necessary if the number of steps needed
   * to move it does not bring it to zero or brings it to 0 exactly.
   *
   * In the same way when moving a card from right to left, we might have to move it "up" to 0,
   * before moving it down to a certain position.
   */

  moveCard = (cardToMove: any, targetCardPos: number) => {
    /**
     * function to apply final transform to card
     */
    const transform = (newScale: number, newPos: number) => {
      cardToMove.style.transform = `scale(${newScale}) translateX(${newPos}px)`
      cardToMove.setAttribute('data-xaxis', newPos)
      cardToMove.setAttribute('data-scale', newScale)
    }
    /**
     * even though we are actually trying to scale by a certain amount,
     * it appears that in js/css we can only set the final scale and not an amount
     * to scale by. It means that each time we call scale,
     * we need to get the current scale value, so we can calculate the final scale value
     * based on how much we want to scale by
     * (same applies to the position on the x-axis)
     *
     * also note that these move functions get the current position and scale of the card
     * directly from the DOM,
     * Hence it is important that when they are passed to the _transform_ function which changes
     * their positions, the new positions be set in the DOM,
     * so that the next time a move function is called, it will get the right position
     */
    const move = (steps: number) => {
      // save the position of the card before the move operation
      const curCardPos = parseInt(cardToMove.dataset.position, 10)
      return {
        /**
         * when a card is scaled up, its z-index is increased
         */
        scaleUp: () => {
          cardToMove.style.zIndex =
            parseInt(cardToMove.dataset.zindex, 10) + steps
          cardToMove.setAttribute(
            'data-zindex',
            parseInt(cardToMove.dataset.zindex, 10) + steps
          )

          return parseFloat(cardToMove.dataset.scale) + steps * SCALE_UNIT
        },
        /**
         * when a card is scaled down, its z-index is decreased
         */
        scaleDown: () => {
          cardToMove.style.zIndex =
            parseInt(cardToMove.dataset.zindex, 10) - steps
          cardToMove.setAttribute(
            'data-zindex',
            parseInt(cardToMove.dataset.zindex, 10) - steps
          )

          return parseFloat(cardToMove.dataset.scale) - steps * SCALE_UNIT
        },
        moveRight: () => {
          /**
           * this step should actually occur after the actual move, but that is why
           * the return statement uses the position that was saved before the position attr
           * was changed
           */
          cardToMove.setAttribute(
            'data-position',
            parseInt(cardToMove.dataset.position, 10) + steps
          )
          return (
            parseInt(cardToMove.dataset.xaxis, 10) +
            steps * (curCardPos >= 0 ? BIG_SHIFT_UNIT : SHIFT_UNIT)
          )
        },
        moveLeft: () => {
          cardToMove.setAttribute(
            'data-position',
            parseInt(cardToMove.dataset.position, 10) - steps
          )
          return (
            parseInt(cardToMove.dataset.xaxis, 10) -
            steps * (curCardPos > 0 ? BIG_SHIFT_UNIT : SHIFT_UNIT)
          )
        }
      }
    }

    const currentPosOfCardToMove = parseInt(cardToMove.dataset.position, 10)
    /**
     * calculate the total number of steps the card will need to move
     * keeping in mind that in certain cases, this will require movement in
     * multiple directions
     */
    const totalStepsToMove = Math.abs(targetCardPos)
    let firstDirectionSteps
    let secondDirectionSteps
    if (Math.abs(currentPosOfCardToMove) >= totalStepsToMove) {
      firstDirectionSteps = totalStepsToMove
      secondDirectionSteps = 0
    } else {
      firstDirectionSteps = Math.abs(currentPosOfCardToMove)
      secondDirectionSteps = totalStepsToMove - firstDirectionSteps
    }
    /**
     * if the target card is in a negative position,
     * then we are moving all -ve cards up, (and possibly down right when the reach the top level)
     * and all positive cards down right
     */
    if (targetCardPos < 0) {
      if (currentPosOfCardToMove < 0) {
        /**
         * it is possible that in this case
         * we have to move up, right by a certain amount
         * and then down right by a different amount as stated in the 🐳 above
         */
        /**
         * **SCALE UP, MOVE RIGHT**
         */
        transform(
          move(firstDirectionSteps).scaleUp(),
          move(firstDirectionSteps).moveRight()
        )
        /**
         * **SCALE DOWN, MOVE RIGHT**
         */
        transform(
          move(secondDirectionSteps).scaleDown(),
          move(secondDirectionSteps).moveRight()
        )
      } else {
        /**
         * **SCALE DOWN, MOVE RIGHT**
         */
        transform(
          move(totalStepsToMove).scaleDown(),
          move(totalStepsToMove).moveRight()
        )
      }
    } else if (targetCardPos > 0) {
      /**
       * if the target card is in a +ve position,
       * then we are moving all -ve cards down,
       * 	(and possibly down left when the reach the top level)
       * and all positive cards up left
       */
      if (currentPosOfCardToMove <= 0) {
        /**
         * **SCALE DOWN, MOVE LEFT**
         */
        transform(
          move(totalStepsToMove).scaleDown(),
          move(totalStepsToMove).moveLeft()
        )
      } else {
        /**
         * **SCALE UP, MOVE LEFT**
         */
        transform(
          move(firstDirectionSteps).scaleUp(),
          move(firstDirectionSteps).moveLeft()
        )
        /**
         * **SCALE DOWN, MOVE LEFT**
         */
        transform(
          move(secondDirectionSteps).scaleDown(),
          move(secondDirectionSteps).moveLeft()
        )
      }
    }
  }
}

export default TemplateCarousel
