
export const formatDate = (date, format) => {
    if (!date) {
        return ''
    }
    
    const dateFormat = format || 'DD/MM/YYYY'
    const dateObject = new Date(date)
    
    const day = dateObject.getDate() +1
    const month = dateObject.getMonth() + 1
    const year = dateObject.getFullYear()
    
    return dateFormat
        .replace('DD', day < 10 ? `0${day}` : day)
        .replace('MM', month < 10 ? `0${month}` : month)
        .replace('YYYY', year)
    }