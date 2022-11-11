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
import { DestinyItemResponse } from './DestinyItemResponse';
import { DestinyItemComponent } from '../Entities/Items/DestinyItemComponent';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyItemChangeResponse} */
export interface DestinyItemChangeResponse {
    readonly item: DestinyItemResponse;
    /** Items that appeared in the inventory possibly as a result of an action. */
    readonly addedInventoryItems: DestinyItemComponent[];
    /** Items that disappeared from the inventory possibly as a result of an action. */
    readonly removedInventoryItems: DestinyItemComponent[];
}