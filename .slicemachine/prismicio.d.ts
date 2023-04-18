// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Page documents */
interface PageDocumentData {
    /**
     * TItle field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * description field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Description for Social Cards
     * - **API ID Path**: page.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * image field in *Page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: page.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * type field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: The default type is "website"
     * - **API ID Path**: page.type
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    type: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = TitleIntroductionSlice | MarkdownSlice | TwoColumnSlice | OneColumnSlice | TestimonialsSlice | ShowPricesSlice | TechnologiesSlice | PartnersSlice | RoadMapSlice | RecommendedCoursesSlice | TechnologiesPillsSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = PageDocument;
/**
 * Primary content in EventCards → Primary
 *
 */
interface EventCardsSliceDefaultPrimary {
    /**
     * Id key field in *EventCards → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event_cards.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * Title field in *EventCards → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event_cards.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Endpoint field in *EventCards → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event_cards.primary.endpoint
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    endpoint: prismicT.KeyTextField;
    /**
     * Margin field in *EventCards → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: event_cards.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
}
/**
 * Default variation for EventCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: `EventCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EventCardsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<EventCardsSliceDefaultPrimary>, never>;
/**
 * Slice variation for *EventCards*
 *
 */
type EventCardsSliceVariation = EventCardsSliceDefault;
/**
 * EventCards Shared Slice
 *
 * - **API ID**: `event_cards`
 * - **Description**: `EventCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EventCardsSlice = prismicT.SharedSlice<"event_cards", EventCardsSliceVariation>;
/**
 * Primary content in Markdown → Primary
 *
 */
interface MarkdownSliceDefaultPrimary {
    /**
     * ID Key field in *Markdown → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: markdown.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * Title field in *Markdown → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: markdown.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Markdown → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: markdown.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Markdown field in *Markdown → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: markdown.primary.markdown
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    markdown: prismicT.RichTextField;
    /**
     * Enable Table of Content field in *Markdown → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: markdown.primary.enable_table_of_content
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    enable_table_of_content: prismicT.BooleanField;
    /**
     * Margin field in *Markdown → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: markdown.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
    /**
     * Padding field in *Markdown → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: markdown.primary.padding
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    padding: prismicT.KeyTextField;
}
/**
 * Default variation for Markdown Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Markdown`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MarkdownSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<MarkdownSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Markdown*
 *
 */
type MarkdownSliceVariation = MarkdownSliceDefault;
/**
 * Markdown Shared Slice
 *
 * - **API ID**: `markdown`
 * - **Description**: `Markdown`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MarkdownSlice = prismicT.SharedSlice<"markdown", MarkdownSliceVariation>;
/**
 * Primary content in OneColumn → Primary
 *
 */
interface OneColumnSliceDefaultPrimary {
    /**
     * ID Key field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * Title field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * SubTitle field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * Description field in *OneColumn → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Button label field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
    /**
     * Link Button field in *OneColumn → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: one_column.primary.link_button
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    link_button: prismicT.BooleanField;
    /**
     * Button url field in *OneColumn → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.button_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button_url: prismicT.LinkField;
    /**
     * KPI Title 1 field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.kpi_title_1
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    kpi_title_1: prismicT.KeyTextField;
    /**
     * KPI Description 1 field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.kpi_description_1
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    kpi_description_1: prismicT.KeyTextField;
    /**
     * KPI Color 1 field in *OneColumn → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.kpi_color_1
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    kpi_color_1: prismicT.ColorField;
    /**
     * KPI Title 2 field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.kpi_title_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    kpi_title_2: prismicT.KeyTextField;
    /**
     * KPI Description 2 field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.kpi_description_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    kpi_description_2: prismicT.KeyTextField;
    /**
     * KPI Color 2 field in *OneColumn → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.kpi_color_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    kpi_color_2: prismicT.ColorField;
    /**
     * KPI Title 3 field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.kpi_title_3
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    kpi_title_3: prismicT.KeyTextField;
    /**
     * KPI Description 3 field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.kpi_description_3
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    kpi_description_3: prismicT.KeyTextField;
    /**
     * KPI Color 3 field in *OneColumn → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.kpi_color_3
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    kpi_color_3: prismicT.ColorField;
    /**
     * background field in *OneColumn → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.background
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background: prismicT.ColorField;
    /**
     * padding-md field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: one_column.primary.paddingMd
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    paddingMd: prismicT.KeyTextField;
    /**
     * Margin field in *OneColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: one_column.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
}
/**
 * Default variation for OneColumn Slice
 *
 * - **API ID**: `default`
 * - **Description**: `OneColumn`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OneColumnSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<OneColumnSliceDefaultPrimary>, never>;
/**
 * Slice variation for *OneColumn*
 *
 */
type OneColumnSliceVariation = OneColumnSliceDefault;
/**
 * OneColumn Shared Slice
 *
 * - **API ID**: `one_column`
 * - **Description**: `OneColumn`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OneColumnSlice = prismicT.SharedSlice<"one_column", OneColumnSliceVariation>;
/**
 * Primary content in Partners → Primary
 *
 */
interface PartnersSliceDefaultPrimary {
    /**
     * ID Key field in *Partners → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: partners.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * title field in *Partners → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: partners.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * images field in *Partners → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Images Url
     * - **API ID Path**: partners.primary.images
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    images: prismicT.RichTextField;
    /**
     * Margin field in *Partners → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: partners.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
}
/**
 * Default variation for Partners Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Partners`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PartnersSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PartnersSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Partners*
 *
 */
type PartnersSliceVariation = PartnersSliceDefault;
/**
 * Partners Shared Slice
 *
 * - **API ID**: `partners`
 * - **Description**: `Partners`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PartnersSlice = prismicT.SharedSlice<"partners", PartnersSliceVariation>;
/**
 * Primary content in RecommendedCourses → Primary
 *
 */
interface RecommendedCoursesSliceDefaultPrimary {
    /**
     * id field in *RecommendedCourses → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: recommended_courses.primary.componentId
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    componentId: prismicT.KeyTextField;
    /**
     * background field in *RecommendedCourses → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: recommended_courses.primary.background
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    background: prismicT.KeyTextField;
    /**
     * title field in *RecommendedCourses → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: recommended_courses.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * technologies field in *RecommendedCourses → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: recommended_courses.primary.technologies
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    technologies: prismicT.KeyTextField;
    /**
     * Margin field in *RecommendedCourses → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: recommended_courses.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
}
/**
 * Default variation for RecommendedCourses Slice
 *
 * - **API ID**: `default`
 * - **Description**: `RecommendedCourses`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RecommendedCoursesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<RecommendedCoursesSliceDefaultPrimary>, never>;
/**
 * Slice variation for *RecommendedCourses*
 *
 */
type RecommendedCoursesSliceVariation = RecommendedCoursesSliceDefault;
/**
 * RecommendedCourses Shared Slice
 *
 * - **API ID**: `recommended_courses`
 * - **Description**: `RecommendedCourses`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RecommendedCoursesSlice = prismicT.SharedSlice<"recommended_courses", RecommendedCoursesSliceVariation>;
/**
 * Primary content in RoadMap → Primary
 *
 */
interface RoadMapSliceDefaultPrimary {
    /**
     * ID Key field in *RoadMap → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: road_map.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * Course slug field in *RoadMap → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: road_map.primary.course_slug
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    course_slug: prismicT.KeyTextField;
    /**
     * Title field in *RoadMap → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: road_map.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Margin field in *RoadMap → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: road_map.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
}
/**
 * Default variation for RoadMap Slice
 *
 * - **API ID**: `default`
 * - **Description**: `RoadMap`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RoadMapSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<RoadMapSliceDefaultPrimary>, never>;
/**
 * Slice variation for *RoadMap*
 *
 */
type RoadMapSliceVariation = RoadMapSliceDefault;
/**
 * RoadMap Shared Slice
 *
 * - **API ID**: `road_map`
 * - **Description**: `RoadMap`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RoadMapSlice = prismicT.SharedSlice<"road_map", RoadMapSliceVariation>;
/**
 * Primary content in ShowPrices → Primary
 *
 */
interface ShowPricesSliceDefaultPrimary {
    /**
     * ID Key field in *ShowPrices → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: show_prices.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * Title field in *ShowPrices → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: show_prices.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *ShowPrices → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: show_prices.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Plan field in *ShowPrices → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: show_prices.primary.plan
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    plan: prismicT.KeyTextField;
    /**
     * Bullets field in *ShowPrices → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: show_prices.primary.bullets
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bullets: prismicT.RichTextField;
    /**
     * Margin field in *ShowPrices → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: show_prices.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
}
/**
 * Default variation for ShowPrices Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ShowPrices`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ShowPricesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ShowPricesSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ShowPrices*
 *
 */
type ShowPricesSliceVariation = ShowPricesSliceDefault;
/**
 * ShowPrices Shared Slice
 *
 * - **API ID**: `show_prices`
 * - **Description**: `ShowPrices`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ShowPricesSlice = prismicT.SharedSlice<"show_prices", ShowPricesSliceVariation>;
/**
 * Primary content in Technologies → Primary
 *
 */
interface TechnologiesSliceDefaultPrimary {
    /**
     * ID Key field in *Technologies → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: technologies.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * Endpoint field in *Technologies → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: technologies.primary.endpoint
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    endpoint: prismicT.KeyTextField;
    /**
     * Margin field in *Technologies → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: technologies.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
}
/**
 * Default variation for Technologies Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Technologies`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TechnologiesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TechnologiesSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Technologies*
 *
 */
type TechnologiesSliceVariation = TechnologiesSliceDefault;
/**
 * Technologies Shared Slice
 *
 * - **API ID**: `technologies`
 * - **Description**: `Technologies`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TechnologiesSlice = prismicT.SharedSlice<"technologies", TechnologiesSliceVariation>;
/**
 * Primary content in TechnologiesPills → Primary
 *
 */
interface TechnologiesPillsSliceDefaultPrimary {
    /**
     * id field in *TechnologiesPills → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: technologies_pills.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * technologies field in *TechnologiesPills → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: technologies_pills.primary.technologies
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    technologies: prismicT.RichTextField;
    /**
     * margin field in *TechnologiesPills → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: technologies_pills.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
}
/**
 * Default variation for TechnologiesPills Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TechnologiesPills`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TechnologiesPillsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TechnologiesPillsSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TechnologiesPills*
 *
 */
type TechnologiesPillsSliceVariation = TechnologiesPillsSliceDefault;
/**
 * TechnologiesPills Shared Slice
 *
 * - **API ID**: `technologies_pills`
 * - **Description**: `TechnologiesPills`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TechnologiesPillsSlice = prismicT.SharedSlice<"technologies_pills", TechnologiesPillsSliceVariation>;
/**
 * Primary content in Testimonials → Primary
 *
 */
interface TestimonialsSliceDefaultPrimary {
    /**
     * ID Key field in *Testimonials → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonials.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * Title field in *Testimonials → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonials.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Endpoint field in *Testimonials → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonials.primary.endpoint
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    endpoint: prismicT.KeyTextField;
    /**
     * Margin field in *Testimonials → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: testimonials.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
}
/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Testimonials`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TestimonialsSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Testimonials*
 *
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;
/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: `Testimonials`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialsSlice = prismicT.SharedSlice<"testimonials", TestimonialsSliceVariation>;
/**
 * Primary content in TitleIntroduction → Primary
 *
 */
interface TitleIntroductionSliceDefaultPrimary {
    /**
     * ID Key field in *TitleIntroduction → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: title_introduction.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * Title field in *TitleIntroduction → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: title_introduction.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * buttonText field in *TitleIntroduction → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: title_introduction.primary.buttontext
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    buttontext: prismicT.RichTextField;
    /**
     * highlight field in *TitleIntroduction → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: title_introduction.primary.highlight
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    highlight: prismicT.RichTextField;
    /**
     * description field in *TitleIntroduction → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: title_introduction.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * bullets field in *TitleIntroduction → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: title_introduction.primary.bullets
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bullets: prismicT.RichTextField;
    /**
     * image field in *TitleIntroduction → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: title_introduction.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Margin field in *TitleIntroduction → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: title_introduction.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
    /**
     * Grid gap field in *TitleIntroduction → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Space between columns in pixels
     * - **API ID Path**: title_introduction.primary.grid_gap
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    grid_gap: prismicT.KeyTextField;
}
/**
 * Default variation for TitleIntroduction Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TitleIntroduction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TitleIntroductionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TitleIntroductionSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TitleIntroduction*
 *
 */
type TitleIntroductionSliceVariation = TitleIntroductionSliceDefault;
/**
 * TitleIntroduction Shared Slice
 *
 * - **API ID**: `title_introduction`
 * - **Description**: `TitleIntroduction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TitleIntroductionSlice = prismicT.SharedSlice<"title_introduction", TitleIntroductionSliceVariation>;
/**
 * Primary content in TwoColumn → Primary
 *
 */
interface TwoColumnSliceDefaultPrimary {
    /**
     * ID Key field in *TwoColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column.primary.id_key
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    id_key: prismicT.KeyTextField;
    /**
     * Title field in *TwoColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Subtitle field in *TwoColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    subtitle: prismicT.KeyTextField;
    /**
     * Description field in *TwoColumn → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * image field in *TwoColumn → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Button label field in *TwoColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column.primary.button_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_label: prismicT.KeyTextField;
    /**
     * Link Button field in *TwoColumn → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: two_column.primary.link_button
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    link_button: prismicT.BooleanField;
    /**
     * Button url field in *TwoColumn → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column.primary.button_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button_url: prismicT.LinkField;
    /**
     * Background color field in *TwoColumn → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: Example: #FFFFFF
     * - **API ID Path**: two_column.primary.background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
    /**
     * Image position field in *TwoColumn → Primary*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column.primary.image_position
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    image_position: prismicT.SelectField<"left" | "right">;
    /**
     * Margin field in *TwoColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: top, right, bottom, left
     * - **API ID Path**: two_column.primary.margin
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    margin: prismicT.KeyTextField;
    /**
     * Grid gap field in *TwoColumn → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: two_column.primary.grid_gap
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    grid_gap: prismicT.KeyTextField;
}
/**
 * Default variation for TwoColumn Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TwoColumn`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TwoColumnSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TwoColumnSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TwoColumn*
 *
 */
type TwoColumnSliceVariation = TwoColumnSliceDefault;
/**
 * TwoColumn Shared Slice
 *
 * - **API ID**: `two_column`
 * - **Description**: `TwoColumn`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TwoColumnSlice = prismicT.SharedSlice<"two_column", TwoColumnSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, EventCardsSliceDefaultPrimary, EventCardsSliceDefault, EventCardsSliceVariation, EventCardsSlice, MarkdownSliceDefaultPrimary, MarkdownSliceDefault, MarkdownSliceVariation, MarkdownSlice, OneColumnSliceDefaultPrimary, OneColumnSliceDefault, OneColumnSliceVariation, OneColumnSlice, PartnersSliceDefaultPrimary, PartnersSliceDefault, PartnersSliceVariation, PartnersSlice, RecommendedCoursesSliceDefaultPrimary, RecommendedCoursesSliceDefault, RecommendedCoursesSliceVariation, RecommendedCoursesSlice, RoadMapSliceDefaultPrimary, RoadMapSliceDefault, RoadMapSliceVariation, RoadMapSlice, ShowPricesSliceDefaultPrimary, ShowPricesSliceDefault, ShowPricesSliceVariation, ShowPricesSlice, TechnologiesSliceDefaultPrimary, TechnologiesSliceDefault, TechnologiesSliceVariation, TechnologiesSlice, TechnologiesPillsSliceDefaultPrimary, TechnologiesPillsSliceDefault, TechnologiesPillsSliceVariation, TechnologiesPillsSlice, TestimonialsSliceDefaultPrimary, TestimonialsSliceDefault, TestimonialsSliceVariation, TestimonialsSlice, TitleIntroductionSliceDefaultPrimary, TitleIntroductionSliceDefault, TitleIntroductionSliceVariation, TitleIntroductionSlice, TwoColumnSliceDefaultPrimary, TwoColumnSliceDefault, TwoColumnSliceVariation, TwoColumnSlice };
    }
}
