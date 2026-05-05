// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber: "(123) 456-7890" is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: "555-1234" is a valid phone number', () => {
  expect(isPhoneNumber('555-1234')).toBe(true);
});

test('isPhoneNumber: "abc-defg" is not a valid phone number', () => {
  expect(isPhoneNumber('abc-defg')).toBe(false);
});

test('isPhoneNumber: "12345" is not a valid phone number', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});

// isEmail
test('isEmail: "test@example.com" is a valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail: "abc@test.io" is a valid email', () => {
  expect(isEmail('abc@test.io')).toBe(true);
});

test('isEmail: "notanemail" is not a valid email', () => {
  expect(isEmail('notanemail')).toBe(false);
});

test('isEmail: "test@example.toolong" is not a valid email (TLD too long)', () => {
  expect(isEmail('test@example.toolong')).toBe(false);
});

// isStrongPassword
test('isStrongPassword: "Password1" is a strong password', () => {
  expect(isStrongPassword('Password1')).toBe(true);
});

test('isStrongPassword: "abc_123" is a strong password', () => {
  expect(isStrongPassword('abc_123')).toBe(true);
});

test('isStrongPassword: "1abc" is not a strong password (must start with a letter)', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('isStrongPassword: "abc" is not a strong password (too short)', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// isDate
test('isDate: "12/25/2024" is a valid date', () => {
  expect(isDate('12/25/2024')).toBe(true);
});

test('isDate: "1/1/2020" is a valid date', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('isDate: "12-25-2024" is not a valid date (wrong separator)', () => {
  expect(isDate('12-25-2024')).toBe(false);
});

test('isDate: "2024/01/01" is not a valid date (wrong format)', () => {
  expect(isDate('2024/01/01')).toBe(false);
});

// isHexColor
test('isHexColor: "#fff" is a valid hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor: "abcdef" is a valid hex color', () => {
  expect(isHexColor('abcdef')).toBe(true);
});

test('isHexColor: "fffff" is not a valid hex color (wrong length)', () => {
  expect(isHexColor('fffff')).toBe(false);
});

test('isHexColor: "#xyz" is not a valid hex color (non-hex characters)', () => {
  expect(isHexColor('#xyz')).toBe(false);
});
