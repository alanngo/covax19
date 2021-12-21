import { updateState } from "../../helper/functions"

export const indexReducer = (state, action) => {
    switch (action.type) {
        case "increment": return updateState(state, "count", Number(action.payload) + 3)
        case "decrement": return updateState(state, "count", Number(action.payload) - 3)
        default: return state
    }
}