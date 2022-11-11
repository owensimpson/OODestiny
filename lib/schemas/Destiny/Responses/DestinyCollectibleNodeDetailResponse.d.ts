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
import { SingleComponentResponseOfDestinyCollectiblesComponent } from '../../SingleComponentResponseOfDestinyCollectiblesComponent';
import { DestinyItemComponentSetOfuint32 } from '../../DestinyItemComponentSetOfuint32';
/**
 * Returns the detailed information about a Collectible Presentation Node and any
 * Collectibles that are direct descendants.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyCollectibleNodeDetailResponse}
*/
export interface DestinyCollectibleNodeDetailResponse {
    /** COMPONENT TYPE: Collectibles */
    readonly collectibles: SingleComponentResponseOfDestinyCollectiblesComponent;
    /**
     * Item components, keyed by the item hash of the items pointed at collectibles
     * found under the requested Presentation Node.
     *
     * NOTE: I had a lot of hemming and hawing about whether these should be keyed by
     * collectible hash or item hash... but ultimately having it be keyed by item hash
     * meant that UI that already uses DestinyItemComponentSet data wouldn't have to
     * have a special override to do the collectible -> item lookup once you delve into
     * an item's details, and it also meant that you didn't have to remember that the
     * Hash being used as the key for plugSets was different from the Hash being used
     * for the other Dictionaries. As a result, using the Item Hash felt like the least
     * crappy solution.
     *
     * We may all come to regret this decision. We will see.
     *
     * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component
     * types.]
    */
    readonly collectibleItemComponents: DestinyItemComponentSetOfuint32;
}