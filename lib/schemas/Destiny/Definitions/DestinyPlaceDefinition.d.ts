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
import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
/**
 * Okay, so Activities (DestinyActivityDefinition) take place in Destinations (
 * DestinyDestinationDefinition). Destinations are part of larger locations known
 * as Places (you're reading its documentation right now).
 *
 * Places are more on the planetary scale, like "Earth" and "Your Mom."
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyPlaceDefinition}
*/
export interface DestinyPlaceDefinition {
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of
     * entity, but not globally.
     *
     * When entities refer to each other in Destiny content, it is this hash that they
     * are referring to.
    */
    readonly hash: number;
    /** The index of the entity as it was found in the investment tables. */
    readonly index: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination,
     * but BNet is not yet allowed to show it. Sorry!
    */
    readonly redacted: boolean;
}