import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {id: 1, title: 'todo1', body: 'おじゃる丸を見ようとして見ない。', created_at: new Date(), updated_at: new Date()},
      {id: 2, title: 'todo2', body: '昼ごはんを食べそうで食べない。', created_at: new Date(), updated_at: new Date()},
      {id: 3, title: 'todo3', body: '夜ごはんを用意しそうで用意しない。', created_at: new Date(), updated_at: new Date()},
    ]
  },
  mutations: {
    createTodo(state, payload){
      state.todoList.push({
        id: state.todoList.slice(-1)[0].id + 1,
        ...payload
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
