<script>
import EmailElement from '../components/EmailElement.vue'

export default {
  components: {
    EmailElement
  }
}
</script>

<template>
  <header class="header">
    <h3 class="header__title">Inbox</h3>
  </header>
  <main class="container">
    <h1 class="container__title">Emails Selected (2)</h1>
    <div class="content">
      <div class="content__heading">
        <input type="checkbox" class="content__heading__select" />
        <button class="content__heading__action-button">Mark as read (r)</button>
        <button class="content__heading__action-button">Archive (a)</button>
      </div>
      <div class="content__emails">
        <email-element />
      </div>
    </div>
  </main>
</template>

<style scoped>
.header {
  height: 3em;
  padding: 1em 0 0.5em;
}

.header__title {
  font-weight: 100;
}

.container__title {
  font-weight: bold;
}

.content {
  height: 100%;
}

.content__heading {
  height: 4em;
  padding: 2em 0 0 1em;

  display: flex;
  gap: 1em;
  align-items: center;
}

.content__heading__select {
  height: 1.5em;
  width: 1.5em;
}

.content__heading__action-button {
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

.content__emails {
  padding-top: 2em;
}
</style>
