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
 * @typedef GetBungieRewardsForUserParams
 * @property {string} membershipId bungie.net user membershipId for requested user rewards. If not self, elevated permissions are required.
 * @see {@link https://bungie-net.github.io/#Tokens.GetBungieRewardsForUser}
*/

/**
 * Returns the bungie rewards for the targeted user.
 * @param {GetBungieRewardsForUserParams} params
 * @returns DictionaryOfstringAndBungieRewardDisplay
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#Tokens.GetBungieRewardsForUser}
*/
module.exports = async function getBungieRewardsForUser(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Tokens/Rewards/GetRewardsForUser/${params.membershipId}/`
  });
}