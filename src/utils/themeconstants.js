// eslint-disable-next-line import/prefer-default-export
const theme = {
  colors: {
    primary: '#161428',
    yellow: '#FFA500',
    red: '#F20050',
    green: '#24DD18',
    violet: '#701CF1',
    bgPrimary: '#000032',
    bgSecondary: '#F6F9FC',
    bgTertiary: '#ECEBE4',
    bgMosaismic: '#9AC5D6',
    bgChronosome: '#000',
    bgEcho: '#FFF',
  },
  shadows: {
    default: '0 0 30px rgba(0,0,0,0.10)',
    light: {
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { height: 0, width: 0 },
      elevation: 1,
    },
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
  },
  space: {
    sm: 8,
    md: 16,
    lg: 32,
  },
  dim: {
    headerHeight: 60,
    maxWidth: 1440,
    smallmobilebreakpoint: 568,
    mobilebreakpoint: 768,
  },
  HEADER_HEIGHT: 70,
};

export default theme;
