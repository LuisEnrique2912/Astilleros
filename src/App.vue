<template>
  <div id="app">
    <nav>
      <Navbar></Navbar>
    </nav>
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  data: function() {
    return {};
  },
  components: {
    Navbar
  }
};
</script>
<style>
:root {
  --txt-color: rgb(62, 62, 62);
  --sh-color: rgb(163, 177, 198, 0.6);
  --sh2-color: rgba(255, 255, 255, 0.4);
  --bg-color: rgb(225, 229, 235);
  --hv-color: rgba(0, 132, 61, 1);
  --hv2-color: rgba(228, 0, 43, 1);
  --font: "Montserrat", sans-serif;
  --img-sh: 20px 25px 56px -14px var(--sh-color);
  --card-sh: 9px 9px 16px var(--sh-color), -9px -9px 16px var(--sh2-color);
}
html {
  background: var(--bg-color);
  scroll-behavior: smooth;
}
body {
  font-family: var(--font);
  color: var(--txt-color);
  margin: 0;
}
/******************************* SCROLL BAR ******************************/

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  border: none;
}

::-webkit-scrollbar-track {
  background: var(--bg-color);
  border: none;
}

::-webkit-scrollbar-thumb {
  background: var(--hv-color);
  border: none;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--txt-color);
  border: none;
}
</style>
