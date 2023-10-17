import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: '#2E2921',
        undefined: '#FFFFFF',
        common: '#FFFFFF',
        magic: '#6969FF',
        rare: '#FFFF00',
        legendary: '#BF642F',
        set: '#00FF00'
      },
      backgroundImage: {
        "undefined-name": "url('/images/nameplates/base.jpg')",
        "common-name": "url('/images/nameplates/common.jpg')",
        "magic-name": "url('/images/nameplates/magic.jpg')",
        "rare-name": "url('/images/nameplates/rare.jpg')",
        "legendary-name": "url('/images/nameplates/legendary.jpg')",
        "set-name": "url('/images/nameplates/set.jpg')",
        "undefined-icon": "url('/images/icons/base.png')",
        "common-icon": "url('/images/icons/common.png')",
        "magic-icon": "url('/images/icons/magic.png')",
        "rareicone": "url('/images/icons/rare.png')",
        "legendary-icon": "url('/images/icons/legendary.png')",
        "set-icon": "url('/images/icons/set.png')",
      },
    },
  },
  safelist: [
    'border-undefined',
    'border-common',
    'border-rare',
    'border-magic',
    'border-legendary',
    'border-set',
    'text-undefined',
    'text-common',
    'text-rare',
    'text-magic',
    'text-legendary',
    'text-set',
    'bg-undefined-name',
    'bg-common-name',
    'bg-rare-name',
    'bg-magic-name',
    'bg-legendary-name',
    'bg-set-name',
    'bg-undefined-icon',
    'bg-common-icon',
    'bg-rare-icon',
    'bg-magic-icon',
    'bg-legendary-icon',
    'bg-set-icon',
  ],
  plugins: [],
}
export default config
