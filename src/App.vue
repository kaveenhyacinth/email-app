<script>
export default {}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__menu">
      <button class="sidebar__menu-button">Inbox (3)</button>
      <button class="sidebar__menu-button">Archive (0)</button>
    </div>
    <button class="sidebar__menu-button">Logout</button>
  </aside>
  <main class="content">
    <router-view />
  </main>
</template>

<style scoped>
.sidebar {
  width: 18em;
  height: 100vh;
  padding: 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  background-color: var(--secondary-color);
}

.sidebar__menu {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.sidebar__menu-button {
  background-color: #fff;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  border-radius: 0.25em;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
}
</style>
