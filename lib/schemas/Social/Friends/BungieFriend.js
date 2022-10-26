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

/**
 * @type BungieFriend
 * @see {@link https://bungie-net.github.io/#/components/schemas/Social.Friends.BungieFriend}
*/
class BungieFriend {
  /**
   * @readonly
   * @type string
  */
  lastSeenAsMembershipId;
  /**
   * @readonly
   * @type BungieMembershipType
  */
  lastSeenAsBungieMembershipType;
  /**
   * @readonly
   * @type string
  */
  bungieGlobalDisplayName;
  /**
   * @readonly
   * @type number?
  */
  bungieGlobalDisplayNameCode;
  /**
   * @readonly
   * @type PresenceStatus
  */
  onlineStatus;
  /**
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
   * @readonly
   * @type PresenceOnlineStateFlags
  */
  onlineTitle;
  /**
   * @readonly
   * @type FriendRelationshipState
  */
  relationship;
  /**
   * @readonly
   * @type GeneralUser
  */
  bungieNetUser;
}
module.exports = BungieFriend;