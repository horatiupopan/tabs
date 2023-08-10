import './App.css';
import TabsPage from './tabsPage.js';

function App() {
  const mytabs = [
    {
      tab: 'cats',
      content: 'Princess Caroline',
    },
    {
      tab: 'dogs',
      content: 'Rex',
    },
    {
      tab: 'parrots',
      content: 'kiki',
    },
  ]
  return (
    <div className="App">
      <TabsPage tabs={mytabs} />
    </div>
  );
}

export default App;
