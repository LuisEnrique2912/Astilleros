<template>
  <div class="InfraInfo">
    <div class="resume">
      <slot name="resume"></slot>
    </div>
    <div class="table">
      <slot name="table"></slot>
    </div>
    <div class="switch">
      <slot name="switch"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfraInfo"
};
</script>
<style scoped>
.InfraInfo {
  display: grid;
  grid-template-columns: auto 500px;
  grid-template-rows: auto auto;
  grid-template-areas:
    "a b"
    "a c";
  padding-right: 100px;
  padding-left: 100px;
  grid-gap: 20px;
}

.resume {
  grid-area: a;
  color: var(--txt-color);
  text-align: left;
  line-height: 25px;
  font-size: 20px;
  font-weight: 300;
  padding-left: 25px;
  padding-right: 25px;
  margin: auto;
}
.table {
  grid-area: c;
  color: var(--txt-color);
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  font-weight: 300;
  padding-left: 25px;
  padding-right: 25px;
  margin: 10px;
}
.switch {
  grid-area: b;
  color: var(--hv-color);
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  font-weight: 400;
  padding-left: 25px;
  padding-right: 25px;
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
  .InfraInfo {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      "a"
      "b"
      "c";
    padding-right: 25px;
    padding-left: 25px;
  }
  .resume {
    font-size: 15px;
    padding-right: 0px;
    padding-left: 0px;
  }
  .table {
    font-size: 15px;
    padding-right: 0px;
    padding-left: 0px;
  }
  .switch {
    font-size: 15px;
    padding-right: 0px;
    padding-left: 0px;
  }
}
</style>