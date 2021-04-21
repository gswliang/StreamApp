import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "../components/streams/StreamCreate";
import StreamDelete from "../components/streams/StreamDelete";
import StreamEdit from "../components/streams/StreamEdit";
import StreamList from "../components/streams/StreamList";
import StreamShow from "../components/streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/delete" component={StreamDelete} />
          <Route path="/stream/show" component={StreamShow} />
          <Route path="/stream/edit" component={StreamEdit} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
