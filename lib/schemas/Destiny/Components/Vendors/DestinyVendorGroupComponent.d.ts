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
import { DestinyVendorGroup } from './DestinyVendorGroup';
/**
 * This component returns references to all of the Vendors in the response, grouped
 * by categorizations that Bungie has deemed to be interesting, in the order in
 * which both the groups and the vendors within that group should be rendered.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Vendors.DestinyVendorGroupComponent}
*/
export interface DestinyVendorGroupComponent {
    /** The ordered list of groups being returned. */
    readonly groups: DestinyVendorGroup[];
}