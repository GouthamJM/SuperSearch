/** @type {import ('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '2rem',
        xxl: '2.5rem',
        xxxl: '3rem',
        '4xl': '4rem',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      letterSpacing: {
        tight: '-0.01em',
      },
      screens: {
        xs: '440px',
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        whiteSmoke: '#f0f0f0',
        lightgrey: '#d3d3d3',
        lightBlue: '#e1edf0',
        primary: {
          100: '#FAF3ED',
          300: '#E5B89E',
          500: '#CC703C',
          600: '#B85E2C',
        },
        primaryDark: {
          100: '#3B2519',
          300: '#8A4C28',
          500: '#C7652E',
        },
        secondary: {
          50: '#F5F5F5',
          100: '#ECECEC',
          200: '#CED1D5',
          300: '#8F98A4',
          500: '#464E59',
          900: '#282B30',
        },
        secondaryDark: {
          50: '#1C1C1F',
          100: '#252629',
          200: '#37393D',
          300: '#575B61',
          500: '#9AA0AB',
          900: '#E9ECF2',
        },
        base: {
          100: '#F7F2ED',
          200: '#F0F5F0',
          300: '#FDFDFD',
          500: '#F6F7F7',
          700: '#F0F4F5',
        },
        baseDark: {
          100: '#18191A',
          300: '#0F0F0F',
          500: '#292A2B',
        },
        error: {
          100: '#FFF4F3',
          300: '#F9D1CC',
          500: '#E11900',
        },
        errorDark: {
          100: '#2E1816',
          300: '#6E2319',
          500: '#C44A3B',
        },
        warning: {
          100: '#FCF6EA',
          300: '#F0D399',
          500: '#E3A624',
        },
        warningDark: {
          100: '#332914',
          300: '#7D6532',
          500: '#CFA753',
        },
        success: {
          50: '#EBF7ED',
          100: '#E4F4E6',
          300: '#A9DBAE',
          500: '#42A153',
        },
        successDark: {
          100: '#122B16',
          300: '#2F5C37',
          500: '#4B9458',
        },
        info: {
          100: '#DEF0FD',
          300: '#AFDAFA',
          500: '#008BF1',
        },
        infoDark: {
          100: '#001D33',
          300: '#0A3C61',
          500: '#005594',
          600: '#3380B8',
        },
        text: {
          50: '#FFFFFF',
          100: '#BABDC2',
          300: '#797F8A',
          500: '#484D57',
          600: '#919C93',
          700: '#101521',
          900: '#0A0D14',
        },
        textDark: {
          50: '#000000',
          100: '#3F4145',
          300: '#81858C',
          500: '#B0B6BF',
          900: '#FAFCFF',
        },
        support: {
          100: '#F0FAF4',
          300: '#5BC68C',
          500: '#008A4A',
        },
        supportDark: {
          100: '#002916',
          300: '#00522C',
          500: '#008A4A',
        },
        bg: {
          50: '#0F0F0F',
          100: '#FBFBFB',
          200: '#0000004d',
          300: '#384052',
          400: '#0B1514',
          500: '#171E2E',
          600: '#EBF7ED',
        },
        bgDark: {
          100: '#1F2021',
        },
        nftCard: {
          100: '#332D29',
          200: '#2D332D',
          700: '#293133',
        },
      },
      spacing: {
        11: '2.75rem',
        13: '3.25rem',
        15: '3.75rem',
        21: '5.25rem',
        25: '6.25rem',
        30: '7.5rem',
        31: '7.75rem',
        35: '8.75rem',
        40: '10rem',
        50: '12.5rem',
        52.5: '13.125rem',
        70: '17.5rem',
        100: '25rem',
        105: '26.25rem',
        115: '28.75rem',
        120: '30rem',
        150: '37.5rem',
        160: '40rem',
        170: '42.5rem',
        200: '50rem',
      },
      lineHeight: {
        2: '1.25rem',
        2.2: '1.375rem',
        2.4: '1.5rem',
        3.2: '2rem',
        3.5: '0.875rem',
        4.5: '1.125rem',
        12: '3rem',
        12.5: '3.5rem',
        19.25: '4.813rem',
      },
      scale: {
        200: '2.00',
      },
      borderRadius: {
        large: '16px',
        medium: '14px',
        big: '50px',
        '2xl': '36px',
        xl: '32px',
        sm: '8px',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { transform: 'translateX(0%)' },
          opacity: 0,
        },
      },
      animation: {
        shimmer: 'shimmer 1s ease-in-out infinite',
      },
      gridTemplateColumns: {
        tokensTable: '6fr 5fr 2fr',
        activitiesTable: '2.5fr 5fr 2.5fr 2fr',
        ipadActivitiesTable: '3fr 5fr 4fr',
        mobActivitiesTable:
          'minmax(200px, 1fr) minmax(300px, 1fr) minmax(150px, 1fr) minmax(150px, 1fr)',
        rewardsTable: '5fr 7fr',
        mobRewardsTable: 'minmax(80px, 1fr) minmax(225px, 1fr)',
        mobTokensTable: 'minmax(100px, 1fr) minmax(200px, 1fr)',
        deFiProtocolTable: '5fr 3fr 1fr',
        deFiProtocolMobileTable:
          'minmax(200px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)',
        deFiProtocolTable3: '8fr 1fr',
        deFiProtocolMobileTable3: 'minmax(380px, 1fr) minmax(100px, 1fr)',
        nftListCard: '5fr 7fr',
        deFiProtocolTablePooled: '5fr 4fr 1fr',
        deFiProtocolMobileTablePooled: '1fr 1fr',
        deFiInvestmentTable: '5fr 5fr 2fr',
        deFiInvestmentMobileTable: 'minmax(220px, 1fr) minmax(150px, 1fr)',
        deFiVestingTable: '3fr 2fr 2.8fr 3fr 1.2fr',
        deFiVesting3Table: '5fr 3fr 1fr',
        approvalMobTable: '7fr 5fr',
        deFiPerpetualTable: '3fr 2fr 2fr 1fr 1fr',
        deFiVestingMobileTable:
          'minmax(100px, 1fr) minmax(100px, 1fr) minmax(150px, 1fr) minmax(150px, 1fr) minmax(100px, 1fr)',
        deFiOptionSellerTable: '2fr 2fr 2fr 2fr 2.8fr 1.2fr',
        deFiOptionSellerMobileTable:
          'minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(150px, 1fr) minmax(200px, 1fr) minmax(100px, 1fr)',
        deFiAPYReturnsTable: '8fr 2fr 2fr',
        deFiAPYReturnsMobileTable:
          'minmax(250px, 1fr) minmax(80px, 1fr) minmax(150px, 1fr)',
      },
      zIndex: {
        999: '999',
        1000: '1000',
        1001: '1001',
      },
    },
    boxShadow: {
      sm: '0px 2px 8px rgba(0, 0, 0, 0.06)',
      '2xl': '0px 2px 8px rgba(24, 26, 29, 0.05)',
      '3xl': '0px 24px 24px rgba(0, 0, 0, 0.17);',
      '4xl': '0px 3.18056px 19.0833px rgba(0, 0, 0, 0.16);',
      '5xl': '4px 0px 15px rgba(24, 26, 29, 0.05)',
      '6xl': '0px 4px 25px rgba(24, 26, 29, 0.05)',
      '7xl': '0px 12px 24px rgba(24, 26, 29, 0.16)',
      '8xl': '8px 0px 10px rgba(24, 26, 29, 0.05)',
      topLeft: '-12px 0px 16px rgba(24, 26, 29, 0.05)',
      sidebar: '-3.97112px 0px 14.8917px rgba(24, 26, 29, 0.05);',
      rewardShadow1: '-37px 2px 26px #222223;',
      allowanceCardShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.15)',
    },
    // reward shadow should be removed once referral reward done

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '8rem',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
    boxShadow: ['responsive', 'hover', 'focus'],
  },
  corePlugins: {
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false,
  },
  grayscale: {
    10: '10%',
  },
  // safelist: ["bg-primary-700", "text-blue", "bg-primary-500", "bg-primary-900", "text-black"],
};