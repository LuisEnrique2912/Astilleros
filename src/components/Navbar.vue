<template>
  <div class="navbar">
    <div class="navbar__brand">
      <router-link to="/" class="brand">
        <img src="../assets/logo-ast.svg" alt="astilleros" />
      </router-link>
    </div>
    <div class="navbar__items">
      <router-link to="/serv">Servicios</router-link>
      <router-link to="/infra">Infraestructura</router-link>
      <router-link to="/proj">Proyectos</router-link>
      <router-link to="/sec">Seguridad</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.navbar {
  position: relative;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 40px 10px 40px;
}
.navbar__brand {
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: flex-start;
}
.navbar__brand img {
  width: 80px;
}
.navbar__items {
  width: 50%;
  height: auto;
  float: right;
  display: flex;
  justify-content: space-between;
}
.navbar__items a {
  text-decoration: none;
  font-weight: 700;
  color: var(--bg-color);
}
.navbar__items a:hover {
  text-decoration: var(--hv-color);
  font-weight: 700;
  color: var(--sh-color);
}
</style>