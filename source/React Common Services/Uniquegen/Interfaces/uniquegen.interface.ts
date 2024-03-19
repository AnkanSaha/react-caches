// Interfaces for uniquegen.ts

// global TypeScript types
type num = number; // Type for number
type bool = boolean; // Type for boolean
type str = string; // Type for string

// global TypeScript types
export type Generate = {
	randomNumber: (length: num, WithZero: bool, CustomNumbers: num[] | undefined) => num;
	randomWord: (length: num, isCAPITAL: bool, CustomWords: str[] | undefined) => str;
	randomSymbol: (length: num, CustomSymbols: str[] | undefined) => str;
	randomMixed: (length: num, isCAPITAL: bool, CustomMixeds: str[] | undefined) => str;
	randomBoolean: () => bool;
};
