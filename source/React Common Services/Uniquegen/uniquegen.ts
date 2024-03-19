/**
 * @fileoverview This file contains the implementation of the `Generate` object that provides functions for generating random numbers, words, symbols, mixed strings, and booleans.
 * @module uniquegen
 * @license COPYRIGHT BY @AnkanSaha
 * @license COPYRIGHT YEAR 2024
 */

/**
 * Import the Random Number Generator Function.
 * @internal
 */
import GenerateNumberID from './Function/NumFunction';

/**
 * Import the Random Word Generator Function.
 * @internal
 */
import GenerateWordID from './Function/WordFunction';

/**
 * Import the Random Symbol Generator Function.
 * @internal
 */
import GenerateSymbolID from './Function/SymbolFunction';

/**
 * Import the Random Mixed Generator Function.
 * @internal
 */
import GenerateMixedID from './Function/MixedFunction';

/**
 * Import the Random Boolean Generator Function.
 * @internal
 */
import GenerateBooleanID from './Function/BooleanFunction';

/**
 * Import the Generate Interface.
 * @internal
 */
import {Generate} from './Interfaces/uniquegen.interface';

/**
 * This code block is creating an object named `Generate` that implements the `Generate` interface. It
 * is assigning the four functions `GenerateNumberID`, `GenerateWordID`, `GenerateSymbolID`, and
 * `GenerateMixedID` to the properties `randomNumber`, `randomWord`, `randomSymbol`, and `randomMixed`
 * respectively. These functions are exported from separate files and are used to generate random
 * numbers, words, symbols, and mixed strings. The `Generate` object is then exported as the default
 * export of the module.
 */
const Generate: Generate = Object.freeze({
	/**
     * Generate a random number.
     * @function
     * @name Generate.randomNumber
     * @returns {number} The generated random number.
     */
	randomNumber: GenerateNumberID,

	/**
     * Generate a random word.
     * @function
     * @name Generate.randomWord
     * @returns {string} The generated random word.
     */
	randomWord: GenerateWordID,

	/**
     * Generate a random symbol.
     * @function
     * @name Generate.randomSymbol
     * @returns {string} The generated random symbol.
     */
	randomSymbol: GenerateSymbolID,

	/**
     * Generate a random mixed string.
     * @function
     * @name Generate.randomMixed
     * @returns {string} The generated random mixed string.
     */
	randomMixed: GenerateMixedID,

	/**
     * Generate a random boolean value.
     * @function
     * @name Generate.randomBoolean
     * @returns {boolean} The generated random boolean value.
     */
	randomBoolean: GenerateBooleanID,
});

/**
 * Export the Function for Random Number.
 * @public
 */
export const randomNumber = GenerateNumberID;

/**
 * Export the Function for Random Word.
 * @public
 */
export const randomWord = GenerateWordID;

/**
 * Export the Function for Random Symbol.
 * @public
 */
export const randomSymbol = GenerateSymbolID;

/**
 * Export the Function for Random Mixed.
 * @public
 */
export const randomMixed = GenerateMixedID;

/**
 * Export the Function for Random Boolean.
 * @public
 */
export const randomBoolean = GenerateBooleanID;

/**
 * Export the default function.
 * @public
 */
export default Generate;
