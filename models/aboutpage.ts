
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Wed Jul 17 2024 12:32:01 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Aboutpage extends ContentItem {
    public title!: Elements.TextElement;
    public metaTitle!: Elements.TextElement;
    public metaDescription!: Elements.TextElement;
    public bannerHeading!: Elements.TextElement;
    public sectionHeading!: Elements.TextElement;
    public aboutContent!: Elements.RichTextElement;
    public missionTitle!: Elements.TextElement;
    public missionContent!: Elements.RichTextElement;
    public visionTitle!: Elements.TextElement;
    public visionContent!: Elements.RichTextElement;
    public embedVideoLink!: Elements.TextElement;
    public videoThumbnail!: Elements.AssetsElement;
    public aboutImages!: Elements.AssetsElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'meta_title') {
                    return 'metaTitle';
                }
                if (elementName === 'meta_description') {
                    return 'metaDescription';
                }
                if (elementName === 'banner_heading') {
                    return 'bannerHeading';
                }
                if (elementName === 'section_heading') {
                    return 'sectionHeading';
                }
                if (elementName === 'about_content') {
                    return 'aboutContent';
                }
                if (elementName === 'mission_title') {
                    return 'missionTitle';
                }
                if (elementName === 'mission_content') {
                    return 'missionContent';
                }
                if (elementName === 'vision_title') {
                    return 'visionTitle';
                }
                if (elementName === 'vision_content') {
                    return 'visionContent';
                }
                if (elementName === 'embed_video_link') {
                    return 'embedVideoLink';
                }
                if (elementName === 'video_thumbnail') {
                    return 'videoThumbnail';
                }
                if (elementName === 'about_images') {
                    return 'aboutImages';
                }
                return elementName;
            })
        });
    }
}
