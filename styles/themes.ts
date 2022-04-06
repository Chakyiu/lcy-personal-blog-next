import vars from './vars'

export const lightTheme = {
  vars: { ...vars },
  colors: {
    body: '#ffffff',
    text: '#363537',
    background: '#363537',
    header: {
      boxShadow: '0 5px 20px -10px #000',
      selectedNavBar: '#000000',
    },
    page: {
      home: {
        bannerBackground: '#70bdc2',
      },
    },
  },
}

export const darkTheme = {
  vars: { ...vars },
  colors: {
    body: '#363537',
    text: '#fafafa',
    background: '#999',
    header: {
      boxShadow: '0 5px 20px -10px #000',
      selectedNavBar: '#000000',
    },
    page: {
      home: {
        bannerBackground: '#70bdc2',
      },
    },
  },
}

export type TTheme = typeof lightTheme
