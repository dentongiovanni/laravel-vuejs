<template>
	<div>
	<h1>Member</h1>
	 <router-link class="btn btn-primary btn-xs mr-5" to="/member/form">Add Member</router-link> 
	 <router-link class="btn btn-primary btn-xs ml-5" to="/member/list">Member List</router-link> 
	 <br>
	 <br>
	<router-view/>
	</div>

</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';	

const container = {
  actions: mapActions({
    collect: 'members/collect'
  })
}	

export default{
    methods: {
      ...container.actions,
    },
    
    created() {
       this.collect('user');
      
    }
  }
</script>