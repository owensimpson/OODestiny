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
import { DestinyVendorCategoryOverlayDefinition } from './DestinyVendorCategoryOverlayDefinition';
/**
 * This is the definition for a single Vendor Category, into which Sale Items are
 * grouped.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyVendorCategoryEntryDefinition}
*/
export interface DestinyVendorCategoryEntryDefinition {
    /** The index of the category in the original category definitions for the vendor. */
    readonly categoryIndex: number;
    /**
     * Used in sorting items in vendors... but there's a lot more to it. Just go with
     * the order provided in the itemIndexes property on the
     * DestinyVendorCategoryComponent instead, it should be more reliable than trying
     * to recalculate it yourself.
    */
    readonly sortValue: number;
    /** The hashed identifier for the category. */
    readonly categoryHash: number;
    /** The amount of items that will be available when this category is shown. */
    readonly quantityAvailable: number;
    /**
     * If items aren't up for sale in this category, should we still show them (greyed
     * out)?
    */
    readonly showUnavailableItems: boolean;
    /**
     * If you don't have the currency required to buy items from this category, should
     * the items be hidden?
    */
    readonly hideIfNoCurrency: boolean;
    /** True if this category doesn't allow purchases. */
    readonly hideFromRegularPurchase: boolean;
    /**
     * The localized string for making purchases from this category, if it is different
     * from the vendor's string for purchasing.
    */
    readonly buyStringOverride: string;
    /** If the category is disabled, this is the localized description to show. */
    readonly disabledDescription: string;
    /** The localized title of the category. */
    readonly displayTitle: string;
    /**
     * If this category has an overlay prompt that should appear, this contains the
     * details of that prompt.
    */
    readonly overlay: DestinyVendorCategoryOverlayDefinition;
    /**
     * A shortcut for the vendor item indexes sold under this category. Saves us from
     * some expensive reorganization at runtime.
    */
    readonly vendorItemIndexes: number[];
    /**
     * Sometimes a category isn't actually used to sell items, but rather to preview
     * them. This implies different UI (and manual placement of the category in the UI)
     * in the game, and special treatment.
    */
    readonly isPreview: boolean;
    /** If true, this category only displays items: you can't purchase anything in them. */
    readonly isDisplayOnly: boolean;
    readonly resetIntervalMinutesOverride: number;
    readonly resetOffsetMinutesOverride: number;
}