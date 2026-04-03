import React from 'react'
import { Tldraw } from 'tldraw'
import { useSyncDemo } from '@tldraw/sync'
import { useParams } from 'react-router'
import 'tldraw/tldraw.css'

const RealTimeComp = () => {
    let {roomId} = useParams()
    const store = useSyncDemo({ roomId: 'insert-any-string-here' })
  return (
    <>
         <div style={{ position: 'fixed', inset: 0 }}>
                <Tldraw store={store}/>
          </div> 
    </>
  )
}

export default RealTimeComp
