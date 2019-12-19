import { h, render, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { useEvent } from '../hooks/useEvent'
import { API_STATUS } from '../constants'

import '../assets/style/reset.css'

const LOADING_THRESHOLD = 1000

const MainErrorBoundary = ({ error, apiStatus, children }) => {
  if (error.status && apiStatus === API_STATUS.DONE) {
    return <h1>에러났어요</h1>
  }

  return <>{children}</>
}

const MainLoading = ({ apiStatus, children }) => {
  const [startLoading, setStartLoading] = useState(false)

  if (apiStatus === API_STATUS.PENDING && !startLoading) {
    setTimeout(() => {
      setStartLoading(true)
    }, LOADING_THRESHOLD)

    return <></>
  }

  if (apiStatus === API_STATUS.PENDING && startLoading) {
    return <h1>로딩중...</h1>
  }
  return <>{children}</>
}

const Main = () => {
  const { eventData, error, apiStatus } = useEvent()

  return (
    <MainErrorBoundary error={error} apiStatus={apiStatus}>
      <MainLoading apiStatus={apiStatus}>
        <img src="./static-web/mando.jpeg"></img>
        <h1>메인 좋음</h1>
        <img src="./static-web/mando.jpeg"></img>
        <h1>메인 슬픔</h1>
        {eventData ? eventData.name : null}
      </MainLoading>
    </MainErrorBoundary>
  )
}

render(<Main />, document.body)
