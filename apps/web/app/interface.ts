export type ImageSize = 'sm' | 'md' | 'lg'

export interface ImageDetail {
	width: number
	height: number
}

export interface Player {
	title: string
	image: string
	imageDetail: Record<ImageSize, ImageDetail>
	contents: Array<PlayerContent>
}

export interface PlayerContent {
	title: string
	description: string
}
