export const getImageUrl = (imageName: string, size: string = 'sm') => {
	return `/images/${imageName}-${size}.webp`
}
