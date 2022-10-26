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
 * @typedef GetLeaderboardsForCharacterParams
 * @property {string} characterId The specific character to build the leaderboard around for the provided Destiny Membership.
 * @property {string} destinyMembershipId The Destiny membershipId of the user to retrieve.
 * @property {number?} maxtop Maximum number of top players to return. Use a large number to get entire leaderboard.
 * @property {BungieMembershipType} membershipType A valid non-BungieNet membership type.
 * @property {string?} modes List of game modes for which to get leaderboards. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
 * @property {string?} statid ID of stat to return rather than returning all Leaderboard stats.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetLeaderboardsForCharacter}
*/

/**
 * Gets leaderboards with the signed in user's friends and the supplied
 * destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and
 * may experience rough edges. The schema is in final form, but there may be bugs
 * that prevent desirable operation.
 * @param {GetLeaderboardsForCharacterParams} params
 * @returns DestinyLeaderboardResults
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#Destiny2.GetLeaderboardsForCharacter}
*/
module.exports = async function getLeaderboardsForCharacter(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/Destiny2/Stats/Leaderboards/${params.membershipType}/${params.destinyMembershipId}/${params.characterId}/`,
    params: {
      maxtop: params.maxtop,
      modes: params.modes,
      statid: params.statid
    }
  });
}