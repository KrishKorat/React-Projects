import Tabs from './tabs';
import './tabs.css';


function RandomComponent() {
  return <h1>Random Component</h1>;
}


export default function TabTest() {

  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is a tab 1.</div>,
    }, {
      label: "Tab 2",
      content: <div>This is a tab 2.</div>,
    }, {
      label: "Tab 3",
      content: <RandomComponent/>,
    }
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return (
    <Tabs tabsContent={tabs} onChange={handleChange} />
  );
}