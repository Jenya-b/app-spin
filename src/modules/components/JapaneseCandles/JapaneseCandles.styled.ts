import styled from 'styled-components';
import { fontStyleXSmallBemiBold } from 'styles/typography';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10.72rem;
`;
export const Svg = styled.svg`
  position: absolute;

  g {
    ${fontStyleXSmallBemiBold}

    .domain {
      stroke: none;
    }
  }
`;

export const Lines = styled.div`
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .future-line {
    position: absolute;
    width: 0.14rem;
    background: #43464d;

    :nth-child(odd) {
      height: 3.57rem;
    }

    :nth-child(even) {
      height: 5.35rem;
      top: -0.72rem;
    }

    :nth-child(4n) {
      height: 7.5rem;
      top: 0.72rem;
    }

    :nth-child(8n) {
      height: 7rem;
      top: -0.72rem;
    }

    ::before {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.28rem;
      height: 2.14rem;
      background: #78cbbb;
      border-radius: 0.57rem;
    }

    :nth-child(odd) {
      ::before {
        height: 1.1rem;

        @keyframes anim {
          from {
            top: 50%;
          }
          50% {
            top: 25%;
          }
          to {
            top: 50%;
          }
        }
        animation: 2s linear 3s anim;
      }
    }

    :nth-child(4n) {
      ::before {
        height: 3rem;
      }
    }

    :nth-child(3n) {
      ::before {
        background: #ff3165;
      }
    }

    :nth-child(5n) {
      ::before {
        @keyframes anim2 {
          from {
            top: 50%;
          }
          50% {
            top: 75%;
          }
          to {
            top: 50%;
          }
        }
        animation: 2s linear 2s infinite anim2;
      }
    }
  }
`;
