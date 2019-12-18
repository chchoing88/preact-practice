import { useState, useEffect } from 'preact/hooks'
import { eventApi } from '../api'
import { API_STATUS } from '../constants'

export const useEvent = () => {
  const [eventData, setEventData] = useState(null)
  const [apiStatus, setApiStatus] = useState(API_STATUS.PENDING)
  const [error, setError] = useState({
    status: false,
    data: null,
    message: '',
  })

  useEffect(async () => {
    try {
      const eventJson = await eventApi.fetch()
      setEventData(eventJson)
    } catch (e) {
      setError({
        status: true,
        data: e,
        message: 'Event API Fail',
      })
    }

    setApiStatus(API_STATUS.DONE)
  }, [])

  return { eventData, error, apiStatus }
}
