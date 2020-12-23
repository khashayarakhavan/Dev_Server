//Libraries
import styled from "styled-components";
//Design
import fonts from '../../../design/fonts.styles';
import colors from '../../../design/colors';
import {respond} from '../../../design/responsive';


//Code
export const SectionProjectsContainers = styled.section`
  background-color: $color-grey-light-1;
  padding: 25rem 10rem 15rem 10rem;
  margin-top: -10rem;

  ${'' /* @include respond(tab-port) {
    padding: 20rem 5rem 10rem 5rem;
  } */}
  ${respond.mobile.max`
    padding: 20rem 5rem 10rem 5rem;
  `}
`;

export const CardContainer = styled.div`

`;

export const Card = styled.div`
  .card {
    // Functionality and rotation.
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 45rem;

    &__side {
      height: 45rem;
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);

      &--front {
        background-color: $color-white;
      }

      &--back {
        transform: rotateY(180deg);
        &-1 {
          background-image: linear-gradient(
            to right bottom,
            $color-secondary-light,
            $color-secondary-dark
          );
        }
        &-2 {
          background-image: linear-gradient(
            to right bottom,
            $color-tertiary-light,
            $color-tertiary-dark
          );
        }
        &-3 {
          background-image: linear-gradient(
            to right bottom,
            $color-grey-light-1,
            $color-grey-dark
          );
        }
      }
    }

    &:hover &__side--front {
      transform: rotateY(-180deg);
    }

    &:hover &__side--back {
      transform: rotateY(0deg);
    }

    //Front-Side styling
    &__picture {
      background-size: cover;
      height: 15rem;
      background-blend-mode: screen;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      // border-top-left-radius: 5px;
      // border-top-right-radius: 5px;
      // border-bottom-left-radius: 5px;
      // border-bottom-right-radius: 5px;

      &--1 {
        background-image: linear-gradient(
            to right bottom,
            $color-secondary-light,
            $color-secondary-dark
          ),
          url(../img/nat-9.jpg);
      }
      &--2 {
        background-image: linear-gradient(
            to right bottom,
            $color-tertiary-light,
            $color-tertiary-dark
          ),
          url(../img/nat-7.jpg);
      }
      &--3 {
        background-image: linear-gradient(
            to right bottom,
            $color-grey-light-1,
            $color-grey-dark
          ),
          url(../img/nat-8.jpg);
      }
    }

    &__heading {
      font-size: 2rem;
      font-weight: 300;
      text-align: right;
      text-transform: uppercase;
      color: $color-white;
      position: absolute;
      top: 6rem;
      right: 1rem;
      width: 75%;
    }

    &__heading-span {
      padding: 0.1rem 1.5rem;
      -webkit-box-decoration-break: clone;
      &--1 {
        background-image: linear-gradient(
          to right bottom,
          rgba($color-secondary-light, 0.85),
          rgba($color-secondary-dark, 0.85)
        );
      }
      &--2 {
        background-image: linear-gradient(
          to right bottom,
          rgba($color-tertiary-light, 0.85),
          rgba($color-tertiary-dark, 0.85)
        );
      }
      &--3 {
        background-image: linear-gradient(
          to right bottom,
          rgba($color-grey-light-1, 0.85),
          rgba($color-grey-dark, 0.85)
        );
      }
    }

    &__details {
      padding: 3rem;

      ul {
        list-style: none;
        width: 80%;
        margin: 0 auto;

        li {
          text-align: center;
          font-size: 1.5rem;
          padding: 1rem;

          &:not(:last-child) {
            border-bottom: 1px solid $color-grey-light-2;
          }
        }
      }
    }

    &__cta {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      text-align: center;
    }

    &__price-box {
      text-align: center;
      margin-bottom: 0.8rem;
      color: $color-white;
    }

    &__price-only {
      font-size: 1.4rem;
      text-transform: uppercase;
    }

    &__price-value {
      font-size: 6rem;
      font-weight: 100;
    }

    //Changing back side to front for devices with touch input.
    @media only screen and (max-width: 56.25em), only screen and (hover: none) {
      // Functionality and rotation.
      height: auto;
      border-radius: 3rem;
      background-color: $color-white;
      box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);

      &__side {
        height: auto;
        position: relative;
        // border-radius: 0;
        border-radius: 3px;
        box-shadow: none;

        &--back {
          padding-bottom: 2rem;
          transform: rotateY(0deg);
          clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 100%);
        }
      }

      &:hover &__side--front {
        transform: rotateY(0);
      }

      //Front-Side styling
      &__cta {
        position: relative;
        top: 0;
        left: 0;
        transform: translate(0);
        padding: 7rem 4rem 4rem 4rem;
        width: 100%;
        text-align: center;
      }

      &__details {
        padding: 1rem 3rem;
      }
      &__price-box {
        text-align: center;
        margin-bottom: 1rem;
        color: $color-white;
      }

      &__price-value {
        font-size: 7rem;
      }
    }
  }
`;