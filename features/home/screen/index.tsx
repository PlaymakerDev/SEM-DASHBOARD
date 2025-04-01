import React from 'react'

interface Props {

}

const HomeScreen: React.FC<Props> = (props) => {
	const { } = props

	return (
		<h1>TEST SAMPLE</h1>
	)
}

export default React.memo<Props>(HomeScreen)
