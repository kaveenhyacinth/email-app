<script>
import { mapStores } from 'pinia'
import { useEmailStore } from '../stores/emailStore'

import EmailElement from '../components/EmailElement.vue'

export default {
  data() {
    return {
      selectedArray: [],
      isSelectedAll: false,
      isInbox: true
    }
  },
  components: {
    EmailElement
  },
  computed: {
    ...mapStores(useEmailStore),
    emails() {
      if (this.isInbox) {
        return this.emailStore.getInbox
      } else {
        return this.emailStore.getArchives
      }
    },
    selectedEmailCount() {
      return this.selectedArray.length
    }
  },
  methods: {
    resetSelection() {
      this.isSelectedAll = false
      this.selectedArray = []
    },
    onSelectEmail(id) {
      if (this.selectedArray?.includes(id)) {
        this.selectedArray = this.selectedArray?.filter((emailId) => emailId !== id)
      } else {
        this.selectedArray.push(id)
      }
    },
    isEmailSelected(id) {
      return this.selectedArray?.includes(id)
    },
    toggleSelectAll() {
      this.isSelectedAll = !this.isSelectedAll
    },
    onMarkAsRead() {
      this.emailStore.markAsRead(this.selectedArray)
      this.resetSelection()
    },
    onMarkAsArchive() {
      this.emailStore.addToArchive(this.selectedArray)
      this.resetSelection()
    },
    onOpenEmail(id) {
      this.emailStore.openEmail(id)
      this.resetSelection()
    }
  },
  watch: {
    $route() {
      this.isInbox = this.$route.name === 'inbox'
      this.selectedArray = []
      this.isSelectedAll = false
    },
    isSelectedAll() {
      if (this.isSelectedAll) {
        this.emails?.forEach((email) => {
          if (!this.selectedArray?.includes(email.id)) {
            this.selectedArray.push(email.id)
          }
        })
      } else {
        this.selectedArray = []
      }
    }
  }
}
</script>

<template>
  <header class="header">
    <h3 class="header__title">{{ isInbox ? 'Inbox' : 'Archive' }}</h3>
  </header>
  <main class="container">
    <h1 class="container__title">Emails Selected ({{ selectedEmailCount }})</h1>
    <div class="content">
      <div class="content__heading">
        <input
          type="checkbox"
          class="content__heading__select"
          :checked="isSelectedAll"
          @change="toggleSelectAll"
        />
        <button class="content__heading__action-button" @click="onMarkAsRead">
          Mark as read (r)
        </button>
        <button class="content__heading__action-button" @click="onMarkAsArchive">
          Archive (a)
        </button>
      </div>
      <div class="content__emails" v-for="email of emails" :key="email.id">
        <email-element
          :email="email"
          :is-selected="isEmailSelected(email.id)"
          @select-email="onSelectEmail"
          @open-email="onOpenEmail"
        />
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
  padding-top: 1em;
}
</style>
