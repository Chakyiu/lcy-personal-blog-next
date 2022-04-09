import { useCallback, useEffect, useMemo, useState } from 'react'

type TScrollPost = {
  scrollXPosition: number
  scrollYPosition: number
  scrollXPercentage: number
  scrollYPercentage: number
}

const useScrollPosition = () => {
  const [scrollPos, setScrollPosition] = useState<TScrollPost>({
    scrollXPosition: 0,
    scrollYPosition: 0,
    scrollXPercentage: 0,
    scrollYPercentage: 0,
  })

  const getScrollData = useCallback(() => {
    {
      const windowScrollX = document.body.scrollLeft || document.documentElement.scrollLeft
      const pageWidth = document.documentElement.scrollWidth - document.documentElement.clientWidth

      const windowScrollY = document.body.scrollTop || document.documentElement.scrollTop
      const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

      return {
        scrollXPosition: windowScrollX,
        scrollYPosition: windowScrollY,
        scrollXPercentage: windowScrollX / pageWidth,
        scrollYPercentage: windowScrollY / pageHeight,
      }
    }
  }, [])

  useEffect(() => {
    const listenToScroll = () => {
      setScrollPosition(getScrollData())
    }

    window.addEventListener('scroll', listenToScroll)

    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [getScrollData])

  return scrollPos
}

export default useScrollPosition
