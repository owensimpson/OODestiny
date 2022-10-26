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
 * The types of membership the Accounts system supports. This is the external
 * facing enum used in place of the internal-only Bungie.SharedDefinitions.
 * MembershipType.
 * @see {@link https://bungie-net.github.io/#/components/schemas/BungieMembershipType}
*/
exports.BungieMembershipType = Object.freeze({
  None: 0,
  TigerXbox: 1,
  TigerPsn: 2,
  TigerSteam: 3,
  TigerBlizzard: 4,
  TigerStadia: 5,
  TigerEgs: 6,
  TigerDemon: 10,
  BungieNext: 254,
  /**
   * "All" is only valid for searching capabilities: you need to pass the actual
   * matching BungieMembershipType for any query where you pass a known membershipId.
  */
  All: -1
})