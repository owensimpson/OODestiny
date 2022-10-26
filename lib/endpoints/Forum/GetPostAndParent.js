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

const { rateLimitedRequest } = require('../../rate-limiter.js');
/**
 * @typedef GetPostAndParentParams
 * @property {string} childPostId
 * @property {string?} showbanned If this value is not null or empty, banned posts are requested to be returned
 * @see {@link https://bungie-net.github.io/#Forum.GetPostAndParent}
*/

/**
 * Returns the post specified and its immediate parent.
 * @param {GetPostAndParentParams} params
 * @returns PostSearchResponse
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#Forum.GetPostAndParent}
*/
module.exports = async function getPostAndParent(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParent/${params.childPostId}/`,
    params: {
      showbanned: params.showbanned
    }
  });
}