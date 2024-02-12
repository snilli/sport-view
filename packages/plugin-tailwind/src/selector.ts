import plugin from 'tailwindcss/plugin'

module.exports = plugin(({ addVariant, matchVariant }) => {
	addVariant(':after', '&::after')
	addVariant(':before', '&::before')
	matchVariant('nth', (value) => {
		return `:merge(&):nth-child(${value})`
	})
	matchVariant('not', (value) => {
		return `:merge(&):not(${value})`
	})
	matchVariant('is', (value) => {
		return `:merge(&):is(${value})`
	})
	matchVariant('where', (value) => {
		return `:merge(&):where(${value})`
	})
	matchVariant('wrap', (value) => {
		return `:merge(& ${value})`
	})
	matchVariant('child', (value) => {
		return `:merge(&>${value})`
	})
	matchVariant('follow-all', (value) => {
		return `:merge(&~)${value}`
	})
	matchVariant('follow-once', (value) => {
		return `:merge(&+)${value}`
	})
	matchVariant('.', (value) => {
		return `:merge(&.)${value}`
	})
	matchVariant('#', (value) => {
		return `:merge(&#)${value}`
	})
})
