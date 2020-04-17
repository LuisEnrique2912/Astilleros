<template>
  <div class="services">
    <MainSection>
      <div slot="subtitle1">
        <div>Ofrecemos</div>
      </div>
      <div slot="title">
        <div>SERVICIOS</div>
      </div>
      <div slot="subtitle2">
        <div>realizados por expertos</div>
      </div>
      <div slot="image">
        <img src="../assets/Backgrounds/service.png" alt />
      </div>
      <div slot="btn" class="buttons">
        <a href="#services">
          <SecondaryBtn class="btn">
            <div slot="text">SERVICIOS</div>
          </SecondaryBtn>
        </a>
        <a href="#ventajas">
          <SecondaryBtn class="btn">
            <div slot="text">VENTAJAS</div>
          </SecondaryBtn>
        </a>
      </div>
    </MainSection>
    <br />
    <div class="texto">
      <a id="services">
        <h2>NUESTROS SERVICIOS</h2>
        <br />
        <Items></Items>
      </a>
      <br />
      <a id="ventajas">
        <Information>
          <div slot="title" class="ventajas">VENTAJAS</div>
          <div slot="info">
            <div>AIT ofrece a sus clientes ventajas importantes sobre otros astilleros de la región:</div>
            <br />
            <ul>
              <li>Infraestructura adecuada y mano de obra calificada y certificada.</li>
              <li>
                Ahorro de costos y tiempos de posicionamiento, contra astilleros ubicados en
                puertos de Estados Unidos.
              </li>
              <li>
                Su personal operativo y administrativo cuenta con amplia experiencia en la
                construcción, el mantenimiento y la reparación de embarcaciones.
              </li>
              <li>Su cercanía a la frontera agiliza la importación de piezas y refacciones.</li>
            </ul>
          </div>
        </Information>
      </a>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import SecondaryBtn from "@/components/SecondaryBtn.vue";
import Items from "@/components/Items.vue";
import Information from "@/components/Information.vue";
import MainSection from "@/components/MainSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    MainSection,
    SecondaryBtn,
    Information,
    Footer,
    Items
  }
};
</script>

<style scoped>
.services {
  position: relative;
  margin-top: -80px;
}
h2 {
  font-size: 35px;
  font-weight: 900;
  color: var(--hv-color);
}
.texto {
  width: auto;
  text-align: justify;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 37px;
  padding: 20px;
  margin-top: 800px;
  margin: 800px 100px 100px 100px;
}
.ventajas {
  margin-top: 0px !important;
  margin-left: -72px;
}
.buttons {
  display: flex;
}
.btn {
  margin-right: 30px;
}
</style>