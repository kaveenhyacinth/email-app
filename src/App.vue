<script>
import { mapStores } from 'pinia'
import { useEmailStore } from './stores/emailStore'
import EmailContent from './components/EmailContent.vue'

export default {
  components: {
    EmailContent
  },
  computed: {
    ...mapStores(useEmailStore)
  },
  methods: {
    gotoInbox() {
      this.$router.push('/inbox')
    },
    gotoArchives() {
      this.$router.push('/archive')
    },
    onCloseEmail() {
      this.emailStore.closeEmail()
    },
    onMarkAsRead() {
      if (this.emailStore.selectedEmail) {
        this.emailStore.markAsRead([this.emailStore.selectedEmail])
      }
    },
    onMarkAsArchive() {
      if (this.emailStore.selectedEmail) {
        this.emailStore.addToArchive([this.emailStore.selectedEmail])
      }
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
    <email-content
      v-if="emailStore.isEmailOpen"
      :email="emailStore.getSelectedEmail"
      @mark-read="onMarkAsRead"
      @mark-archive="onMarkAsArchive"
      @close="onCloseEmail"
    />
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
