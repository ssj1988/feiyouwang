<template>
  <div id="mine">
  	
  	<Top></Top>
  	
  	<Mine1></Mine1>
  	
  	<Dingdan></Dingdan>
  	
  	<Zichan></Zichan>
  	
  	<Menu1></Menu1>
  	
  	<Bottom></Bottom>
	
  </div>
</template>

<script>

import Mine1 from './Minecomponents/Mine1'
import Dingdan from './Minecomponents/Dingdan'
import Zichan from './Minecomponents/Zichan'
import Menu1 from './Minecomponents/Menu1'
import Login from './Login'
import Top from './Minecomponents/Top'
import Bottom from './Minecomponents/Bottom'
import Register from './Register'

export default {
  name: 'mine',
  components:{
  	Mine1,
  	Dingdan,
  	Zichan,
  	Menu1,
  	Login,
  	Top,
  	Bottom,
  	Register
  }
}
</script>

<style scoped>
*{margin: 0;padding: 0;}

#mine{
	background: #ddd;
}
</style>
