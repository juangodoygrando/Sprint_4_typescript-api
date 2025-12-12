import type { storageStructure } from "./interfaceStorage";



let reportJokes:storageStructure[]=JSON.parse(localStorage.getItem("reportJokes") ?? "[]")

export function getRatings():storageStructure[]{
    return [...reportJokes]
}

export function addRating(rating:storageStructure):void{
    reportJokes.push(rating)
    localStorage.setItem("reportJokes", JSON.stringify(reportJokes));
}

export function updateRatingsStorage(newlist:storageStructure[]){
    reportJokes=newlist
    localStorage.setItem("reportJokes", JSON.stringify(reportJokes));
}