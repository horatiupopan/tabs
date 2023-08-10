import { useState } from 'react';
import TabHeader from './tabHeader.js';

const TabsPage = ({tabs}) => {

    const tabTitles = tabs.map(t => t.tab);
    const [activeTab, setActiveTab] = useState(tabTitles[0]);
    const tabHeaders = tabTitles.map(t => <TabHeader tabTitle={t} isActive={activeTab === t} setActive={setActiveTab}/>);
    const tabsContent = tabs.map(t => t.content);
    const currentTabContent = tabTitles.filter(t => activeTab === t).map(t => tabsContent[tabTitles.indexOf(t)]);

    return (
        <div>
            <ul style={{display: 'flex', justifyContent: 'space-around', listStyleType: 'none'}}>{tabHeaders}</ul>
            <div>
                {currentTabContent}
            </div>
        </div>
    );
}

export default TabsPage;