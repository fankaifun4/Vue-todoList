<template>
	<div>
		<div class="line-all"><input type="checkbox"  v-model='checkedAll'  id="checkAll" @click="checkAll">  
		<label for="checkAll">check All  {{ checkedAll }} </label><input type="button" value="删除勾选" @click="deleteChecked"></div>
		<div class="line-list" v-for="(person,index) in persons">						
			<span>{{ index }} --- </span>
			<span> <input type="checkbox" v-model="person.checked" />	</span>
			<span> {{ person.name }}  </span>
			<span> <button @click="deletePerson(index)">删除</button></span>
		</div>		
	</div>
</template>
<script>
	export default{
		name:'hiLine',
		props:[
			'persons'
		],
		data(){
			return{
				checkedAll:false,			
			}
		},

		methods:{
			deletePerson:function(index){
				this.$props.persons.splice(index,1);			
			},
			checkAll:function(e){
				if( this.checkedAll ){
					this.$props.persons.forEach((item)=>{
						item.checked=true;
					})
				}else{
					this.$props.persons.forEach((item)=>{
						item.checked=false;
					})
				}
			},			
			deleteChecked:function(){
				let persons=this.$props.persons;					
				for( let i = persons.length - 1; i >= 0; i-- ){
					if( persons[i].checked ){
						persons.splice(i,1)
					}
				}
			}
		}
	}
</script>
<style scoped lang="scss">

	.line-list{
		width:400px;
		margin:0 auto;
		padding:10px 3px;
		background:#fefefe;
		border:1px solid #c90;
		margin-top:15px;
		input[type=text]{
			padding:3px 5px;
			margin-left:55px;
		}
		
	}
	.line-all{
		width:400px;
		margin:0 auto;
		padding:10px 3px;	
		margin-top:15px;
	}
</style>