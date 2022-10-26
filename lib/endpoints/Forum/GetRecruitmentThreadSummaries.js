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
 * Allows the caller to get a list of to 25 recruitment thread summary information
 * objects.
 * @returns CEListOfForumRecruitmentDetail
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#Forum.GetRecruitmentThreadSummaries}
*/
module.exports = async function getRecruitmentThreadSummaries() {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Forum/Recruit/Summaries/',
    body
  });
}