import { fontRoboto } from '@/config/fonts'
import '@/styles/globals.css'
import clsx from 'clsx'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
	title: 'news',
	description: 'news',
}

export default function RootLayout(props: PropsWithChildren) {
	return (
		<html lang="en" className={fontRoboto.className}>
			<head />
			<body
				suppressHydrationWarning
				className={clsx('min-h-screen light text-foreground bg-background antialiased')}
			>
				{props.children}
			</body>
		</html>
	)
}
