import { useEffect, useState } from 'react'
import video_data from './video_data.js'
import Radio from './components/Radio'
import Frame from './components/Frame'

import './App.css'

function App() {
    const [isChecked, setIsChecked] = useState('spider')
    const [frameVideo, setFrameVideo] = useState(video_data[isChecked])
    
    const choices = Object.keys(video_data).map(vid => 
        <Radio 
            key={Math.ceil(Math.random()*1000000)}
            label={vid}
            handleChange={handleChange}
            isChecked={isChecked}
        />
    )
    
    function handleChange(_event, label){
        setIsChecked(label)
        setFrameVideo(video_data[label])
    }

    return (
        <div className="App">
            <h1>Project 6: Video Player</h1>
            <div className='radio-row'>
                {choices}
            </div>
            <Frame source={frameVideo}/>
        </div>
    )
}

export default App