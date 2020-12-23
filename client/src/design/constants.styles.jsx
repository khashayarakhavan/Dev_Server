import { createGlobalStyle , injectGlobal} from 'styled-components';

const GlobalConstants = createGlobalStyle`
      :root {
            /* Z-index layers */
            --layer-bottom: -10000;
            --layer-B3: -2000;
            --layer-B2: -1500;
            --layer-B1: -1000;
            --layer-G: 0;
            --layer-1: 1000;
            --layer-2: 1500;
            --layer-3: 2000;
            --layer-top: 10000;

		--props-color-HAF: #145665 ;
		--color-primary: #ce0f45;
            --color-primary-light: #FF3366;
            --color-primary-dark: #BA265D;

            --color-grey-light-1: #faf9f9;
            --color-grey-light-2: #f4f2f2;
            --color-grey-light-3: #f0eeee;
            --color-grey-light-4: #ccc;

            --color-grey-dark: #999;
            --color-grey-dark-2: #777;
            --color-grey-dark-3: #333;
            --layer-G: 0;
            --layer-top: 100;

            --shadow-dark: 0 2rem 6rem rgba(0,0,0, .3);
            --shadow-light: 0 2rem 5rem rgba(0,0,0, .05);

            --line: 3px solid var(--color-grey-light-2);


            /* Black and White */
		$color-white: #fff;
            $color-black: #000;
            /* Primary colors */
            --color-primary: #c69963;
            $color-primary-light: #f7bf7b;
            $color-primary-dark: #B28451;
            /* Secondary colors */
            $color-secondary: #101d2c;
            $color-secondary-light: #2b4c72;
            $color-secondary-dark: #0e1925;
            /* Tertiary colors */
            $color-tertiary-light: #2998ff;
            $color-tertiary-dark: #5643fa;
            /* Grey colors */
            $color-primary-grey: rgba(252, 253, 253, 0.87);
            $color-grey-light-1: #f9f7f6;
            $color-grey-light-2: #aaa;
            $color-grey-dark-1: #54483A;
            $color-grey-dark: #54483A;
            $color-grey-dark-2: #6D5D4B;
            $color-grey-dark-3: #333;
	}
`;

export default GlobalConstants;

