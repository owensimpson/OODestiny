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
 * The response for GetDestinyProfile, with components for character and item-level
 * data.
 * @type DestinyProfileResponse
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyProfileResponse}
*/
class DestinyProfileResponse {
  /**
   * Recent, refundable purchases you have made from vendors. When will you use it?
   * Couldn't say...
   *
   * COMPONENT TYPE: VendorReceipts
   * @readonly
   * @type SingleComponentResponseOfDestinyVendorReceiptsComponent
  */
  vendorReceipts;
  /**
   * The profile-level inventory of the Destiny Profile.
   *
   * COMPONENT TYPE: ProfileInventories
   * @readonly
   * @type SingleComponentResponseOfDestinyInventoryComponent
  */
  profileInventory;
  /**
   * The profile-level currencies owned by the Destiny Profile.
   *
   * COMPONENT TYPE: ProfileCurrencies
   * @readonly
   * @type SingleComponentResponseOfDestinyInventoryComponent
  */
  profileCurrencies;
  /**
   * The basic information about the Destiny Profile (formerly "Account").
   *
   * COMPONENT TYPE: Profiles
   * @readonly
   * @type SingleComponentResponseOfDestinyProfileComponent
  */
  profile;
  /**
   * Silver quantities for any platform on which this Profile plays destiny.
   *
   * COMPONENT TYPE: PlatformSilver
   * @readonly
   * @type SingleComponentResponseOfDestinyPlatformSilverComponent
  */
  platformSilver;
  /**
   * Items available from Kiosks that are available Profile-wide (i.e. across all
   * characters)
   *
   * This component returns information about what Kiosk items are available to you
   * on a *Profile* level. It is theoretically possible for Kiosks to have items
   * gated by specific Character as well. If you ever have those, you will find them
   * on the characterKiosks property.
   *
   * COMPONENT TYPE: Kiosks
   * @readonly
   * @type SingleComponentResponseOfDestinyKiosksComponent
  */
  profileKiosks;
  /**
   * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more
   * info), this is the set of plugs and their states that are profile-scoped.
   *
   * This comes back with ItemSockets, as it is needed for a complete picture of the
   * sockets on requested items.
   *
   * COMPONENT TYPE: ItemSockets
   * @readonly
   * @type SingleComponentResponseOfDestinyPlugSetsComponent
  */
  profilePlugSets;
  /**
   * When we have progression information - such as Checklists - that may apply
   * profile-wide, it will be returned here rather than in the per-character
   * progression data.
   *
   * COMPONENT TYPE: ProfileProgression
   * @readonly
   * @type SingleComponentResponseOfDestinyProfileProgressionComponent
  */
  profileProgression;
  /**
   * COMPONENT TYPE: PresentationNodes
   * @readonly
   * @type SingleComponentResponseOfDestinyPresentationNodesComponent
  */
  profilePresentationNodes;
  /**
   * COMPONENT TYPE: Records
   * @readonly
   * @type SingleComponentResponseOfDestinyProfileRecordsComponent
  */
  profileRecords;
  /**
   * COMPONENT TYPE: Collectibles
   * @readonly
   * @type SingleComponentResponseOfDestinyProfileCollectiblesComponent
  */
  profileCollectibles;
  /**
   * COMPONENT TYPE: Transitory
   * @readonly
   * @type SingleComponentResponseOfDestinyProfileTransitoryComponent
  */
  profileTransitoryData;
  /**
   * COMPONENT TYPE: Metrics
   * @readonly
   * @type SingleComponentResponseOfDestinyMetricsComponent
  */
  metrics;
  /**
   * COMPONENT TYPE: StringVariables
   * @readonly
   * @type SingleComponentResponseOfDestinyStringVariablesComponent
  */
  profileStringVariables;
  /**
   * Basic information about each character, keyed by the CharacterId.
   *
   * COMPONENT TYPE: Characters
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyCharacterComponent
  */
  characters;
  /**
   * The character-level non-equipped inventory items, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterInventories
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyInventoryComponent
  */
  characterInventories;
  /**
   * Character-level progression data, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterProgressions
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyCharacterProgressionComponent
  */
  characterProgressions;
  /**
   * Character rendering data - a minimal set of info needed to render a character in
   * 3D - keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterRenderData
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyCharacterRenderComponent
  */
  characterRenderData;
  /**
   * Character activity data - the activities available to this character and its
   * status, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterActivities
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyCharacterActivitiesComponent
  */
  characterActivities;
  /**
   * The character's equipped items, keyed by the Character's Id.
   *
   * COMPONENT TYPE: CharacterEquipment
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyInventoryComponent
  */
  characterEquipment;
  /**
   * Items available from Kiosks that are available to a specific character as
   * opposed to the account as a whole. It must be combined with data from the
   * profileKiosks property to get a full picture of the character's available items
   * to check out of a kiosk.
   *
   * This component returns information about what Kiosk items are available to you
   * on a *Character* level. Usually, kiosk items will be earned for the entire
   * Profile (all characters) at once. To find those, look in the profileKiosks
   * property.
   *
   * COMPONENT TYPE: Kiosks
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyKiosksComponent
  */
  characterKiosks;
  /**
   * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more
   * info), this is the set of plugs and their states, per character, that are
   * character-scoped.
   *
   * This comes back with ItemSockets, as it is needed for a complete picture of the
   * sockets on requested items.
   *
   * COMPONENT TYPE: ItemSockets
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyPlugSetsComponent
  */
  characterPlugSets;
  /**
   * Do you ever get the feeling that a system was designed *too* flexibly? That it
   * can be used in so many different ways that you end up being unable to provide an
   * easy to use abstraction for the mess that's happening under the surface?
   *
   * Let's talk about character-specific data that might be related to items without
   * instances. These two statements are totally unrelated, I promise.
   *
   * At some point during D2, it was decided that items - such as Bounties - could be
   * given to characters and *not* have instance data, but that *could* display and
   * even use relevant state information on your account and character.
   *
   * Up to now, any item that had meaningful dependencies on character or account
   * state had to be instanced, and thus "itemComponents" was all that you needed: it
   * was keyed by item's instance IDs and provided the stateful information you
   * needed inside.
   *
   * Unfortunately, we don't live in such a magical world anymore. This is
   * information held on a per-character basis about non-instanced items that the
   * characters have in their inventory - or that reference character-specific state
   * information even if it's in Account-level inventory - and the values related to
   * that item's state in relation to the given character.
   *
   * To give a concrete example, look at a Moments of Triumph bounty. They exist in a
   * character's inventory, and show/care about a character's progression toward
   * completing the bounty. But the bounty itself is a non-instanced item, like a mod
   * or a currency. This returns that data for the characters who have the bounty in
   * their inventory.
   *
   * I'm not crying, you're crying Okay we're both crying but it's going to be okay I
   * promise Actually I shouldn't promise that, I don't know if it's going to be okay
   * @readonly
   * @type Object.key<string, DestinyBaseItemComponentSetOfuint32>
  */
  characterUninstancedItemComponents;
  /**
   * COMPONENT TYPE: PresentationNodes
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyPresentationNodesComponent
  */
  characterPresentationNodes;
  /**
   * COMPONENT TYPE: Records
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyCharacterRecordsComponent
  */
  characterRecords;
  /**
   * COMPONENT TYPE: Collectibles
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyCollectiblesComponent
  */
  characterCollectibles;
  /**
   * COMPONENT TYPE: StringVariables
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyStringVariablesComponent
  */
  characterStringVariables;
  /**
   * COMPONENT TYPE: Craftables
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyCraftablesComponent
  */
  characterCraftables;
  /**
   * Information about instanced items across all returned characters, keyed by the
   * item's instance ID.
   *
   * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component
   * types.]
   * @readonly
   * @type DestinyItemComponentSetOfint64
  */
  itemComponents;
  /**
   * A "lookup" convenience component that can be used to quickly check if the
   * character has access to items that can be used for purchasing.
   *
   * COMPONENT TYPE: CurrencyLookups
   * @readonly
   * @type DictionaryComponentResponseOfint64AndDestinyCurrenciesComponent
  */
  characterCurrencyLookups;
}
module.exports = DestinyProfileResponse;