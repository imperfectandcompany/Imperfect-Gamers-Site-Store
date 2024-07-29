import { Player, PlayerEvent, PlayerState } from '@lottiefiles/react-lottie-player';
import React, { useState } from 'react';

interface LottieAnimationProps {
	animationUrl: string;
	style?: React.CSSProperties;
	loop: boolean;
	styleType?: 'primary' | 'secondary';
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
	animationUrl,
	style,
	loop,
	styleType = 'secondary',
}) => {
	const [isLoading, setIsLoading] = useState(true);

	const handleEvent = (event: PlayerEvent) => {
		if (event === PlayerEvent.Load || event === PlayerEvent.Error) {
			setIsLoading(false);
		}
	};

	const handleState = (state: PlayerState) => {
		if (state === PlayerState.Loading) {
			setIsLoading(true);
		} else if (state === PlayerState.Playing || state === PlayerState.Stopped) {
			setIsLoading(false);
		}
	};

	return (
		<div style={{ position: 'relative', ...style }}>
				<div className={`transition absolute inset-0 flex items-center justify-center ${styleType === 'primary' ? 'bg-blue-600' : 'bg-red-600'}`}>
				<div className={`animate ${isLoading? 'animate-bounce transition' : 'animate-none'}`}>
					<div className={`h-40 w-40 rounded-full ${styleType === 'primary' ? 'bg-blue-800' : 'bg-red-800'}`}></div>
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
	);
};

export default LottieAnimation;
