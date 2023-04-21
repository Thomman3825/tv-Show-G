import { BASE_URL, API_KEY } from "../URLs";

export class tvShowAPI{

    static async fetchShowAPI() {
        const res = await fetch(`${BASE_URL}tv/popular${API_KEY}`)
        const data = await res.json()
         //console.log(data.results)
        return data.results

        
    }
}