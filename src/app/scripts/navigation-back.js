import { setAttributeSidebarProfile, removeAttributeSidebarProfile, hideLayout } from './showHideLayout.js'

const navigationBack = document.querySelector('.navigation-back')
const userProfile = document.querySelector('.user-profile')

const navigationBackProfileEdit = document.querySelector('.navigation-back-profile-edit')

navigationBack.addEventListener('click', navigationBackLayout)
navigationBackProfileEdit.addEventListener('click', navigationBackLayoutMainSidebarProfile)

userProfile.addEventListener('click', navigationShowLayoutMainSidebarProfile)


// Navigation to back - mobile
export function navigationBackLayout() {
    hideLayout()
}

// Navigation to Sidebar Profile
export function navigationShowLayoutMainSidebarProfile() {
    setAttributeSidebarProfile()
}

// Navigation to main since Sidebar Profile
export function navigationBackLayoutMainSidebarProfile() {
    removeAttributeSidebarProfile()
}