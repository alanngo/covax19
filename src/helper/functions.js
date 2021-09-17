/**
 * 
 * @param {Array} arr 
 * @param {string} emoji 
 * @returns {JSX}
 */
export const enumerate = (arr, emoji) =>(arr?arr.map(e =><div className="txtVal" key={e}>{`${emoji}  ${e} `}</div>):"")

/**
 * 
 * @param {Date} date 
 * @returns {boolean}
 */
export const inFuture = (date) => date.setHours(0,0,0,0) > new Date().setHours(0,0,0,0)

/**
 * 
 * @param {string} myString 
 * @param {string} compareTo 
 */
const ignoreCase = (myString, compareTo) => myString.toLowerCase() ===compareTo.toLowerCase()
/**
 * 
 * @param {Array} array 
 * @returns {boolean}
 */
export const hasSymptoms = (array) => 
array && 
array.length> 0 
&&
!(
    array.some(e => ignoreCase(e, "none")) ||
    array.some(e => ignoreCase(e, "no")) ||
    array.some(e => ignoreCase(e, "n/a")) ||
    array.some(e => ignoreCase(e, "na")) ||
    array.some(e => e==="")
)
