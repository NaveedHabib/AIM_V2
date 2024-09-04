
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Mon Oct 10 2022 16:01:57 GMT+0500 (Pakistan Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Sponsorspage extends ContentItem {
    public homePageTitle!: Elements.TextElement;
    public sponsors!: Elements.LinkedItemsElement<ContentItem>;
    public content!: Elements.TextElement;
    public heading!: Elements.TextElement;
    public metaDescription!: Elements.TextElement;
    public pageTitle!: Elements.TextElement;
    public visitWebsite!: Elements.TextElement;
    public banner!: Elements.AssetsElement;
    public metaTitle!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'home_page_title') {
                    return 'homePageTitle';
                }
                if (elementName === 'meta_description') {
                    return 'metaDescription';
                }
                if (elementName === 'page_title') {
                    return 'pageTitle';
                }
                if (elementName === 'visit_website') {
                    return 'visitWebsite';
                }
                if (elementName === 'meta_title') {
                    return 'metaTitle';
                }
                return elementName;
            })
        });
    }
}
