'use client'

import { data } from './data'

import useScreen from '@/hooks/use-screen-size'
import { getImageUrl } from '@/utils/images'
import clsx from 'clsx'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ContentCard from './components/ContentCard'

export default function Example() {
	const screen = useScreen()
	if (!screen) {
		return <>Loading ...</>
	}
	const screenSize = screen.size

	return (
		<main className="min-h-screen overflow-x-hidden">
			{data.map((player, playerIndex) => {
				const detail = player.imageDetail[screenSize]
				const direction = playerIndex % 2 ? 'R' : 'L'
				const isL = direction === 'L'

				return (
					<section
						key={playerIndex}
						className="relative mt-[1.25rem] grid h-[35.5rem] grid-cols-1 grid-rows-[3.6619rem_1fr_16.125rem] md:mt-[3.125rem] md:h-[44.375rem] md:grid-cols-3 md:grid-rows-[6.5919rem_1fr] lg:mt-[6.25rem] lg:h-[51.875rem] lg:grid-cols-2"
					>
						<div
							className={clsx(
								'z-10 flex justify-center bg-white px-5 pt-[0.9375rem] md:row-span-2 md:grid md:h-full md:w-full md:grid-cols-1 md:grid-rows-[6.5919rem_repeat(3,_minmax(0,_1fr))] md:p-0',
								{
									'md:order-first': isL,
									'md:order-2': !isL,
								},
							)}
						>
							<Image
								className={clsx(
									'absolute md:-top-[1.5625rem] lg:-top-[3.125rem] lg:flex',
									isL
										? 'md:left-[-185px] lg:left-0 lg:right-1/2'
										: 'md:right-[-250px] lg:-right-24 lg:left-1/2 xl:left-auto',
								)}
								src={getImageUrl(player.image, screen.size)}
								width={detail.width}
								height={detail.height}
								alt={player.title}
							/>
							<div className="row-span-2 bg-white" />
							<div className="bg-[#F5F4F9]" />
							<div className={clsx(direction === 'L' ? 'bg-[#5E3DB3]' : 'bg-[#090C35]')} />
						</div>
						<div
							className={clsx('order-first px-5 md:col-span-2 md:px-0 lg:col-span-1', {
								'md:pl-[1.875rem]': !isL,
							})}
						>
							<h1
								className={clsx(
									'text-[3.125rem]/[3.6619rem] text-[#E7E7E7] md:text-[5.625rem]/[6.5919rem] lg:max-w-[30rem] xl:max-w-[38rem] 2xl:max-w-[45rem]',
									isL ? 'lg:mr-auto lg:pr-0' : 'lg:ml-auto lg:pl-0',
								)}
							>
								{player.title}
							</h1>
						</div>
						<div className="order-last px-0 md:col-span-2 lg:col-span-1">
							{screenSize !== 'sm' ? (
								<div className="flex h-full flex-col items-end justify-between">
									{player.contents.map((content, contentIndex) => (
										<ContentCard
											key={contentIndex}
											direction={playerIndex % 2 ? 'R' : 'L'}
											index={contentIndex}
											title={content.title}
											description={content.description}
										/>
									))}
								</div>
							) : (
								<div className="h-full bg-[#F5F4F9] px-5">
									<Swiper
										style={{
											'--swiper-pagination-bullet-size': '0.625rem',
											'--swiper-theme-color': '#603EBE',
											'--swiper-pagination-bottom': '1rem',
										}}
										modules={[Pagination]}
										slidesPerView={1}
										pagination={{ clickable: true }}
										onSwiper={(swiper) => console.log(swiper)}
									>
										{player.contents.map((content, contentIndex) => (
											<SwiperSlide key={contentIndex}>
												<ContentCard
													key={contentIndex}
													index={contentIndex}
													title={content.title}
													description={content.description}
												/>
											</SwiperSlide>
										))}
									</Swiper>
								</div>
							)}
						</div>
					</section>
				)
			})}
		</main>
	)
}
