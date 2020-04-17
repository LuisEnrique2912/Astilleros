<template>
  <div class="home">
    <MainSection>
      <div slot="title">
        <div>ASTILLEROS</div>
        <div>INTERNACIONALES</div>
        <div>DE TAMPICO</div>
      </div>
      <div slot="image">
        <img src="../assets/Backgrounds/main.png" alt />
      </div>
      <div slot="btn">
        <router-link to="/serv">
          <SecondaryBtn>
            <div slot="text">SERVICIOS</div>
          </SecondaryBtn>
        </router-link>
      </div>
    </MainSection>
    <div class="texto">
      <div>
        <b>Astilleros Internacionales de Tampico (AIT)</b>, empresa de Grupo TMM, ofrece los
        servicios de reparación, mantenimiento, conversión y construcción marina.
      </div>
      <br />
      <div>
        En AIT contamos con personal altamente calificado y capacitado, nuestros estándares de
        producción y gestión especializada, equipamiento y tecnología logran de manera oportuna,
        segura y eficiente brindar servicios especializados de la más alta calidad.
      </div>
      <br />
      <div>
        Asegurando soluciones eficientes y competitivas de acuerdo a las necesidades y
        requerimientos de nuestros clientes. Nuestros servicios, avalados por 60 años de experiencia,
        nos posicionan como una gran opción para la industria marítima en México.
      </div>
      <br />
      <br />
      <br />
      <Information>
        <div slot="title">MISIÓN</div>
        <div slot="info">
          <div>
            Somos un grupo mexicano especializado en servicios de transporte de carga marítima,
            logística integrada y operación portuaria.
          </div>
          <br />
          <div>
            Nuestra fortaleza competitiva se basa en la utilización de activos estratégicos para
            brindar una amplia gama de soluciones con alto nivel de servicio y flexibilidad para
            nuestros clientes, apoyados con tecnología de punta, 50 años de experiencia y un excelente
            capital humano.
          </div>
          <br />
          <div>
            Nuestro compromiso es maximizar el patrimonio de los accionistas a través de una
            operación eficiente y rentable de nuestras unidades de negocio.
          </div>
        </div>
      </Information>
      <br />
      <Information>
        <div slot="title">VISIÓN</div>
        <div slot="info">
          <div>
            Ser el grupo proveedor de servicios de transporte y soluciones logísticas
            integrales, líder en el mercado nacional, buscando participar en nichos de
            negocio de alto crecimiento y rentabilidad.
          </div>
          <br />
          <div>
            En Grupo TMM estamos comprometidos con el respeto al medio ambiente,
            participando en la consolidación y desarrollo de nuestro país.
          </div>
        </div>
      </Information>
      <br />
      <Information>
        <div slot="title" class="ubicacion">UBICACIÓN</div>
        <div slot="info">
          <div>
            AIT se encuentra estratégicamente ubicado en la parte media del Golfo de
            México, en el puerto de Tampico, Tamps. Cercano a las zonas petroleras y a
            las rutas de navegación más importantes.
          </div>
          <br />
          <div>
            Está localizado en el margen izquierdo del Río Pánuco a 9 millas de la bocana
            del río.
          </div>
          <br />
          <div>
            A unos minutos del Aeropuerto Internacional de Tampico, “Francisco J. Mina.”,
            de la Carretera Tampico- Ciudad Valles y del sistema ferroviario.
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
import SecondaryBtn from "@/components/SecondaryBtn.vue";
import Information from "@/components/Information.vue";
import MainSection from "@/components/MainSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    MainSection,
    SecondaryBtn,
    Information,
    Footer
  }
};
</script>
<style scoped>
.home {
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
.ubicacion {
  margin-top: 0px !important;
  margin-left: -72px;
}
</style>
