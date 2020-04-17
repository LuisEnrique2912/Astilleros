<template>
  <div class="projects">
    <MainSection>
      <div slot="subtitle1">Hemos participado en</div>
      <div slot="title">
        <div>PROYECTOS</div>
      </div>
      <div slot="subtitle2">extranjeros y nacionales</div>
      <div slot="image">
        <img src="../assets/Backgrounds/project.png" alt />
      </div>
      <div slot="btn" class="buttons">
        <a href="#construccion">
          <SecondaryBtn class="btn">
            <div slot="text">CONSTRUCCIÓN</div>
          </SecondaryBtn>
        </a>
        <a href="#conversion">
          <SecondaryBtn class="btn">
            <div slot="text">CONVERSIÓN</div>
          </SecondaryBtn>
        </a>
      </div>
    </MainSection>
    <br />
    <br />
    <div class="texto">
      <div class="construccion">
        <a id="construccion">
          <Title>
            <div slot="big">CONSTRUCCIÓN</div>
            <div slot="small">CONSTRUCCIÓN</div>
          </Title>
          <br />
          <Construction></Construction>
        </a>
      </div>
      <br />
      <br />
      <div class="conversion">
        <a id="conversion">
          <Title>
            <div slot="big">CONVERSIÓN</div>
            <div slot="small">CONVERSIÓN</div>
          </Title>
          <br />
          <Conversion></Conversion>
        </a>
      </div>
      <br />
      <br />
      <Information>
        <div slot="title" class="clientes">CLIENTES</div>
        <div slot="info">
          <div>
            La calidad de nuestros servicios se acredita con una amplia cartera de
            clientes, principalmente empresas navieras costa afuera que prestan sus servicios
            a la industria petrolera del Golfo de México.
          </div>
        </div>
      </Information>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Construction from "@/components/Construction.vue";
import Conversion from "@/components/Conversion.vue";
import Information from "@/components/Information.vue";
import SecondaryBtn from "@/components/SecondaryBtn.vue";
import MainSection from "@/components/MainSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    MainSection,
    SecondaryBtn,
    Title,
    Construction,
    Conversion,
    Information,
    Footer
  }
};
</script>

<style scoped>
.projects {
  position: relative;
  margin-top: -80px;
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
.clientes {
  margin-top: 0px !important;
  margin-left: -50px;
}
.buttons {
  display: flex;
}
.btn {
  margin-right: 30px;
}
</style>