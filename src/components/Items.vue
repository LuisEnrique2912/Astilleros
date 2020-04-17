<template>
  <div class="carrousel">
    <div class="carrousel__container">
      <div class="carrousel-item">
        <img class="carrousel-item__img" src="../assets/Servicios/mantenimiento.png" alt="guitar" />
        <div class="carrousel-item__details">
          <div class="carrousel-item__details--title">MANTENIMIENTO</div>
          <div class="carrousel-item__details--subtitle">
            Mantenimiento y reparación naval en dique, en muelle o costa afuera con especialidades en pailería,
            soldadura, tubería, granallado y pintura, mecánica y servicios eléctricos.
          </div>
        </div>
      </div>
      <div class="carrousel-item">
        <img class="carrousel-item__img" src="../assets/Servicios/conversiones.png" alt="guitar" />
        <div class="carrousel-item__details">
          <div class="carrousel-item__details--title">CONVERSIONES</div>
          <div class="carrousel-item__details--subtitle">Conversiones y mejoras a embarcaciones.</div>
        </div>
      </div>
      <div class="carrousel-item">
        <img class="carrousel-item__img" src="../assets/Servicios/construccion.png" alt="guitar" />
        <div class="carrousel-item__details">
          <div class="carrousel-item__details--title">CONSTRUCCIÓN</div>
          <div class="carrousel-item__details--subtitle">
            Construcción de embarcaciones y todo
            tipo de estructuras metálicas.
          </div>
        </div>
      </div>
      <div class="carrousel-item">
        <img class="carrousel-item__img" src="../assets/Servicios/ingenieria.png" alt="guitar" />
        <div class="carrousel-item__details">
          <div class="carrousel-item__details--title">INGENIERÍA NAVAL</div>
          <div class="carrousel-item__details--subtitle">
            Especificaciones técnicas, planos, maniobras y
            apoyo en construcción y reparación.
          </div>
        </div>
      </div>
      <div class="carrousel-item">
        <img class="carrousel-item__img" src="../assets/Servicios/muelle.png" alt="guitar" />
        <div class="carrousel-item__details">
          <div class="carrousel-item__details--title">SERVICIOS DE MUELLE</div>
        </div>
      </div>
      <div class="carrousel-item">
        <img class="carrousel-item__img" src="../assets/Servicios/desguace.png" alt="guitar" />
        <div class="carrousel-item__details">
          <div class="carrousel-item__details--title">DESGUACE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Items"
};
</script>

<style>
.carrousel {
  width: 100%;
  overflow-x: scroll;
  padding: 30px;
  position: relative;
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