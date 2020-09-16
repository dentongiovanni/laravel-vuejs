<template>
	

<div class="container">
	<div class="row">
		 <div class="col-md-12">
       <div class="table-responsive">
          <table id="mytable" class="table table-bordred table-striped">
		      <thead>
		        <th></th>
			      <th>Name</th>
			      <th>Email</th>
		      	<th>Edit</th>
			      <th>Delete</th>
		      </thead>
    		 <tbody >
    		  <tr v-for="member in members" :key="member.id" >
    		    <td>{{ member.id }}</td>
    		    <td>{{ member.name }}</td>
    			  <td>{{ member.email }}</td>
    	    	<td><a href="#" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" @click.prevent='edit(member.id)'>EDIT</a></td>
    		  	<td><a href="#"  class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" @click.prevent='remove(member.id)' >DELETE</a></td>
    		  </tr>
    		</tbody>
    		</table>

		   </div>
	    </div>
   </div>
</div>

</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';	

const container = {
  state: mapState({ 
    members: state => state.members.data,
    selected: state => state.members.selected,
	 }),
  getters: mapGetters({
    current:'members/current'
  }),
  actions: mapActions({
    collect: 'members/collect',
    destroy: 'members/destroy',
   
  })
}	

export default{
    data () {
      return {
        showForm: true
       }
    },
    computed: {
      ...container.state,
      ...container.getters,
    },
    methods: {
      ...container.actions,
       edit(id){
        this.current(id);
        },
       remove(id){
         let payload = {query:'user',id:id};
        this.destroy(payload);
       }
    },
    watch:{
        selected: function(value){
            this.member  = {...value};
            this.$router.push('/member/edit');
        },
  mounted(){
       console.log(members);
    },


    },
    
  }
</script>
