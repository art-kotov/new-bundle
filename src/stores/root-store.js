// Core
import Reactotron from "reactotron-react-js";
import { types, flow } from "mobx-state-tree";
import { api } from "../services/api";

const { model, array, string } = types;

const Todo = types.model("Todo", {
  title: types.string
});
const Users = model("Users", {
  users: array(string)
})

const rootStore = model("RootStore", {
  name: "Art",
  done: false,
  users: Users,
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
  getData: flow(function* getData() {
    try {
      const response = yield api.posts.getPosts();

      self.posts = response.data;
    } catch (e) {
      console.log(e);
    }
  }),
  setName(val) {
    self.name = val;
  }
}));

const store = rootStore.create({
  users: {}
});

export default store;

Reactotron.trackMstNode(store);
