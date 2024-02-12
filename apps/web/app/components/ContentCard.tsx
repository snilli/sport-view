import clsx from 'clsx'
import { FC } from 'react'

const lBgColorClasses: Record<number, string> = {
	0: 'md:bg-white',
	1: 'md:bg-[#F5F4F9]',
	2: 'md:bg-[#5E3DB3]',
}

const rBgColorClasses: Record<number, string> = {
	0: 'md:bg-white',
	1: 'md:bg-[#F5F4F9]',
	2: 'md:bg-[#090C35]',
}

export interface ContentCardProps {
	index: number
	title: string
	description: string
	direction?: 'L' | 'R'
}
const ContentCard: FC<ContentCardProps> = ({ index, title, description, direction }) => {
	const isL = direction === 'L'
	const lastContent = index === 2
	return (
		<div
			className={clsx(
				'py-[3.75rem] h-full w-full md:py-0',
				isL ? lBgColorClasses[index] : rBgColorClasses[index],
			)}
		>
			<div
				className={clsx(
					'h-full flex flex-wrap content-center md:my-0 lg:max-w-[30rem] xl:max-w-[38rem] 2xl:max-w-[45rem]',
					isL ? 'lg:mr-auto lg:pr-0' : 'md:pl-[1.875rem] lg:ml-auto lg:pl-0',
				)}
			>
				<div className="flex-none flex flex-col justify-evenly mr-[0.625rem] content-center">
					<p
						className={clsx(
							'text-[0.875rem]/[1.0256rem] tracking-[0.0938rem] md:text-[1.125rem]/[1.3181rem] text-black',
							lastContent && !isL ? 'md:text-[#8F6BE8]' : 'md:text-black',
						)}
					>{`0${index + 1}`}</p>
					<div
						className={clsx(
							'h-[5px] rounded-[2.5px] bg-[#603EBE]',
							!lastContent ? 'md:bg-[#603EBE]' : 'md:bg-white',
						)}
					></div>
				</div>
				<h2 className="flex-grow text-[1.75rem]/[2.0506rem] text-[#C2C2C2] tracking-[0.0938rem] md:text-[2.25rem]/[2.6369rem]">
					{title}
				</h2>
				<p
					className={clsx(
						'w-full text-[0.938rem]/[1.0987rem] mt-5 md:text-[1.125rem]/[1.75rem] lg:text-[1.25rem]/[1.75rem] text-blac',
						!lastContent ? 'md:text-black' : 'md:text-white',
					)}
				>
					{description}
				</p>
			</div>
		</div>
	)
}

export default ContentCard
