/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response';
import { BungieClient } from '../../util/client';
import { PostSearchResponse } from '../../schemas';
/** @see {@link https://bungie-net.github.io/#Forum.GetPoll} */
export declare type GetPollParams = {
    /** The post id of the topic that has the poll. */
    topicId: string;
};
/**
 * Gets the specified forum poll.
 * @see {@link https://bungie-net.github.io/#Forum.GetPoll}
*/
export declare function GetPoll(this: BungieClient, params: GetPollParams): Promise<BungieNetResponse<PostSearchResponse>>;