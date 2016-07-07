import { createStore } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

import reducers from "./reducers/index";

// TODO: Reemplazar por una llamada ajax a través de una acción de Redux
import users from "./data/users";

const defaultStore = {
    users
};

const store = createStore(reducers, defaultStore);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
