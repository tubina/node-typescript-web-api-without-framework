import {IncomingMessage, Server, ServerResponse} from "http";

import {serviceListEpisodes} from '../services/list-episodes-services'
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { StatusCode } from "../utils/status-code";
import { PodcastTransferModel } from "../models/podcast-transfer-model";


const DEFAULT_CONTENT = {"Content-Type": "application/json"}

/************************************************************** */
export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
    ) => {

        const content: PodcastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body))
    res.end()   
}

/************************************************************** */
export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => { 

    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.end(JSON.stringify(content.body))
}