<script>
export default {
  props: ['email']
}
</script>

<template>
  <div class="email" :class="{ 'email--inactive': email.isRead }">
    <input type="checkbox" class="email__select" />
    <p class="email__content">{{ email.subject }}</p>
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

.email--inactive {
  opacity: 0.5;
}
.email__select {
  height: 1.5em;
  width: 1.5em;
}
</style>
