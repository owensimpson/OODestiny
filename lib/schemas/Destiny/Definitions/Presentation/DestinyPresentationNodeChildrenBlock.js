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
 * As/if presentation nodes begin to host more entities as children, these lists
 * will be added to. One list property exists per type of entity that can be
 * treated as a child of this presentation node, and each holds the identifier of
 * the entity and any associated information needed to display the UI for that
 * entity (if anything)
 * @type DestinyPresentationNodeChildrenBlock
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Presentation.DestinyPresentationNodeChildrenBlock}
*/
class DestinyPresentationNodeChildrenBlock {
  /**
   * @readonly
   * @type DestinyPresentationNodeChildEntry[]
  */
  presentationNodes;
  /**
   * @readonly
   * @type DestinyPresentationNodeCollectibleChildEntry[]
  */
  collectibles;
  /**
   * @readonly
   * @type DestinyPresentationNodeRecordChildEntry[]
  */
  records;
  /**
   * @readonly
   * @type DestinyPresentationNodeMetricChildEntry[]
  */
  metrics;
  /**
   * @readonly
   * @type DestinyPresentationNodeCraftableChildEntry[]
  */
  craftables;
}
module.exports = DestinyPresentationNodeChildrenBlock;