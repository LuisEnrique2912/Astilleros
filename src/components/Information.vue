<template>
  <div class="information">
    <div class="container">
      <div class="container__info">
        <slot name="info"></slot>
      </div>
      <div class="container__title">
        <slot name="title"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information"
};
</script>

<style>
.information {
}

.container {
  position: relative;
  display: grid;
  width: auto;
  gap: 40px;
  grid-template-columns: 50px 850px;
  grid-template-rows: auto;
  grid-template-areas: "a b";
  margin: 50px 100px 50px 100px;
}

.container__info {
  grid-area: b;
  text-align: left;
  font-weight: 300;
  align-items: center;
  font-size: 18px;
  line-height: 37px;
}

.container__title {
  grid-area: a;
  font-weight: 900;
  font-size: 30px;
  line-height: 37px;
  color: var(--hv-color);
  float: left;
  transform: rotate(-90deg);
  transform-origin: left top 0;
  margin-top: 120px;
  margin-left: 0px;
}
</style>