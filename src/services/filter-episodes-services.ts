import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
    ): Promise<PodcastTransferModel> => {

        //define a interface de retorno
        let responseFormat: PodcastTransferModel = {
            statusCode: 0,
            body: []
        }

    const queryString = podcastName?.split("?p=")[1] ?? ""
    const data = await repositoryPodcast(queryString);

        responseFormat.statusCode = 
            data.length !== 0 ? StatusCode.OK : StatusCode.NoContent

        // if(data.length !== 0){
        //     responseFormat.statusCode = StatusCode.OK;
        // }else {
        //     responseFormat.statusCode = StatusCode.NoContent;
        // }

        responseFormat.body = data;


    return responseFormat;
}