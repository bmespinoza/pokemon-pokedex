export const convertHgtoLb = (weigth: number) => {
    return (weigth/4.536).toFixed(1)
}

export const convertDmtoFt = (height: number) => {
    const ft = Math.trunc(height/3.048)
    const inches = (((height/3.048)-ft)*12).toFixed()
    if (parseInt(inches) < 10){
        return `${ft}' 0${inches}"`
    } else {
        return `${ft}' ${inches}"`
    }
}