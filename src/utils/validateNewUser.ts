export const validateNewUser = (userProp: string) => {
    return typeof userProp !== 'string' || !userProp.trim()
}