<template>

 <div class="container">
   
 <div class="row">
 <div class="col-md-6  col-md-offset-2">
         <form @submit.prevent="handleSubmit" >
            <div class="form-group">
              <label for="firstname">Firstname</label>
              <input type="text" v-model="member.name" class="form-control" id="name">
            </div>
            <div class="form-group">
              <label for="lastname">Email</label>
              <input type="text" v-model="member.email" class="form-control" id="email">
            </div>

            <button type="submit"  class="btn btn-primary btn-xs">Submit</button>
          </form>
  </div>
 
  </div>
 
  </div>

</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';  

const container = {
  state: mapState({ 
    selected: state => state.members.selected,
    members: state => state.members.data,
   }),
  getters: mapGetters({
    current:'members/current'
  }),
  actions: mapActions({
    store: 'members/store',
    update: 'members/update',
  })
} 

export default{
    data () {
      return {
        member: { id:'',
                  name:'',
                  password:'password123',
                  role:'2',
                  email:''}
       }
    },
    computed: {
      ...container.state,
      ...container.getters,
    },
    methods: {
      ...container.actions,
     
     handleSubmit(e){
          let payload = {query:'user',...this.member};
          if(this.member.id == ''){
             this.store(payload);  
          }else{
            this.update(payload);  
          }
              this.$router.push('/member/list');    
      }
    },
    mounted(){

      if(this.$route.name=='edit'){
         this.member = {...this.selected};
      }
      
    },
    watch:{
      selected: function(value){
        this.$router.push('/member/list');
      }
    }
  }
</script>
