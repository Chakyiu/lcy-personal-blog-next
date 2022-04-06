import styled, { css } from 'styled-components/macro'
import { navLinkData } from './navLinkData'
import { INavItem } from './types'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

const SSelectedNav = styled.div<{ isShow: boolean }>`
  width: 80%;
  height: 20%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.header.selectedNavBar};
  transition: width 0.2s ease-in-out;

  ${({ isShow }) =>
    !isShow &&
    css`
      width: 0%;
    `}
`

const SNav = styled.a`
  position: relative;
  margin: 0;
  cursor: pointer;

  & + & {
    margin-left: 16px;
  }

  :hover {
    ${SSelectedNav} {
      width: 80%;
    }
  }
`

const Nav: React.FC = () => {
  const router = useRouter()

  const checkCurrentNav = useCallback(
    (url: string) => {
      let currentPath = router.pathname.split('/')
      return currentPath[1] === url.split('/')[1]
    },
    [router]
  )

  const onNavClick = useCallback(
    (url: string) => {
      router.push(url)
    },
    [router]
  )

  return (
    <>
      {navLinkData.map((item: INavItem, index) => {
        return (
          <SNav key={`nav-item-${index}`} onClick={() => onNavClick(item.url)}>
            {item.name}
            <SSelectedNav isShow={checkCurrentNav(item.url)} />
          </SNav>
        )
      })}
    </>
  )
}

export default Nav
