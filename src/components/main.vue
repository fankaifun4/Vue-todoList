<template>
	<div class="main">
		<div class="main-input-wrap"> <label> Name: </label><input type="text" class="mainInput" v-model="name" placeholder="import you want find the name" @keyup.enter="getName" /> </div>
		
		<hiLine :persons="namesList"></hiLine>
	</div>
</template>
<script>
import hiLine from './list.vue'
export default{
	name:"index",
	components:{
		hiLine
	},
	data(){
		return {
			name:"",
			namesList:[
				// {
				// 	name:"fankaixuan",
				// 	sex:"man",
				// 	age:"29"
				// }
			]
		}
	},
	methods:{
		getName(e){					
			if( this.name=="" || this.name.length<=0 ) return;
			this.namesList.push({name:this.name})						
		}
	}
}
</script>
<style scoped lang="scss">
.main{
	width:600px;
	margin:0 auto;
	padding:30px 5px;
	background: #efefef;
	border:1px solid #000;
	border-radius: 5px;
	.main-input-wrap{
		margin:0 auto;
		width:400px;
	}
	.mainInput{
		padding:3px 10px;
		height: 25px;
		line-height: 25px;
		display: inline-block;	
		width:300px;
	}	
}

</style>