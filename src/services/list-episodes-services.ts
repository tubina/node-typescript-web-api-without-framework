import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";



export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {

     //define a interface de retorno
     let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcast();

    // responseFormat = {
    //     statusCode:  data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    //     body: data
    // }

    //ou

    responseFormat.statusCode = 
            data.length !== 0 ? StatusCode.OK : StatusCode.NoContent
    
    responseFormat.body = data
            
    return responseFormat;
}