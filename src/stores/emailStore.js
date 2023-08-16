import { defineStore } from 'pinia'

export const useEmailStore = defineStore('email', {
  state: () => ({
    isEmailOpen: false,
    selectedEmail: null,
    emails: [
      {
        id: 1,
        subject: 'Your 7-figure plan goes bye-bye at midnight',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isRead: false,
        isArchive: false
      },
      {
        id: 2,
        subject: '[WEEKEND ONLY] Get this NOW before',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isRead: false,
        isArchive: false
      },
      {
        id: 3,
        subject: 'Uh-oh, your prescription is expiring',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isRead: true,
        isArchive: false
      }
    ]
  }),
  getters: {
    getEmailById: (state) => (id) => state.emails?.find((email) => email.id === id),
    getInbox: (state) => state.emails?.filter((email) => !email.isArchive),
    getArchives: (state) => state.emails?.filter((email) => email.isArchive),
    getInboxCount: (state) => state.emails?.filter((email) => !email.isArchive)?.length,
    getArchiveCount: (state) => state.emails?.filter((email) => email.isArchive)?.length,
    getSelectedEmail: (state) =>
      state.emails?.find((email) => email.id === state.selectedEmail) ?? {}
  },
  actions: {
    openEmail(id) {
      this.isEmailOpen = true
      this.selectedEmail = id
    },
    closeEmail() {
      this.isEmailOpen = false
      this.selectedEmail = null
    },
    markAsRead(ids) {
      this.emails?.forEach((email) => {
        if (ids?.includes(email.id)) {
          email.isRead = true
        }
      })
    },
    addToArchive(ids) {
      this.emails?.forEach((email) => {
        if (ids?.includes(email.id)) {
          email.isArchive = true
        }
      })
    }
  }
})
