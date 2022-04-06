import styled from 'styled-components/macro'

const SBannerContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.page.home.bannerBackground};

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const SImgContainer = styled.div`
  margin: 40px;
  width: 400px;
  height: 400px;
  background-color: #cfcfcf;
  border: 8px solid #ffffff;
  border-radius: 50%;
`

const STitle = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: normal;
`

const SSubTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 300;
`

const SDesc = styled.p`
  font-size: 16px;
  font-weight: 100;
`

const SDescriptionContainer = styled.div`
  margin: 40px;
  width: 400px;
`

const Banner: React.FC = () => {
  return (
    <SBannerContainer>
      <SImgContainer></SImgContainer>
      <SDescriptionContainer>
        <STitle>
          I'm <strong>CHAK YIU</strong>
        </STitle>
        <SSubTitle>A Full Stack Developer based on Hong Kong</SSubTitle>
        <SDesc>Passionate and energetic developer with a strong interest in programming</SDesc>
      </SDescriptionContainer>
    </SBannerContainer>
  )
}

export default Banner
