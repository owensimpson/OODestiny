/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
/** @see {@link https://bungie-net.github.io/#/components/schemas/Common.Models.Destiny2CoreSettings} */
export interface Destiny2CoreSettings {
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly collectionRootNode: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly badgesRootNode: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly recordsRootNode: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly medalsRootNode: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly metricsRootNode: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly activeTriumphsRootNodeHash: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly activeSealsRootNodeHash: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly legacyTriumphsRootNodeHash: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly legacySealsRootNodeHash: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly medalsRootNodeHash: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly exoticCatalystsRootNodeHash: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly loreRootNodeHash: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly craftingRootNodeHash: number;
    /** Mapped to DestinyProgressionDefinition in the manifest. */
    readonly currentRankProgressionHashes: number[];
    /** Mapped to DestinyInventoryItemDefinition in the manifest. */
    readonly insertPlugFreeProtectedPlugItemHashes: number[];
    /** Mapped to DestinySocketTypeDefinition in the manifest. */
    readonly insertPlugFreeBlockedSocketTypeHashes: number[];
    readonly undiscoveredCollectibleImage: string;
    readonly ammoTypeHeavyIcon: string;
    readonly ammoTypeSpecialIcon: string;
    readonly ammoTypePrimaryIcon: string;
    /** Mapped to DestinyVendorDefinition in the manifest. */
    readonly currentSeasonalArtifactHash: number;
    /** Mapped to DestinySeasonDefinition in the manifest. */
    readonly currentSeasonHash?: number;
    /** Mapped to DestinyPresentationNodeDefinition in the manifest. */
    readonly seasonalChallengesPresentationNodeHash?: number;
    /** Mapped to DestinySeasonDefinition in the manifest. */
    readonly futureSeasonHashes: number[];
    /** Mapped to DestinySeasonDefinition in the manifest. */
    readonly pastSeasonHashes: number[];
}
