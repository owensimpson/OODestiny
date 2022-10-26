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
 * There's a lot of places where we need to know scope on more than just a profile
 * or character level. For everything else, there's this more generic sense of
 * scope.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyScope}
*/
exports.DestinyScope = Object.freeze({
  Profile: 0,
  Character: 1
})