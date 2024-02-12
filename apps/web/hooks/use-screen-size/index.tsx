'use client'

import { useCallback, useEffect, useState } from 'react'

const screenConfig: Record<ScreenWidth, ScreenSize> = {
	'1024': 'lg',
	'768': 'md',
	'320': 'sm',
}

export type ScreenSize = 'sm' | 'md' | 'lg'
export type ScreenWidth = '1024' | '768' | '320'

export interface ScreenSizeState {
	width: number
	height: number
	size: 'sm' | 'md' | 'lg'
}

const useScreen = () => {
	const [screenSize, setScreenSize] = useState<ScreenSizeState | undefined>()

	const handleResize = useCallback(() => {
		const width = window.innerWidth
		setScreenSize({
			width,
			height: window.innerHeight,
			size: screenConfig[
				(Object.keys(screenConfig)
					.reverse()
					.find((w) => parseInt(w) < width) ?? '320') as ScreenWidth
			],
		})
	}, [])

	useEffect(() => {
		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return screenSize
}

export default useScreen
