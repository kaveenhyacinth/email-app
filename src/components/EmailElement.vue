<script>
export default {}
</script>

<template>
  <div class="email">
    <input type="checkbox" class="email__select" />
    <p class="email__content">Email content</p>
  </div>
</template>

<style scoped>
.email {
  width: 100%;
  padding: 1em;

  display: flex;
  align-items: center;
  gap: 1em;

  border: 1px solid #9ca3af;
  border-radius: 0.25em;

  background-color: #f9fafb;
}
.email__select {
  height: 1.5em;
  width: 1.5em;
}
</style>