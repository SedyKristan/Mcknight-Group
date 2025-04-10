// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | ContactsSlice
  | TeamSlice
  | CommunitiesSlice
  | AboutSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Section ID field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].section_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_id: prismic.KeyTextField;

  /**
   * CTA Button field in *Settings → Navigation*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: settings.navigation[].cta_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  cta_button: prismic.BooleanField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Fallback OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.fallback_og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument | SettingsDocument;

/**
 * Item in *About → Default → Primary → Services*
 */
export interface AboutSliceDefaultPrimaryServicesItem {
  /**
   * Icon field in *About → Default → Primary → Services*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.services[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<
    "house" | "ruler-l" | "users" | "location" | "bill"
  >;

  /**
   * Label field in *About → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.services[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Details field in *About → Default → Primary → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.services[].details
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  details: prismic.KeyTextField;
}

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Section ID field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.section_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_id: prismic.KeyTextField;

  /**
   * Headline field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headline: prismic.KeyTextField;

  /**
   * Sub Headline field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.sub_headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_headline: prismic.KeyTextField;

  /**
   * Description field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Services field in *About → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.services[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<Simplify<AboutSliceDefaultPrimaryServicesItem>>;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Item in *Communities → Default → Primary → Communities*
 */
export interface CommunitiesSliceDefaultPrimaryCommunitiesItem {
  /**
   * Label field in *Communities → Default → Primary → Communities*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: communities.default.primary.communities[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Details field in *Communities → Default → Primary → Communities*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: communities.default.primary.communities[].details
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  details: prismic.RichTextField;

  /**
   * External Link field in *Communities → Default → Primary → Communities*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: communities.default.primary.communities[].external_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  external_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Item in *Communities → Default → Primary → Images*
 */
export interface CommunitiesSliceDefaultPrimaryImagesItem {
  /**
   * Community field in *Communities → Default → Primary → Images*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: communities.default.primary.images[].community
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  community: prismic.KeyTextField;

  /**
   * Image field in *Communities → Default → Primary → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: communities.default.primary.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Communities → Default → Primary*
 */
export interface CommunitiesSliceDefaultPrimary {
  /**
   * Section ID field in *Communities → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: communities.default.primary.section_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_id: prismic.KeyTextField;

  /**
   * Headline field in *Communities → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: communities.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headline: prismic.KeyTextField;

  /**
   * Sub Headline field in *Communities → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: communities.default.primary.sub_headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_headline: prismic.KeyTextField;

  /**
   * Communities field in *Communities → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: communities.default.primary.communities[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  communities: prismic.GroupField<
    Simplify<CommunitiesSliceDefaultPrimaryCommunitiesItem>
  >;

  /**
   * Images field in *Communities → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: communities.default.primary.images[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<
    Simplify<CommunitiesSliceDefaultPrimaryImagesItem>
  >;
}

/**
 * Default variation for Communities Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CommunitiesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CommunitiesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Communities*
 */
type CommunitiesSliceVariation = CommunitiesSliceDefault;

/**
 * Communities Shared Slice
 *
 * - **API ID**: `communities`
 * - **Description**: Communities
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CommunitiesSlice = prismic.SharedSlice<
  "communities",
  CommunitiesSliceVariation
>;

/**
 * Primary content in *Contacts → Default → Primary*
 */
export interface ContactsSliceDefaultPrimary {
  /**
   * Section ID field in *Contacts → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.default.primary.section_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_id: prismic.KeyTextField;

  /**
   * Headline field in *Contacts → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headline: prismic.KeyTextField;

  /**
   * Address field in *Contacts → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.default.primary.address
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address: prismic.KeyTextField;

  /**
   * Contact Number field in *Contacts → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.default.primary.contact_number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_number: prismic.KeyTextField;

  /**
   * Email Address field in *Contacts → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.default.primary.email_address
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_address: prismic.KeyTextField;
}

/**
 * Default variation for Contacts Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contacts*
 */
type ContactsSliceVariation = ContactsSliceDefault;

/**
 * Contacts Shared Slice
 *
 * - **API ID**: `contacts`
 * - **Description**: Contacts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactsSlice = prismic.SharedSlice<
  "contacts",
  ContactsSliceVariation
>;

/**
 * Item in *Hero → Default → Primary → Taglines*
 */
export interface HeroSliceDefaultPrimaryTaglinesItem {
  /**
   * Word field in *Hero → Default → Primary → Taglines*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.taglines[].word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  word: prismic.KeyTextField;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Section ID field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.section_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_id: prismic.KeyTextField;

  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Taglines field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.taglines[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  taglines: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryTaglinesItem>>;

  /**
   * Background Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Logo field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Team → Default → Primary → Cards*
 */
export interface TeamSliceDefaultPrimaryCardsItem {
  /**
   * Portrait field in *Team → Default → Primary → Cards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.cards[].portrait
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  portrait: prismic.ImageField<never>;

  /**
   * Name field in *Team → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.cards[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Position field in *Team → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.cards[].position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  position: prismic.KeyTextField;

  /**
   * Details field in *Team → Default → Primary → Cards*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.cards[].details
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  details: prismic.RichTextField;

  /**
   * Button Label field in *Team → Default → Primary → Cards*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.cards[].button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Primary content in *Team → Default → Primary*
 */
export interface TeamSliceDefaultPrimary {
  /**
   * Section ID field in *Team → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.section_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_id: prismic.KeyTextField;

  /**
   * Headline field in *Team → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headline: prismic.KeyTextField;

  /**
   * Sub Headline field in *Team → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.sub_headline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sub_headline: prismic.KeyTextField;

  /**
   * Cards field in *Team → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: team.default.primary.cards[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  cards: prismic.GroupField<Simplify<TeamSliceDefaultPrimaryCardsItem>>;
}

/**
 * Default variation for Team Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Team*
 */
type TeamSliceVariation = TeamSliceDefault;

/**
 * Team Shared Slice
 *
 * - **API ID**: `team`
 * - **Description**: Team
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSlice = prismic.SharedSlice<"team", TeamSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimaryServicesItem,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      CommunitiesSlice,
      CommunitiesSliceDefaultPrimaryCommunitiesItem,
      CommunitiesSliceDefaultPrimaryImagesItem,
      CommunitiesSliceDefaultPrimary,
      CommunitiesSliceVariation,
      CommunitiesSliceDefault,
      ContactsSlice,
      ContactsSliceDefaultPrimary,
      ContactsSliceVariation,
      ContactsSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimaryTaglinesItem,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      TeamSlice,
      TeamSliceDefaultPrimaryCardsItem,
      TeamSliceDefaultPrimary,
      TeamSliceVariation,
      TeamSliceDefault,
    };
  }
}
