/**
 * compare to strings ignore case
 * @param {string} myString 
 * @param {string} compareTo 
 * @returns {boolean}
 */
 const ignoreCase = (myString, compareTo) => myString.toLowerCase() === compareTo.toLowerCase()
 
/**
 * enumerate symptoms and filter 'no symptoms' statements
 * @param {Array} arr 
 * @param {string} emoji 
 * @returns {JSX}
 */
export const enumerate = (arr=[], emoji) => (arr ? arr
    .filter(e =>!ignoreCase(e, "n/a"))
    .filter(e =>!ignoreCase(e, "none"))
    .filter(e =>!ignoreCase(e, "no"))
    .filter(e =>!ignoreCase(e, "nope"))
    .filter(e =>!ignoreCase(e, "na"))
    .filter(e =>!ignoreCase(e, ""))
    .map(e => <div className="txtVal" key={e}>{`${emoji}  ${e} `}</div>) : "")

/**
 * valid date = any date after 2021 up to today
 * @param {Date} date 
 * @returns {boolean}
 */
export const invalidDate = (date) => date.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0) || date.getFullYear() < 2021

/**
 * age cannot be negative
 * @param {number} age 
 * @returns {boolean}
 */
export const invalidAge = (age) => age < 0

const getMonth = (monthNum) =>
    ({
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    })[monthNum]

/**
 * changes date to proper string format
 * @param {Date} date 
 * @returns {String} yyyy-mm-dd
 */
const parseDate = (date) => String(date).substring(0, 10)

export const beautifyDate = (date) => {
    let arrDate = parseDate(date).split("-")
    let year = arrDate[0]
    let month = getMonth(Number(arrDate[1]))
    let day = arrDate[2]
    return `${month} ${day} ${year}`
}


/**
 * convert to titlecase
 * @param {string} myString 
 * @returns {string}
 */
export const toTitle = (myString) => myString.replace(/\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())

/**
 * update current state using spread operator
 * @param {Object} obj 
 * @param {string} key 
 * @param {any} value 
 * @returns {Object}
 */
export const updateState = (obj, key, value) =>({ ...obj, [`${key}`]: value })
