export const truncateText = (text: string, desiredLength: number) => {
    let desiredText = ''
    
    if(text.length <= desiredLength) {
        return text
    } 

    desiredText = text.slice(0, desiredLength + 1) + '...'

    return desiredText

}