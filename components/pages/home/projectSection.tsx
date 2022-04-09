import styled from 'styled-components/macro'

const SProjectSectionContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.page.home.projectBackground};
`

const STitle = styled.h1``

const ProjectSection = () => {
  return <SProjectSectionContainer></SProjectSectionContainer>
}

export default ProjectSection
