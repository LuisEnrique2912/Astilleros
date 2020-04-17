<template>
  <div class="ms">
    <div class="image">
      <slot name="image"></slot>
    </div>
    <div class="name">
      <div class="name__subtitle">
        <slot name="subtitle1"></slot>
      </div>
      <div class="name__title">
        <slot name="title"></slot>
      </div>
      <div class="name__subtitle">
        <slot name="subtitle2"></slot>
      </div>
      <br />
      <div class="name__btn">
        <slot name="btn"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSection"
};
</script>

<style>
.ms {
  display: flex;
  position: relative;
  text-align: left;
  justify-content: flex-start;
  align-items: center;
}
.name {
  position: absolute;
  background: rgba(5, 5, 5, 0.356);
  backdrop-filter: blur(6px);
  padding: 40px;
  margin: 350px 20px 20px 0px;
}
.name__title {
  color: var(--bg-color);
  font-weight: 900;
  font-size: 60px;
}
.name__subtitle {
  color: var(--bg-color);
  font-weight: 500;
  font-size: 25px;
}
.image {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
}

.image img {
  width: 100%;
}
</style>