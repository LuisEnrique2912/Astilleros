<template>
  <div class="security">
    <MainSection>
      <div slot="title">
        <div>SEGUIRDAD</div>
        <div>Y CALIDAD</div>
      </div>
      <div slot="image">
        <img src="../assets/Backgrounds/security.png" alt />
      </div>
      <div slot="btn" class="buttons">
        <a href="#conocer">
          <SecondaryBtn class="btn">
            <div slot="text">CONOCER MÁS</div>
          </SecondaryBtn>
        </a>
      </div>
    </MainSection>
    <br />
    <br />
    <br />
    <div class="texto">
      <a id="conocer">
        <Title>
          <div slot="big">SEGURIDAD</div>
          <div slot="small">SEGURIDAD</div>
        </Title>
        <br />
        <ul>
          <li>Personal capacitado en Liberación de Espacios Confinados (Gas Free).</li>
          <li>Personal capacitado en Seguridad Industrial.</li>
          <li>Brigada de Primeros Auxilios.</li>
          <li>Brigada Contra Incendio.</li>
          <li>Brigada de Búsqueda y Rescate.</li>
          <li>Procedimientos para trabajos calientes, espacios confinados y trabajos en altura.</li>
          <li>
            Registro Ambiental para Almacenar Temporalmente Residuos
            Peligrosos (aceite usado, aguas oleosas) para su adecuada disposición.
          </li>
        </ul>
      </a>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import SecondaryBtn from "@/components/SecondaryBtn.vue";
import MainSection from "@/components/MainSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    MainSection,
    SecondaryBtn,
    Footer,
    Title
  }
};
</script>

<style scoped>
.security {
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