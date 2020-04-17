<template>
  <div class="infrastructure">
    <MainSection>
      <div slot="subtitle1">Nuestra</div>
      <div slot="title">
        <div>INFRAESTRUCTURA</div>
      </div>
      <div slot="image">
        <img src="../assets/Backgrounds/infrastructure.png" alt />
      </div>
      <div slot="btn">
        <a href="#info">
          <SecondaryBtn>
            <div slot="text">CONOCER MÁS</div>
          </SecondaryBtn>
        </a>
      </div>
    </MainSection>
    <div class="texto">
      <div>
        AIT cuenta con un área total de 28 hectáreas y 500 metros lineales de frente de río,
        al que se accede a través de un canal de 9 metros de profundidad
      </div>
      <br />
      <br />
      <div>
        <InfraInfo>
          <div
            slot="resume"
          >Dique flotante de 2,700 toneladas métricas de capacidad, equipado con dos grúas de 10 toneladas para embarcaciones de:</div>
          <div slot="table">
            <div class="row">
              <div class="dato">Eslora total</div>
              <div class="subrow">
                <div class="dato" v-show="sis == 'M'">147 metros</div>
                <div class="dato" v-show="sis == 'US'">482 pies</div>
              </div>
            </div>
            <div class="row">
              <div class="dato">Manga interior</div>
              <div class="subrow">
                <div class="dato" v-show="sis == 'M'">15.5 metros</div>
                <div class="dato" v-show="sis == 'US'">51 pies</div>
              </div>
            </div>
            <div class="row">
              <div class="dato">Calado</div>
              <div class="subrow">
                <div class="dato" v-show="sis == 'M'">5.8 metros</div>
                <div class="dato" v-show="sis == 'US'">19 pies</div>
              </div>
            </div>
          </div>
          <div slot="switch">
            <div class="medidas">
              <div class="itemM">Medidas:</div>
              <div class="itemM">
                <label class="radio">
                  <input type="radio" name="r" v-model="sis" value="M" />
                  <span>Metros</span>
                </label>
              </div>
              <div class="itemM">
                <label class="radio">
                  <input type="radio" name="r" v-model="sis" value="US" />
                  <span>Pies</span>
                </label>
              </div>
            </div>
          </div>
        </InfraInfo>
      </div>
      <br />
      <div>
        <InfraInfo>
          <div
            slot="resume"
          >Dique flotante de 3,000 toneladas métricas de capacidad, para embarcaciones de:</div>
          <div slot="table">
            <div class="row">
              <div class="dato">Eslora total</div>
              <div class="subrow">
                <div class="dato" v-show="sis2 == 'M'">59 metros</div>
                <div class="dato" v-show="sis2 == 'US'">193 pies</div>
              </div>
            </div>
            <div class="row">
              <div class="dato">Manga interior</div>
              <div class="subrow">
                <div class="dato" v-show="sis2 == 'M'">33 metros</div>
                <div class="dato" v-show="sis2 == 'US'">110 pies</div>
              </div>
            </div>
            <div class="row">
              <div class="dato">Calado</div>
              <div class="subrow">
                <div class="dato" v-show="sis2 == 'M'">5.8 metros</div>
                <div class="dato" v-show="sis2 == 'US'">19 pies</div>
              </div>
            </div>
          </div>
          <div slot="switch">
            <div class="medidas">
              <div class="itemM">Medidas:</div>
              <div class="itemM">
                <label class="radio">
                  <input type="radio" name="r" v-model="sis2" value="M" />
                  <span>Metros</span>
                </label>
              </div>
              <div class="itemM">
                <label class="radio">
                  <input type="radio" name="r" v-model="sis2" value="US" />
                  <span>Pies</span>
                </label>
              </div>
            </div>
          </div>
        </InfraInfo>
      </div>
      <br />
      <br />
      <div class="row2">
        <div
          class="li1"
        >Montacargas y diversos equipos para los trabajos de reparación y construcción naval.</div>
        <div class="li2">Almacenes y talleres de pailería, tubería y mantenimiento de equipos.</div>
        <div class="li3">720 m² de oficina principal, con área para armadores y representantes.</div>
      </div>
      <br />
    </div>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import SecondaryBtn from "@/components/SecondaryBtn.vue";
import InfraInfo from "@/components/InfraInfo.vue";
import MainSection from "@/components/MainSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  data: function() {
    return {
      sis: "M",
      sis2: "M"
    };
  },
  name: "Home",
  components: {
    MainSection,
    SecondaryBtn,
    InfraInfo,
    Footer
  }
};
</script>

<style scoped>
.infrastructure {
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
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.row2 {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  grid-template-areas: "a b c";
  grid-gap: 20px;
  padding-right: 25px;
  padding-left: 25px;
}
.subrow {
  display: flex;
  margin-left: auto;
}
.li1 {
  margin: 30px;
  width: auto;
  color: var(--txt-color);
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  font-weight: 300;
  grid-area: a;
}
.li2 {
  margin: 30px;
  width: auto;
  color: var(--txt-color);
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  font-weight: 300;
  grid-area: b;
}
.li3 {
  margin: 30px;
  width: auto;
  color: var(--txt-color);
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  font-weight: 300;
  grid-area: c;
}
.medidas {
  height: 100%;
  display: flex;
  color: var(--hv-color);
}
.itemM {
  display: flex;
  margin-top: 0px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  text-align: left;
}
span:hover {
  color: var(--hv-color);
  cursor: pointer;
}
/*************************************RADIO */
/*************************************RADIO */
/*************************************RADIO */
.radio {
  margin: 16px 0;
  display: block;
  cursor: pointer;
}
.radio input {
  display: none;
}
.radio input + span {
  line-height: 22px;
  height: 22px;
  padding-left: 22px;
  display: block;
  position: relative;
}
.radio input + span:not(:empty) {
  padding-left: 30px;
}
.radio input + span:before,
.radio input + span:after {
  content: "";
  width: 22px;
  height: 22px;
  display: block;
  border-radius: 50%;
  left: 0;
  top: 0;
  position: absolute;
}
.radio input + span:before {
  background: var(--txt-color);
  transition: background 0.2s ease,
    -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
  transition: background 0.2s ease,
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
  transition: background 0.2s ease,
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2),
    -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
}
.radio input + span:after {
  background: var(--txt-color);
  -webkit-transform: scale(0.78);
  transform: scale(0.78);
  transition: -webkit-transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4),
    -webkit-transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
}
.radio input:checked + span:before {
  -webkit-transform: scale(1.04);
  transform: scale(1.04);
  background: var(--hv-color);
}
.radio input:checked + span:after {
  -webkit-transform: scale(0.4);
  transform: scale(0.4);
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
}
.radio:hover input + span:before {
  -webkit-transform: scale(0.92);
  transform: scale(0.92);
}
.radio:hover input + span:after {
  -webkit-transform: scale(0.74);
  transform: scale(0.74);
}
.radio:hover input:checked + span:after {
  -webkit-transform: scale(0.4);
  transform: scale(0.4);
}
span {
  font-size: 18px;
}
.dato {
  margin: 5px;
}
/*************************************RESPONSIVE DESIGN */
/*************************************RESPONSIVE DESIGN */
/*************************************RESPONSIVE DESIGN */
/* LAPTOP */
@media screen and (max-width: 1000px) and (max-height: 634px) {
}
/* IPAD PRO */
@media screen and (max-width: 1024px) and (max-height: 1366px) {
}
/* IPHONE 5/SE */
@media screen and (max-width: 800px) {
  .row2 {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      "a"
      "b"
      "c";
  }
}
</style>