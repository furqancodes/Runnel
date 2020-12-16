import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import RunnelCreate from "./runnelCRUD/RunnelCreate";
import RunnelEdit from "./runnelCRUD/RunnelEdit";
import RunnelShow from "./runnelCRUD/RunnelShow";
import RunnelList from "./runnelCRUD/RunnelList";
import RunnelDelete from "./runnelCRUD/RunnelDelete";
const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={RunnelList} />
          <Route path="/runnel/new" exact component={RunnelCreate} />
          <Route path="/runnel/edit" exact component={RunnelEdit} />
          <Route path="/runnel/delete" exact component={RunnelDelete} />
          <Route path="/runnel/show" exact component={RunnelShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
