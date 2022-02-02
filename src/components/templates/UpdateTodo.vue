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
                    <h2 class="card-title">todo編集</h2>
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
                        <button type="button" class="btn btn-primary" @click="handleEdit(title, body)">更新</button>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- /シンプルTODO作成フォーム -->
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
// import moment from 'moment';

export default {
  data(){
    return {
      title: '',
      body: '',
    }
  },
  mounted(){
    const todoId = Number(this.$route.params.id);
    const item = this.$store.state.todoList.find( todo => todo.id === todoId );
    this.title = item.title;
    this.body = item.body;
  },
  filters: {

  },
  methods: {
    handleEdit(title, body){
      this.$store.commit('updateTodo', {id: Number(this.$route.params.id), title, body});
      this.$router.push('/');
    }
  }
}
</script>