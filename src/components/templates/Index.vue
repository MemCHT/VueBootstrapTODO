<template>
  <main>
    <div class="container-fluid mt-3">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="text-left">
            <div class="row">
              <div class="col-12">
                <!-- シンプルTODO作成フォーム -->
                <div class="card">
                  <div class="card-body">
                    <h2 class="card-title">todo追加</h2>
                    <form>
                      <div class="form-group">
                        <label for="">タイトル</label>
                        <input type="text" class="form-control" v-model="title">
                      </div>
                      <div class="form-group">
                        <label for="">内容</label>
                        <input type="text" class="form-control" v-model="body">
                      </div>
                      <div>
                        <button type="button" class="btn btn-primary" @click="handleCreate(title, body)">追加</button>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- /シンプルTODO作成フォーム -->
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-12">
                <!-- シンプルTODO一覧表示テーブル -->
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">タイトル</th>
                      <th scope="col">内容</th>
                      <th scope="col">登録日</th>
                      <th scope="col">更新日</th>
                      <th scope="col">編集</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in $store.state.todoList" :key="item.id">
                      <th scope="row">{{ item.id }}</th>
                      <td>{{ item.title }}</td>
                      <td>{{ item.body }}</td>
                      <td>{{ item.created_at | moment('YYYY年MM月DD日 hh時mm分ss秒') }}</td>
                      <td>{{ item.updated_at | moment('YYYY年MM月DD日 hh時mm分ss秒') }}</td>
                      <td><router-link class="btn btn-primary rounded-pill" :to="`/todo/${item.id}/update`">編集</router-link></td>
                    </tr>
                  </tbody>
                </table>
                <!-- シンプルTODO一覧表示テーブル -->
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import moment from 'moment';

export default {
  data(){
    return {
      title: '',
      body: '',
      
    }
  },
  filters: {
    moment(date, format){
      return moment(date).format(format);
    }
  },
  methods: {
    handleCreate(title, body){
      this.$store.commit('createTodo', {title, body});
      this.title = '';
      this.body = '';
    }
  }
}
</script>