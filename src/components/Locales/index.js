import { Ru } from "./Ru";
import { Uz } from "./Uz";

export function getText(word) {
    if (localStorage.getItem('language') === 'uz') {
        return Uz[word]
    } else {
        return Ru[word]
    }
}