const { price, percentage } = require("hof/format")

describe("Test Functions", () => {
    test("test price format",() => {
        const value = 23
        const test = price(value)
        expect(test).toBe("$23")
    })

    test("test percentage format",() => {
        const value = 2.56
        const test = percentage(value)
        expect(test).toBe("2.6%")
    })
})