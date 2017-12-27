<template>
  <div class="hello">
		<h3>Login to Pogo LAUNCHPAD</h3>
			<form action="login" method="post" class="setupform">
				<label for="username">Username</label>
				<input type="text" id="podcastname" name="username">
				<label for="userpassword">Password</label>
				<input type="password" id="podcasthost" name="password">
				<input type="submit" value="Submit">
			</form>
		</div>
</template>
<script>
export default {
  name: 'Login'
}
</script>