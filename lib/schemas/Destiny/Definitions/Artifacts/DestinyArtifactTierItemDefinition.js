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
 * @type DestinyArtifactTierItemDefinition
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Artifacts.DestinyArtifactTierItemDefinition}
*/
class DestinyArtifactTierItemDefinition {
  /**
   * The identifier of the Plug Item unlocked by activating this item in the Artifact.
   * Mapped to DestinyInventoryItemDefinition in the manifest.
   * @readonly
   * @type number
  */
  itemHash;
}
module.exports = DestinyArtifactTierItemDefinition;