export const required = (value) => {
    if (value) return undefined
    return 'Field is required';
}

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value && value.length > maxLenght) return `Максимальная длинна символов ${maxLenght}`
    return undefined;
}