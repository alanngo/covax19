import { toTitle } from "../../helper/functions"

const updateState = (obj, key, value) =>({ ...obj, [`${key}`]: value })

export const reviewReducer = (state, action) =>{
    switch (action.type)
    {
        case "_id": return updateState(state, "_id", action.payload)
        case "age": return updateState(state, "age", Number(action.payload))
        case "date": return updateState(state, "date", action.payload)
        case "country": return updateState(state, "country", action.payload)
        case "region": return updateState(state, "region", toTitle(action.payload))
        case "city": return updateState(state, "city", action.payload)
        case "conditions": return updateState(state, "conditions", String(action.payload).split(", "))
        case "company": return updateState(state, "company", action.payload)
        case "icu": return updateState(state, "icu", action.payload)
        case "reactions": return updateState(state, "reactions", String(action.payload).split(", "))
        case "comments": return updateState(state, "comments", action.payload)
        default: return state
    }
}