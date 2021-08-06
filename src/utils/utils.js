export function toggleTheme(element) {
    const tog = element === 'light' ? 'dark' : 'light'
    return tog
}

export function toggleCheckmark(element) {
    const tog = element === true ? 'checked' : 'unchecked'
    return tog
}