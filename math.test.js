import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './math.js';

describe("math functions", () => {
    it("adds correctly", () => {
        expect(add(1, 2)).toBe(3)
    })

    it("subtracts correctly", () => {
        expect(subtract(5, 3)).toBe(2)
    })

    it("multiplies correctly", () => {
        expect(multiply(2, 3)).toBe(6)
    })

    it("divides correctly", () => {
        expect(divide(6, 2)).toBe(3)
    })

    it("throws an error when dividing by zero", () => {
        expect(() => divide(6, 0)).toThrow("Division by zero is not allowed.")
    })
})