import centsToDollarConverter from './centsToDollarConverter'
describe('centsToDollarConverter', () => {
	it('converts cents to dollars', () => {
		expect(centsToDollarConverter(2500)).toBe(25)
		expect(centsToDollarConverter(3050)).toBe(30.5)
		expect(centsToDollarConverter(1847)).toBe(18.47)
		expect(centsToDollarConverter(0)).toBe(0)
		expect(centsToDollarConverter(334950)).toBe(3349.5)
	})
})
