import { useState } from 'react'
import LottieAnimation from '~/components/atoms/LottieAnimation'

interface UserCardProps {
	onClick: () => void
	title?: string
	subtitle: string
	description: string
	animationUrl: string
	hoverAnimationUrl: string
	styleType?: 'primary' | 'secondary'
}

const UserCard: React.FC<UserCardProps> = ({
	onClick,
	title,
	subtitle,
	description,
	animationUrl,
	hoverAnimationUrl,
	styleType = 'secondary',
}) => {
	const [isHovered, setIsHovered] = useState(false)
	const titleWords = title ? title.split(' ') : ''
	const formattedTitle =
		titleWords.length > 1 ? (
			<>
				{titleWords[0]}
				<br />
				{Array.isArray(titleWords) ? titleWords.slice(1).join(' ') : titleWords}
			</>
		) : (
			title
		)

	const handleMouseEnter = (e: React.MouseEvent) => {
		e.stopPropagation() // Stop event propagation
		setIsHovered(true)
	}

	const handleMouseLeave = (e: React.MouseEvent) => {
		e.stopPropagation() // Stop event propagation
		setIsHovered(false)
	}

	const subtitleColor =
		styleType === 'primary' ? 'text-blue-500' : 'text-red-500'
	const borderColor =
		styleType === 'primary' ? 'hover:border-blue-500' : 'hover:border-rose-500'

	return (
		<div
			className={`relative cursor-pointer border-2 border-b-gray-900 border-l-stone-700 border-r-gray-800 border-t-stone-800 transition-transform duration-300 ease-in-out hover:-translate-y-1 ${borderColor}`}
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			role="button"
			tabIndex={0}
			onKeyDown={event => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault()
					onClick()
				}
			}}
		>
			<div>
				<LottieAnimation
					animationUrl={isHovered ? hoverAnimationUrl : animationUrl}
					loop={!isHovered}
					styleType={styleType}
				/>

				<div className=" select-nonee ">
					{((isHovered && styleType == 'primary') ||
						styleType == 'secondary') &&
					title ? (
						<>
							<div>
								<p
									className={`font-semibold ${subtitleColor} absolute inset-x-0 top-0 bg-gradient-to-b from-black to-transparent p-4 text-right  md:text-lg lg:text-xl`}
								></p>
							</div>
							<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t  from-black to-transparent p-4">
								<h2 className="font-bold text-white transition duration-300 ease-in-out md:text-xl lg:text-4xl">
									<span className="drop-shadow-2xl [text-shadow:_0_3px_0_rgb(0_0_0_/70%)]">
										{formattedTitle}
									</span>
								</h2>
								<p
									className={`font-semibold ${subtitleColor} bottom-0 md:text-lg lg:text-xl`}
								>
									<span className="">{subtitle}</span>
								</p>
							</div>
						</>
					) : (
						<>
							<div>
								<p
									className={`font-semibold ${subtitleColor} absolute inset-x-0 top-0 bg-gradient-to-b from-black to-transparent p-4 text-right  md:text-lg lg:text-xl`}
								></p>
							</div>
							<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t  from-black to-transparent p-4">
								<h2 className="font-bold text-white transition duration-300 ease-in-out md:text-xl lg:text-4xl">
									<span className="drop-shadow-2xl [text-shadow:_0_3px_0_rgb(0_0_0_/70%)]">
										{formattedTitle}
									</span>
								</h2>
								<p
									className={`font-semibold ${subtitleColor} bottom-0 md:text-lg lg:text-xl`}
								>
									<span className="">{subtitle}</span>
								</p>
							</div>
						</>
					)}
					{/* <p className="text-white">{description}</p>
        <p className="text-gray-300">What's good 😎</p> */}
				</div>
			</div>
		</div>
	)
}
export default UserCard
