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
 * If you are playing in an activity, this is some information about it.
 *
 * Note that we cannot guarantee any of this resembles what ends up in the PGCR in
 * any way. They are sourced by two entirely separate systems with their own logic,
 * and the one we source this data from should be considered non-authoritative in
 * comparison.
 * @type DestinyProfileTransitoryCurrentActivity
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Profiles.DestinyProfileTransitoryCurrentActivity}
*/
class DestinyProfileTransitoryCurrentActivity {
  /**
   * When the activity started.
   * @readonly
   * @type string?
  */
  startTime;
  /**
   * If you're still in it but it "ended" (like when folks are dancing around the
   * loot after they beat a boss), this is when the activity ended.
   * @readonly
   * @type string?
  */
  endTime;
  /**
   * This is what our non-authoritative source thought the score was.
   * @readonly
   * @type number
  */
  score;
  /**
   * If you have human opponents, this is the highest opposing team's score.
   * @readonly
   * @type number
  */
  highestOpposingFactionScore;
  /**
   * This is how many human or poorly crafted aimbot opponents you have.
   * @readonly
   * @type number
  */
  numberOfOpponents;
  /**
   * This is how many human or poorly crafted aimbots are on your team.
   * @readonly
   * @type number
  */
  numberOfPlayers;
}
module.exports = DestinyProfileTransitoryCurrentActivity;