import { stat } from "../interface/pokemon";

export const isFilled = (stat: number) => {
    let intervals = 1;
    let aux_stat = stat
    while (aux_stat>17) {
        aux_stat-=17
        intervals+=1
    }
    return intervals
}

export const filledTable = (stats: stat[]) => {
    const row: number[] = []
    stats.map((stat: stat) => {
        row.push(isFilled(stat.base_stat))
    })
    console.log(row, 'rowsss')
    return row

} 