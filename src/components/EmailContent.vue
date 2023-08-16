<script>
export default {
  props: ['email'],
  methods: {
    handleKayDown(evt) {
      if (evt.key === 'Escape') {
        this.$emit('close')
      }
      if (evt.key === 'r') {
        this.$emit('markRead')
      }
      if (evt.key === 'a') {
        this.$emit('markArchive')
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKayDown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKayDown)
  }
}
</script>

<template>
  <transition name="modal">
    <div class="modal__mask" @click.self="$emit('close')">
      <div class="modal__container">
        <div class="modal__body">
          <div class="email-container">
            <p class="email-container__close" @click="$emit('close')">Close (Esc)</p>
            <div class="email-container__header">
              <button class="email-container__action-button" @click="$emit('markRead')">
                Mark as read (r)
              </button>
              <button class="email-container__action-button" @click="$emit('markArchive')">
                Archive (a)
              </button>
            </div>
            <div>
              <h2 class="email__title">{{ email.subject }}</h2>
              <p>{{ email.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal__mask {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: table;
  transition: opacity 0.3s ease;
}

.modal__container {
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  padding: 1.25em 1.75em;
  background-color: #fff;
  border-radius: 0.12em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.email-container__close {
  cursor: pointer;

  font-size: 0.75em;
  text-decoration: underline;
  color: #2563eb;
}

.email-container__action-button {
  background-color: #fff;
  height: 2em;
  padding: 0.25px 0.5em;
  outline: none;
  border: 1px solid #9ca3af;
  border-radius: 0.25em;
  font-size: 12px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  background-color: #f9fafb;
}

.email-container__header {
  padding: 1em 0;
  display: flex;
  gap: 1em;
}

.email__title {
  padding: 0.5em 0 1em;
}
</style>
