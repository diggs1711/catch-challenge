const centsToDollarConverter = (cents: number) => {
	return cents / 100
}

export const displayCentsAsDollars = (cents: number) => {
	return `$${centsToDollarConverter(cents)}`
}

export default centsToDollarConverter
