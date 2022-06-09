export const getTagColors = (type: string) => {
    switch(type){
        case 'water':
            return {text: '#ffffff', background: 'linear-gradient(180deg, #4592c4 50%, #4592c4 50%)'}
        case 'grass':
            return {text: '#212121', background: 'linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%)'}
        case 'poison':
            return {text: '#ffffff', background: 'linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%)'}
        case 'fire':
            return {text: '#ffffff', background: 'linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%)'}
        case 'flying':
            return {text: '#212121', background: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)'}
        case 'bug':
            return {text: '#ffffff', background: 'linear-gradient(180deg, #729f3f 50%, #729f3f 50%)'}
        case 'dragon':
            return {text: '#ffffff', background: 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)'}
        case 'ground':
            return {text: '#212121', background: 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)'}
        case 'psychic':
            return {text: '#ffffff', background: 'linear-gradient(180deg, #f366b9 50%, #f366b9 50%)'}
        case 'fairy':
            return {text: '#212121', background: 'linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%)'}
        case 'ghost':
            return {text: '#ffffff', background: 'linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%)'}
        case 'normal':
            return {text: '#212121', background: 'linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%)'}
        case 'dark':
            return {text: '#ffffff', background: 'linear-gradient(180deg, #707070 50%, #707070 50%)'}
        case 'electric':
            return {text: '#212121', background: 'linear-gradient(180deg, #eed535 50%, #eed535 50%)'}
        case 'steel':
            return {text: '#212121', background: 'linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%)'}
        case 'rock':
            return {text: '#ffffff', background: 'linear-gradient(180deg, #a38c21 50%, #a38c21 50%)'}
        case 'fighting':
            return {text: '#ffffff', background: 'linear-gradient(180deg, #d56723 50%, #d56723 50%)'}
        case 'ice':
            return {text: '#212121', background: 'linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%)'}
        default:
            return {text: 'black', background: 'linear-gradient(180deg, yellow 50%, yellow 50%)'}
    }

}