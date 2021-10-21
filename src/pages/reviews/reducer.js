export const indexReducer = (state, action) => {
    switch (action.type) {
        case "increment": return state + 3
        case "decrement": return state - 3
        default: throw new Error("should never go here")
    }
}