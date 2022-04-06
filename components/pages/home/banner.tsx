import styled from 'styled-components/macro'

const SBannerContainer = styled.div`
  width: 100%;
  height: 800px;
  background-color: ${({ theme }) => theme.page.home.bannerBackground};
`

const Banner: React.FC = () => {
  return <SBannerContainer></SBannerContainer>
}

export default Banner
