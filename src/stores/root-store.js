// Core
import Reactotron from "reactotron-react-js";
import { useContext, createContext } from "react";
import { types, flow } from "mobx-state-tree";

const { model, array } = types;

const Todo = types.model({
  title: types.string
});

const rootStore = model("RootStore", {
  name: "Art",
  done: false,
  posts: array(
    model({
      userId: 0,
      id: 0,
      title: "",
      body: ""
    })
  ),
  todos: array(Todo)
}).actions(self => ({
  getData: flow(function*() {
    const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
    const data = yield response.json();
    console.log(data);
    self.posts = data;
  }),
  setName(val) {
    self.name = val;
  }
}));

const store = rootStore.create();

export default store;

Reactotron.trackMstNode(store);
