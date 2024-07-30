import {
	Player,
	PlayerEvent,
	PlayerState,
} from '@lottiefiles/react-lottie-player'
import type React from 'react'
import { useState } from 'react'

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
		if (event === PlayerEvent.Load || event === PlayerEvent.Error) {
			setIsLoading(false)
		}
	}

	const handleState = (state: PlayerState) => {
		if (state === PlayerState.Loading) {
			setIsLoading(true)
		} else if (state === PlayerState.Playing || state === PlayerState.Stopped) {
			setIsLoading(false)
		}
	}

	return (
		<div style={{ position: 'relative', ...style }}>
			<div
				className={`absolute inset-0 flex items-center justify-center transition ${styleType === 'primary' ? 'bg-blue-600' : 'bg-red-600'}`}
			>
				<div
					className={`animate ${isLoading ? 'animate-bounce transition' : 'animate-none'}`}
				>
					<div
						className={`size-24 rounded-full lg:size-40 ${styleType === 'primary' ? 'bg-blue-800' : 'bg-red-800'}`}
					></div>
				</div>
			</div>

			<Player
				autoplay
				loop={true}
				src={animationUrl}
				rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
				background="transparent"
				className="size-28 md:size-48"
				style={{ ...style }} // Use the provided style and set width and height to 100%
				keepLastFrame={true}
				onEvent={handleEvent} // Handle the event to set loading state
				onStateChange={handleState}
			/>
		</div>
	)
}

export default LottieAnimation
