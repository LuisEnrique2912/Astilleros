<template>
  <div class="title">
    <div class="title__big">
      <slot name="big"></slot>
    </div>
    <div class="title__small">
      <slot name="small"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title"
};
</script>

<style scoped>
.title {
  position: relative;
  text-align: center;
  font-weight: 900;
}
.title__big {
  color: var(--sh-color);
  font-size: 100px;
}
.title__small {
  color: var(--hv-color);
  font-size: 70px;
}
</style>