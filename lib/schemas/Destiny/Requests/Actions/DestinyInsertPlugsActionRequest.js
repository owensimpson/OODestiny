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
 * @type DestinyInsertPlugsActionRequest
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Requests.Actions.DestinyInsertPlugsActionRequest}
*/
class DestinyInsertPlugsActionRequest {
  /**
   * Action token provided by the AwaGetActionToken API call.
   * @readonly
   * @type string
  */
  actionToken;
  /**
   * The instance ID of the item having a plug inserted. Only instanced items can
   * have sockets.
   * @readonly
   * @type string
  */
  itemInstanceId;
  /**
   * The plugs being inserted.
   * @readonly
   * @type DestinyInsertPlugsRequestEntry
  */
  plug;
  /**
   * @readonly
   * @type string
  */
  characterId;
  /**
   * @readonly
   * @type BungieMembershipType
  */
  membershipType;
}
module.exports = DestinyInsertPlugsActionRequest;