<template>
	<div>
		<div class="top-title">
			<h2 align="center">Vue.Test</h2>
		</div>	
		<router-view></router-view>
	</div>
</template>
<script> 
export default{
	name:'Index',
	props:['isHome']
}
</script>
<style>
	.top-title{	
		padding:5px 20px 15px 20px;
		background:#cecece;
		border-bottom:1px solid #333;
		margin-bottom: 20px;
	}
	.to-link{
		color:#f00;
		text-decoration: none;
		border:1px solid #c90;
		padding: 5px  10px;
		border-radius: 5px;
		background:#fff;
	}
</style>