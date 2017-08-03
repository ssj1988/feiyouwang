<template>
	<div id="bottom">
		<p>
			<a href="#">电脑版</a>&nbsp;
			<a href="#">触屏版</a>
		</p>
		<i>Copyright © 2013-2016 飞牛网,ALL Rights Reserved.</i>
		<i>沪ICP备13025776号 营业执照</i>
  	</div>

</template>

<script>
export default {
	name:'Bottom'
}

</script>

<style scoped>
*{margin: 0;padding: 0;}
#bottom p{
	text-align: center;
	height: 8vw;
	line-height: 10vw;
}
#bottom p a{
	text-decoration: none;
	color: #333;
}
#bottom p a:last-child{
	color: red;
}
#bottom i{
	display: block;
	height: 6.5vw;
	line-height: 7vw;
	font-size: 3.5vw;
	text-align: center;
}
</style>