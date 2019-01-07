<template>
	<div>
		<nuxt-link tag="li" to="/" class="nav-link col-md-2 col-sm-12 text-center" active-class="active" exact><a>HOME</a></nuxt-link>
		<nuxt-link tag="li" to="/images" class="nav-link col-md-2 col-sm-12 text-center" active-class="active" exact><a>IMAGES</a></nuxt-link>
    <nuxt-link tag="li" to="/videos" class="nav-link col-md-2 col-sm-12 text-center" active-class="active" exact><a>VIDEOS</a></nuxt-link>
		<nuxt/>
	</div>
</template>
<style scoped>
li {
    display: inline-block;
  }

  li a, li button {
    display: block;
    height: 30px;
		margin: 10px;
		padding: 5px;
    text-align: center;
    line-height: 30px;
    text-decoration: none;
  }

  li ul {
    display: none;
  }

  li ul li {
    display: block;
    float: none;
  }

  li ul li a, li ul li button {
    width: auto;
    min-width: 100px;
    padding: 0 20px;
  }

  .show-menu {
    text-decoration: none;
    text-align: center;
    padding: 10px 0;
    display: none;
  }

  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox]:checked~#menu {
    display: block;
  }
</style>
