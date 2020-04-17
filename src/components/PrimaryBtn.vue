<template>
  <div class="primary">
    <button>
      <slot name="text"></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "PrimaryBtn"
};
</script>

<style scoped>
button {
  width: 150px;
  font-family: var(--font);
  padding: 15px 20px 15px 20px;
  background-color: transparent;
  color: var(--hv-color);
  border: 1px solid var(--hv-color);
  cursor: pointer;
}

button:hover {
  background-color: var(--hv-color);
  color: var(--bg-color);
}
</style>