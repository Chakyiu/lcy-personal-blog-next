import FullPageLayout from '@components/layout/fullPageLayout'
import Header from '@components/header'
import styled from 'styled-components/macro'

import Banner from './banner'

const STest = styled.div`
  width: 100%;
  height: 1000px;
`

const HomeComponent: React.FC = () => {
  return (
    <>
      <Header />
      <FullPageLayout hasHeader={true}>
        <Banner />
        <STest />
      </FullPageLayout>
    </>
  )
}

export default HomeComponent
