import shadows from './shadows.styles';
import {respond} from './responsive';
import {css} from 'styled-components';

//Code
const mixins = {
  size: {
    extraLarge: "7.5rem",
    large: "2rem",
    medium: "1rem",
    small: "0.8rem",
  },
  flex: {
    center: (...args) => css`
      display: flex;
      justify-content: center;
      align-items: center;
    }`,
    inlineCenter: (...args) => css`
      display: inline-flex;
      align-items: center;
      align-content: center;
      justify-items: center;
      justify-content: center;
    }`,
  },
};




export const mix_neumorphic = {
  onActive_orange: (...args) => css`
    box-shadow:  ${({ variant }) =>
      variant === "active" ? shadows.neumorphic.orange : shadows.neumorphic.norm};
    }`,
  norm: (...args) => css`
    box-shadow: ${shadows.neumorphic.norm};
    }`,
  light: (...args) => css`
    box-shadow: ${shadows.neumorphic.light};
    }`,
  red: (...args) => css`
    box-shadow: ${shadows.neumorphic.red};
    }`,
};
export const mix_header = {
  basic: (...args) => css`
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    }`,
};
export const mix_flex = {
  center: (...args) => css`
    display: flex;
    justify-content: center;
    align-items: center;
  }`,
  inlineCenter: (...args) => css`
    display: inline-flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
  }`,
};

export const mix_grid = {
  center: (...args) => css`
    display: flex;
    justify-content: center;
    align-items: center;
  }`,
};
export const mix_containers = {
  header: (...args) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }`,
  logo: (...args) => css`
    ${mix_flex.center};
    flex-direction: row;
  }`,
  menuButton: (...args) => css`
    & > * {
      &::before,
      &::after {
        box-sizing: inherit;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    display: flex;
    align-items: center;
    
    justify-content: flex-end;
    
  }`,
};




export default mixins;
