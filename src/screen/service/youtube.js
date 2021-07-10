import axios from "axios";

class Youtube{
    constructor(key){
        this.Youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: {key : key},
        });
    
    }


    async mostPopular(){

        const response = await this.Youtube.get('videos',{
            params:{
                part: 'snippet', 
                chart: 'mostPopular', 
                maxResults : 25, 
            }
        });
  
        return response.date.items; // 라이브러리 자체에서 제이슨 변환을 해주기 때문에 따로 제이슨 변환을 해줄 필요는 없다. 
    
}

    async search(query){

        const response = await this.Youtube.get('search', {
            params:{
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query,
                
            }
        })
      
        return response.data.items.map(item => ({...item, id: item.id.videoId}));
  
}


    

}

export default Youtube;