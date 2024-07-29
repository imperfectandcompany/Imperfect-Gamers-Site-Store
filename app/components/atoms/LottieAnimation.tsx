import { Player, PlayerEvent } from '@lottiefiles/react-lottie-player'
import React, { useState, useEffect } from 'react'

interface LottieAnimationProps {
	animationUrl: string
	style?: React.CSSProperties
	loop: boolean
	styleType?: 'primary' | 'secondary'
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
	animationUrl,
	style,
	loop,
	styleType = 'secondary',
}) => {
	const [isLoading, setIsLoading] = useState(true)

	const handleEvent = (event: PlayerEvent) => {

	}

	return (
		<div style={{ position: 'relative', ...style }}>
			{isLoading && (
				<div className={`absolute inset-0 flex items-center justify-center ${styleType === 'primary' ? 'bg-blue-900' : 'bg-yellow-900'}`}>
					<div className="animate-pulse">
						<div className={`h-40 w-40 rounded-full ${styleType === 'primary' ? 'bg-blue-800' : 'bg-yellow-800'}`}></div>
					</div>
				</div>
			)}
			<Player
				autoplay
				loop={loop}
				src={animationUrl}
				rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
				background="transparent"
				className="size-28 md:size-48"
				style={{ ...style }} // Use the provided style and set width and height to 100%
				keepLastFrame={true}
				onEvent={handleEvent} // Handle the event to set loading state
			/>
		</div>
	)
}

export default LottieAnimation
