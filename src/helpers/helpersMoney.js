
export const formatMoney = (value, currency = 'R$') => {
    return `${currency} ${value.toFixed(2).replace('.', ',')}`;
    }