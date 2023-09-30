<template>
	<div class="wrap">
		<div class="loading">
			<div class="bounceball"></div>
			<div class="text">LOADING</div>
		</div>
  </div>
</template>

<style>
	@import url(https://fonts.googleapis.com/css?family=Montserrat);

:root {
  --width: 30px;
  --height: 30px;
  --bounce-height: 50px;
}

body {
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: Montserrat;
}

.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text {
	font-size: 40px;
  color: #fbae17;
  display: inline-block;
  margin-left: 5px;
}

.bounceball {
  position: relative;
  display: inline-block;
  height: 37px;
  width: var(--width);
}

.bounceball:before {
  position: absolute;
  content: "";
  display: block;
  top: 0;
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  background-color: #fbae17;
  transform-origin: 50%;
  animation: bounce 500ms alternate infinite ease;
}

@keyframes bounce {
  0% {
    top: var(--bounce-height);
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: var(--height);
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}

</style>