import React from 'react'
import HomeScreen from '@/features/home/screen'

interface Props {
    
}

const HomePage: React.FC<Props> = (props) => {
const {} = props

    return (
        <div>
            <HomeScreen/>
        </div>
    )
}

export default React.memo<Props>(HomePage)
