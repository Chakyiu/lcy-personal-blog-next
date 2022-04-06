import styled from 'styled-components/macro'

interface IFullPageLayout {
  hasHeader?: boolean
}

const SContainer = styled.div<{ hasHeader?: boolean }>`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme, hasHeader }) => (hasHeader ? theme.headerHeight : '0px')};
  display: flex;
  justify-content: center;
`

const SWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const FullPageLayout: React.FC<IFullPageLayout> = ({ children, hasHeader }) => {
  return (
    <SContainer hasHeader={hasHeader}>
      <SWrapper>{children}</SWrapper>
    </SContainer>
  )
}

export default FullPageLayout
