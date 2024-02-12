import { Player } from './interface'

export const data: Player[] = [
	{
		title: 'ATHLETES',
		image: 'american-football-player',
		imageDetail: {
			sm: {
				width: 218,
				height: 281,
			},
			md: {
				width: 518,
				height: 719,
			},
			lg: {
				width: 678,
				height: 950,
			},
		},
		contents: [
			{
				title: 'CONNECTION',
				description: 'Connect with coaches directly, you can ping coaches to view profile.',
			},
			{
				title: 'COLLABORATION',
				description:
					'Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
			},
			{
				title: 'GROWTH',
				description:
					'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
			},
		],
	},
	{
		title: 'PLAYERS',
		image: 'basket-ball-player',
		imageDetail: {
			sm: {
				width: 302,
				height: 250,
			},
			md: {
				width: 691,
				height: 568,
			},
			lg: {
				width: 991,
				height: 815,
			},
		},
		contents: [
			{
				title: 'CONNECTION',
				description:
					'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
			},
			{
				title: 'COLLABORATION',
				description: 'Work with recruiter to increase your chances of finding talented athlete.',
			},
			{
				title: 'GROWTH',
				description: 'Save your time, recruit proper athlets for your team.',
			},
		],
	},
]
