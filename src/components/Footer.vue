<template>
  <div class="footer">
    <div class="footer__nav">
      <div class="footer__nav--item">
        <router-link to="/serv">Servicios</router-link>
        <router-link to="/infra">Infraestructura</router-link>
        <router-link to="/proj">Proyectos</router-link>
        <router-link to="/sec">Seguridad</router-link>
      </div>
      <div class="footer__nav--corp">
        <a href="https://www.tmm.com.mx/" target="_blank">
          <PrimaryBtn>
            <div slot="text">Grupo TMM</div>
          </PrimaryBtn>
        </a>
      </div>
    </div>
    <div class="footer__map">
      <div class="footer__map--image">
        <img src="../assets/map2.png" alt="astilleros-mapa" />
      </div>
      <br />
      <div class="footer__map--ubi">
        <div>
          Av de Los Angeles No. 185 Col. San Martin Xochinahuac C.P. 02120,
          Azcapotzalco México D.F.
        </div>
      </div>
      <br />
      <div class="footer__map--tel">
        <div>Conmutador 53-18-89-90</div>
      </div>
    </div>
    <div class="footer__priv">
      <br />
      <br />
      <a href="#">Aviso de privacidad</a>
    </div>
  </div>
</template>

<script>
import PrimaryBtn from "@/components/PrimaryBtn.vue";

export default {
  name: "Footer",
  components: {
    PrimaryBtn
  }
};
</script>

<style>
.footer {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "a"
    "b"
    "c";
  padding: 50px 200px 50px 200px;
  background-color: var(--bg-color);
  color: var(--txt-color);
  -webkit-box-shadow: 0px -10px 20px 0px rgba(255, 255, 255, 0.541);
  -moz-box-shadow: 0px -10px 20px 0px rgba(255, 255, 255, 0.4);
  box-shadow: 0px -10px 20px 0px rgba(255, 255, 255, 0.4);
}

/**NAVEGACION */
.footer__nav {
  grid-area: a;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.footer__nav--item {
  display: block;
  font-family: inherit;
  font-weight: 300;
  font-size: 18px;
}
.footer__nav--item a {
  display: block;
  margin-top: 10px;
  color: var(--txt-color);
  text-decoration: none;
}
.footer__nav--corp {
  margin-top: auto;
  margin-bottom: auto;
}

/**MAPA */
.footer__map {
  grid-area: b;
  width: 100%;
  text-align: center;
}
.footer__map--image {
  width: 100%;
}
.footer__map--image img {
  width: 100%;
}
.footer__map--ubi {
  font-family: inherit;
  font-weight: 300;
  font-size: 15px;
}
.footer__map--tel {
  font-family: inherit;
  font-weight: 300;
  font-size: 15px;
}

/**AVISO */
.footer__priv {
  grid-area: c;
  text-align: center;
  font-family: inherit;
  font-weight: 300;
  font-size: 10px;
}
.footer__priv a {
  text-decoration: none;
  color: var(--txt-color);
}
</style>