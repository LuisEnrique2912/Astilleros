<template>
  <div class="secondary">
    <button>
      <slot name="text"></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "SecondaryBtn"
};
</script>

<style scoped>
button {
  width: 150px;
  font-family: var(--font);
  padding: 15px 20px 15px 20px;
  background-color: transparent;
  color: var(--bg-color);
  border: 1px solid var(--bg-color);
  cursor: pointer;
}

button:hover {
  background-color: var(--bg-color);
  color: var(--txt-color);
}
</style>