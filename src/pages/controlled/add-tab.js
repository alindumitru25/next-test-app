import { useState } from "react";
import TabStrip from "../../components/TabPanel/TabStrip";


const AddTab = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [tabs, setTabs] = useState([
        {
            title: "Tab1",
            id: 1
        },
        {
            title: "Tab2",
            id: 2
        }
    ]);

    return (
        <div>
            <TabStrip
                tabs={tabs}
                selectedTab={selectedTab}
            />
            <button className="AddButton" onClick={() => {
                setTabs([...tabs, {
                    title: "Tab" + (tabs.length + 1),
                    id: tabs.length + 1
                }])
            }}>
                add tab 3
            </button>
        </div>
    )
}

export default AddTab;
