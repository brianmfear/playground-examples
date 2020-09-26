import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    /**
     * @track indicates that if this object changes,
     * the UI should update to reflect those changes.
     */
    @track
    title = 'Welcome to Lightning Web Components Playground!';

    @track
    showFeatures = true;

    /**
     * Getter for the features property
     */
    get features() {
        return [
            {
                label: 'Edit the name and description of your component.',
                icon: 'utility:edit',
            },
            {
                label:
                    'Create permanent, shareable URLs that anyone can view within your org.',
                icon: 'utility:save',
            },
            {
                label: 'View changes to code instantly with Live Compilation.',
                icon: 'utility:refresh',
            },
            {
                label: 'Style your components with SLDS.',
                icon: 'utility:brush',
            },
            {
                label: 'Download and upload components as zip files.',
                icon: 'utility:download',
            },
        ];
    }
}
