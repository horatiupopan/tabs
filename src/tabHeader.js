import './tabs.css';

const TabHeader = ({tabTitle, isActive, setActive}) => {

    return (
        <li className={isActive ? 'selected' : null} onClick={() => setActive(tabTitle)} >
            {tabTitle}
        </li>
    );
}

export default TabHeader;