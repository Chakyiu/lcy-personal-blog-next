import styled from 'styled-components/macro'

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: ${({ theme }) => theme.vars.headerHeight};
  display: flex;
  justify-content: center;
`

const SWrapper = styled.div`
  width: 100%;
  padding: 40px 10%;
  height: 100%;
`

const ContentPageLayout: React.FC = ({ children }) => {
  return (
    <SContainer>
      <SWrapper>{children}</SWrapper>
    </SContainer>
  )
}

export default ContentPageLayout
