import React from 'react';
import { SortByEnum } from './type/main';
import Header from './component/Header';
import Pokemon from './component/Pokemon';

function App() {
  const [sortBy, setSortBy] = React.useState<SortByEnum>(SortByEnum.id);

  return (
    <div className="h-screen w-screen bg-page-background p-12">
      <Header sortBy={sortBy} setSortBy={setSortBy} />
      <Pokemon sortBy={sortBy} />
    </div>
  );
}

export default App;
