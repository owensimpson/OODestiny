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
 * If a character purchased an item that is refundable, a Vendor Receipt will be
 * created on the user's Destiny Profile. These expire after a configurable period
 * of time, but until then can be used to get refunds on items. BNet does not
 * provide the ability to refund a purchase *yet*, but you know.
 * @type DestinyVendorReceipt
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Vendors.DestinyVendorReceipt}
*/
class DestinyVendorReceipt {
  /**
   * The amount paid for the item, in terms of items that were consumed in the
   * purchase and their quantity.
   * @readonly
   * @type DestinyItemQuantity[]
  */
  currencyPaid;
  /**
   * The item that was received, and its quantity.
   * @readonly
   * @type DestinyItemQuantity
  */
  itemReceived;
  /**
   * The unlock flag used to determine whether you still have the purchased item.
   * @readonly
   * @type number
  */
  licenseUnlockHash;
  /**
   * The ID of the character who made the purchase.
   * @readonly
   * @type string
  */
  purchasedByCharacterId;
  /**
   * Whether you can get a refund, and what happens in order for the refund to be
   * received. See the DestinyVendorItemRefundPolicy enum for details.
   * @readonly
   * @type DestinyVendorItemRefundPolicy
  */
  refundPolicy;
  /**
   * The identifier of this receipt.
   * @readonly
   * @type number
  */
  sequenceNumber;
  /**
   * The seconds since epoch at which this receipt is rendered invalid.
   * @readonly
   * @type string
  */
  timeToExpiration;
  /**
   * The date at which this receipt is rendered invalid.
   * @readonly
   * @type string
  */
  expiresOn;
}
module.exports = DestinyVendorReceipt;