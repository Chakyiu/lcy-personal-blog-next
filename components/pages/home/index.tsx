import { useEffect, useState } from 'react'

import FullPageLayout from '@components/layout/fullPageLayout'
import Header from '@components/header'
import styled from 'styled-components/macro'

import useScrollPosition from '@hooks/useScrollPosition'
import Banner from './banner'
import ProjectSection from './projectSection'

const STest = styled.div`
  width: 100%;
  height: 1000px;
`

const HomeComponent: React.FC = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true)
  const { scrollYPosition } = useScrollPosition()

  useEffect(() => {
    setIsHeaderTransparent(scrollYPosition > 760 ? false : true)
  }, [scrollYPosition])

  return (
    <>
      <Header isTransparent={isHeaderTransparent} />
      <FullPageLayout hasHeader={true}>
        <Banner />
        <ProjectSection />
        <STest />
      </FullPageLayout>
    </>
  )
}

export default HomeComponent
