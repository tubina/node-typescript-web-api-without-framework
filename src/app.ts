import * as http from "http";
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";


export const app = async (req: http.IncomingMessage, res: http.ServerResponse)=>{

    //queryStrings 
    //const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""]
    const baseUrl = req.url?.split("?")[0]

   if(req.method === HttpMethod.GET && baseUrl === Routes.LIST) { 
        await getListEpisodes(req, res);
   }

   if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req, res);
   }

}