<template>
  <div class="carrousel">
    <div class="carrousel__container">
      <div class="carrousel-item">
        <img class="carrousel-item__img" src="../assets/Servicios/mantenimiento.png" alt="guitar" />
        <div class="carrousel-item__details">
          <div class="carrousel-item__details--title">NIGERIA</div>
          <div class="carrousel-item__details--subtitle">
            <ul>
              <li>Barcazas</li>
              <li>220 pies</li>
              <li>Apoyo en trabajos de perforación</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="carrousel-item">
        <img class="carrousel-item__img" src="../assets/Servicios/conversiones.png" alt="guitar" />
        <div class="carrousel-item__details">
          <div class="carrousel-item__details--title">USA</div>
          <div class="carrousel-item__details--subtitle">
            <ul>
              <li>Barcazas Ocean Deck</li>
              <li>250 pies</li>
              <li>Apoyo en trabajos de perforación</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="carrousel-item">
        <img class="carrousel-item__img" src="../assets/Servicios/construccion.png" alt="guitar" />
        <div class="carrousel-item__details">
          <div class="carrousel-item__details--title">MÉXICO</div>
          <div class="carrousel-item__details--subtitle">
            <ul>
              <li>Barcaza</li>
              <li>210 pies</li>
              <li>Soporte de dragado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Construction"
};
</script>

<style>
.carrousel {
  width: 100%;
  overflow-x: scroll;
  padding: 30px;
  position: relative;
  display: flex;
  justify-content: center;
}
.carrousel__container {
  display: flex;
  white-space: nowrap;
  margin: 70px 0px;
  padding-bottom: 10px;
}
.carrousel-item {
  display: inline-block;
  background-color: var(--bg-color);
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin-right: 10px;
  cursor: pointer;
  transition: 450ms;
  transform-origin: center left;
  position: relative;
}
.carrousel-item:hover ~ .carrousel-item {
  transform: translate3d(100px, 0, 0);
}
.carrousel__container:hover .carrousel-item {
  opacity: 0.3;
}
.carrousel__container:hover .carrousel-item:hover {
  transform: scale(1.5);
  opacity: 1;
}
.carrousel-item__img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.carrousel-item__details {
  background: rgba(0, 0, 0, 0.7);
  color: var(--bg-color);
  opacity: 0;
  transition: 450ms opacity;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.carrousel-item:hover .carrousel-item__details {
  opacity: 1;
}

.carrousel-item__details--title {
  white-space: normal;
  text-align: left;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
}
.carrousel-item__details--subtitle {
  white-space: normal;
  text-align: left;
  font-weight: 300;
  font-size: 9px;
  line-height: 13px;
}
</style>