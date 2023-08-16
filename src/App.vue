<script>
import { mapStores } from 'pinia'
import { useEmailStore } from './stores/emailStore'

export default {
  computed: {
    ...mapStores(useEmailStore)
  },
  methods: {
    gotoInbox() {
      this.$router.push('/inbox')
    },
    gotoArchives() {
      this.$router.push('/archive')
    }
  }
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__menu">
      <button class="sidebar__menu-button" @click="gotoInbox">
        Inbox ({{ emailStore.getInboxCount }})
      </button>
      <button class="sidebar__menu-button" @click="gotoArchives">
        Archive ({{ emailStore.getArchiveCount }})
      </button>
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
  padding: 2em 1em 1em;

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

.content {
  flex: 1;
  padding: 1em 4em;
}
</style>
