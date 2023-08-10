import './tabs.css';
import {useState, useRef} from 'react';


//first version. it has to be reusable

const TabsContent = ({i}) => {
    return (<p style={{display: "flex"}}>This is tab number {i}.</p>);
}

const Tabs = ({selectedTab, }) => {
    const [tabs, setTabs] = useState([true, false, false]);
    let tabRef = useRef(1);

    const clickTab = (i) => {
        let array = Array(3).fill(false);
        array[i] = true;
        setTabs(array);
        tabRef.current = i + 1;
    }

    return (
        <>
            <h1>TABS</h1>
            <div style={{display: "flex", gap: "20px"}}>
                <h2 onClick={() => clickTab(0)} className={ tabs[0] ? 'selected' : null }>First Tab</h2>
                <h2 onClick={() => clickTab(1)} className={ tabs[1] ? 'selected' : null }>Second Tab</h2>
                <h2 onClick={() => clickTab(2)} className={ tabs[2] ? 'selected' : null }>Third Tab</h2>
            </div>
            {tabs[0] && <TabsContent i={1}/>}
            {tabs[1] && <TabsContent i={2}/>}
            {tabs[2] && <TabsContent i={3}/>}
        </>
    );
}

export default Tabs;