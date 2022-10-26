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
 * Defines an "Objective".
 *
 * An objective is a specific task you should accomplish in the game. These are
 * referred to by:
 *
 * - Quest Steps (which are DestinyInventoryItemDefinition entities with Objectives)
 *
 * - Challenges (which are Objectives defined on an DestinyActivityDefintion)
 *
 * - Milestones (which refer to Objectives that are defined on both Quest Steps and
 * Activities)
 *
 * - Anything else that the designers decide to do later.
 *
 * Objectives have progress, a notion of having been Completed, human readable data
 * describing the task to be accomplished, and a lot of optional tack-on data that
 * can enhance the information provided about the task.
 * @type DestinyObjectiveDefinition
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyObjectiveDefinition}
*/
class DestinyObjectiveDefinition {
  /**
   * Ideally, this should tell you what your task is. I'm not going to lie to you
   * though. Sometimes this doesn't have useful information at all. Which sucks, but
   * there's nothing either of us can do about it.
   * @readonly
   * @type DestinyDisplayPropertiesDefinition
  */
  displayProperties;
  /**
   * The value that the unlock value defined in unlockValueHash must reach in order
   * for the objective to be considered Completed. Used in calculating progress and
   * completion status.
   * @readonly
   * @type number
  */
  completionValue;
  /**
   * A shortcut for determining the most restrictive gating that this Objective is
   * set to use. This includes both the dynamic determination of progress and of
   * completion values. See the DestinyGatingScope enum's documentation for more
   * details.
   * @readonly
   * @type DestinyGatingScope
  */
  scope;
  /**
   * OPTIONAL: a hash identifier for the location at which this objective must be
   * accomplished, if there is a location defined. Look up the
   * DestinyLocationDefinition for this hash for that additional location info.
   * Mapped to DestinyLocationDefinition in the manifest.
   * @readonly
   * @type number
  */
  locationHash;
  /**
   * If true, the value is allowed to go negative.
   * @readonly
   * @type boolean
  */
  allowNegativeValue;
  /**
   * If true, you can effectively "un-complete" this objective if you lose progress
   * after crossing the completion threshold.
   *
   * If False, once you complete the task it will remain completed forever by locking
   * the value.
   * @readonly
   * @type boolean
  */
  allowValueChangeWhenCompleted;
  /**
   * If true, completion means having an unlock value less than or equal to the
   * completionValue.
   *
   * If False, completion means having an unlock value greater than or equal to the
   * completionValue.
   * @readonly
   * @type boolean
  */
  isCountingDownward;
  /**
   * The UI style applied to the objective. It's an enum, take a look at
   * DestinyUnlockValueUIStyle for details of the possible styles. Use this info as
   * you wish to customize your UI.
   *
   * DEPRECATED: This is no longer populated by Destiny 2 game content. Please use
   * inProgressValueStyle and completedValueStyle instead.
   * @readonly
   * @type DestinyUnlockValueUIStyle
  */
  valueStyle;
  /**
   * Text to describe the progress bar.
   * @readonly
   * @type string
  */
  progressDescription;
  /**
   * If this objective enables Perks intrinsically, the conditions for that enabling
   * are defined here.
   * @readonly
   * @type DestinyObjectivePerkEntryDefinition
  */
  perks;
  /**
   * If this objective enables modifications on a player's stats intrinsically, the
   * conditions are defined here.
   * @readonly
   * @type DestinyObjectiveStatEntryDefinition
  */
  stats;
  /**
   * If nonzero, this is the minimum value at which the objective's progression
   * should be shown. Otherwise, don't show it yet.
   * @readonly
   * @type number
  */
  minimumVisibilityThreshold;
  /**
   * If True, the progress will continue even beyond the point where the objective
   * met its minimum completion requirements. Your UI will have to accommodate it.
   * @readonly
   * @type boolean
  */
  allowOvercompletion;
  /**
   * If True, you should continue showing the progression value in the UI after it's
   * complete. I mean, we already do that in BNet anyways, but if you want to be
   * better behaved than us you could honor this flag.
   * @readonly
   * @type boolean
  */
  showValueOnComplete;
  /**
   * The style to use when the objective is completed.
   * @readonly
   * @type DestinyUnlockValueUIStyle
  */
  completedValueStyle;
  /**
   * The style to use when the objective is still in progress.
   * @readonly
   * @type DestinyUnlockValueUIStyle
  */
  inProgressValueStyle;
  /**
   * Objectives can have arbitrary UI-defined identifiers that define the style
   * applied to objectives. For convenience, known UI labels will be defined in the
   * uiStyle enum value.
   * @readonly
   * @type string
  */
  uiLabel;
  /**
   * If the objective has a known UI label value, this property will represent it.
   * @readonly
   * @type DestinyObjectiveUiStyle
  */
  uiStyle;
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of
   * entity, but not globally.
   *
   * When entities refer to each other in Destiny content, it is this hash that they
   * are referring to.
   * @readonly
   * @type number
  */
  hash;
  /**
   * The index of the entity as it was found in the investment tables.
   * @readonly
   * @type number
  */
  index;
  /**
   * If this is true, then there is an entity with this identifier/type combination,
   * but BNet is not yet allowed to show it. Sorry!
   * @readonly
   * @type boolean
  */
  redacted;
}
module.exports = DestinyObjectiveDefinition;