import { invalidAge, toTitle } from "./helper/functions"


test('testing invalid age', () => {
  const age = -1
  expect(invalidAge(age)).toBeTruthy()
})

test('testing valid age', () => {
  const age = 1
  expect(invalidAge(age)).toBeFalsy()
})

test('testing title case', () => {
  const text = "spongebob"
  expect(toTitle(text)).toBe("Spongebob")
})