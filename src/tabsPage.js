import { useState } from 'react';
import Tabs from './tabs.js';
import TabHeader from './tabHeader.js';
import FirstTab from './firstTab.js';
import SecondTab from './secondTab.js';
import ThirdTab from './thirdTab.js';

const TabsPage = () => {

    const tabTitles = ['First Tab', 'Second Tab', 'Third Tab'];
    const [activeTab, setActiveTab] = useState(tabTitles[0]);
    const tabHeaders = tabTitles.map(t => <TabHeader tabTitle={t} isActive={activeTab === t} setActive={setActiveTab}/>);
    const tabsContent = [<FirstTab />, <SecondTab />, <ThirdTab />];
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