const colors = {
  canvas: '#F8F6F2',
  surface: '#F8F6F2',
  surfaceAlt: '#EAF2EA',
  surfaceMuted: '#EDEAE3',
  text: '#1C1C1A',
  textMuted: '#8A8780',
  line: '#DDD9D0',
  primary: '#5B8C5A',
  primarySoft: '#EAF2EA',
  accent: '#D4A843',
  success: '#3A6439',
  danger: '#D95B5B',
  warning: '#D4A843',
  white: '#FFFFFF',
  black: '#1C1C1A',
}

const radius = {
  xs: 4,
  sm: 8,
  md: 10,
  lg: 14,
  xl: 20,
  pill: 999,
}

const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
}

const shadow = {
  soft: '0 18px 40px rgba(37, 29, 20, 0.12)',
  card: '0 10px 24px rgba(37, 29, 20, 0.08)',
}

const device = {
  phone: {
    width: 390,
    height: 844,
  },
  desktop: {
    width: 1440,
    height: 900,
  },
}

const font = {
  sans: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  hand: '"Caveat", "Segoe Print", cursive',
  size: {
    xs: 10,
    sm: 11,
    md: 12,
    lg: 13,
    xl: 14,
    xxl: 18,
    display: 28,
    hero: 42,
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1,
    snug: 1.2,
    normal: 1.4,
  },
}

const layout = {
  mobilePadding: 18,
  desktopPadding: 28,
  sectionGap: {
    mobile: 18,
    desktop: 24,
  },
  cardPadding: {
    sm: 14,
    md: 18,
    lg: 28,
  },
}

const motion = {
  fast: '0.2s',
  base: '0.3s',
  easing: 'ease',
}

const zIndex = {
  base: 1,
  nav: 10,
  sticky: 20,
  overlay: 100,
}

export const theme = {
  colors,
  radius,
  spacing,
  shadow,
  device,
  font,
  layout,
  motion,
  zIndex,
}

export const mobileTabs = [
  { key: 'home', label: 'Home' },
  { key: 'catalog', label: 'Catalog' },
  { key: 'cart', label: 'Cart' },
  { key: 'profile', label: 'Profile' },
]

export const desktopLinks = ['Home', 'Catalog', 'Orders', 'Profile']

export const productTags = ['New drop', 'Fast ship', 'Best seller']
