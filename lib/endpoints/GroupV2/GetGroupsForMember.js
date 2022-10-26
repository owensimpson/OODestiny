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
 * @typedef GetGroupsForMemberParams
 * @property {GroupsForMemberFilter} filter Filter apply to list of joined groups.
 * @property {GroupType} groupType Type of group the supplied member founded.
 * @property {string} membershipId Membership ID to for which to find founded groups.
 * @property {BungieMembershipType} membershipType Membership type of the supplied membership ID.
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupsForMember}
*/

/**
 * Get information about the groups that a given member has joined.
 * @param {GetGroupsForMemberParams} params
 * @returns GetGroupsForMemberResponse
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#GroupV2.GetGroupsForMember}
*/
module.exports = async function getGroupsForMember(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'GET',
    url: `https://www.bungie.net/Platform/GroupV2/User/${params.membershipType}/${params.membershipId}/${params.filter}/${params.groupType}/`
  });
}