import styled from 'styled-components/macro'

import Nav from './components/nav'

interface IHeader {
  isTransparent?: boolean
}

const SContainer = styled.div<{ isTransparent?: boolean }>`
  width: 100%;
  height: ${(props) => props.theme.headerHeight};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: ${({ theme, isTransparent }) =>
    isTransparent ? 'transparent' : theme.body};
  box-shadow: ${({ isTransparent }) =>
    isTransparent ? 'none' : '0 5px 20px -10px #000'};
`

const SWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`

const Header: React.FC<IHeader> = ({ isTransparent }) => {
  return (
    <SContainer isTransparent={isTransparent}>
      <SWrapper>
        <Nav />
      </SWrapper>
    </SContainer>
  )
}

export default Header
