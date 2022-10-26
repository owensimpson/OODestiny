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
 * @typedef AcceptFriendRequestParams
 * @property {string} membershipId The membership id of the user you wish to accept.
 * @see {@link https://bungie-net.github.io/#Social.AcceptFriendRequest}
*/

/**
 * Accepts a friend relationship with the target user. The user must be on your
 * incoming friend request list, though no error will occur if they are not.
 * @param {AcceptFriendRequestParams} params
 * @returns boolean
 * @this import(../../index).Client
 * @see {@link https://bungie-net.github.io/#Social.AcceptFriendRequest}
*/
module.exports = async function acceptFriendRequest(params) {
  return rateLimitedRequest(this.access_token, {
    method: 'POST',
    url: `https://www.bungie.net/Platform/Social/Friends/Requests/Accept/${params.membershipId}/`
  });
}