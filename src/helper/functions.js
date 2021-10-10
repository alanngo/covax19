/**
 * 
 * @param {Array} arr 
 * @param {string} emoji 
 * @returns {JSX}
 */
export const enumerate = (arr, emoji) => (arr ? arr.map(e => <div className="txtVal" key={e}>{`${emoji}  ${e} `}</div>) : "")

/**
 * 
 * @param {Date} date 
 * @returns {boolean}
 */
export const invalidDate = (date) => date.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0) || date.getFullYear() < 2021

/**
 * 
 * @param {number} age 
 * @returns {boolean}
 */
export const invalidAge = (age) => age < 0

/**
 * 
 * @param {Date} date 
 * @returns {String}
 */
export const parseDate = (date) => String(date).substring(0, 10)

/**
 * 
 * @param {string} myString 
 * @param {string} compareTo 
 */
const ignoreCase = (myString, compareTo) => myString.toLowerCase() === compareTo.toLowerCase()
/**
 * 
 * @param {Array} array 
 * @returns {boolean}
 */
export const hasSymptoms = (array) =>
    array &&
    array.length > 0
    &&
    !(
        array.some(e => ignoreCase(e, "none")) ||
        array.some(e => ignoreCase(e, "no")) ||
        array.some(e => ignoreCase(e, "n/a")) ||
        array.some(e => ignoreCase(e, "na")) ||
        array.some(e => e === "")
    )

/**
 * 
 * @param {string} myString 
 * @returns {string}
 */
export const toTitle = (myString) => myString.replace( /\w\S*/g, 
    (txt) =>txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())