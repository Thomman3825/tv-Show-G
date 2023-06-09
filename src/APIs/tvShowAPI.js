import { BASE_URL, API_KEY } from "../URLs";

export class tvShowAPI{

    static async fetchShowAPI() {
        const res = await fetch(`${BASE_URL}tv/popular${API_KEY}`)
        const data = await res.json()
         //console.log(data.results)
        return data.results  
    }

    //https://api.themoviedb.org/3/tv/{tv_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1
    static async fetchRecommendations(tvShowID) {
        const res = await fetch(`${BASE_URL}tv/${tvShowID}/recommendations${API_KEY}`)
        const data = await res.json()
        //console.log(tvShowID)
        //console.log(data)
        return data.results
        
    }

    //https://api.themoviedb.org/3/search/tv?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
     static async fetchByName(tvShowname) {
        const res = await fetch(`${BASE_URL}search/tv${API_KEY}&query=${tvShowname}`)
        const data = await res.json()
        console.log(tvShowname)
        console.log(data.results)
        return data.results
        
    }
}