export const indexReducer = (state, action) => {
    switch (action.type) {
        case "increment": return state + 1
        case "decrement": return state - 1
        default: throw new Error("should never go here")
    }
}