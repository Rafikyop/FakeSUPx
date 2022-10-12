const layout = document.querySelector('.layout')
const layoutSidebar = document.querySelector('.layout-sidebar')
const layoutMain = document.querySelector('.layout-main')
const sidebarProfile = document.querySelector('.sidebar-profile')

// Show Layout - mobile
export function showLayout() {
    layout.classList.add('layout-block')
    layoutSidebar.classList.add('layout-sidebar-relative')
    layoutMain.classList.add('layout-main-absolute')
    return true
}

// Hide Layout - mobile
export function hideLayout() {
    layout.classList.remove('layout-block')
    layoutSidebar.classList.remove('layout-sidebar-relative')
    layoutMain.classList.remove('layout-main-absolute')
    return true
}

// Put setAttribute aria-selected - sidebar-profile
export function setAttributeSidebarProfile() {
    sidebarProfile.setAttribute('aria-selected', true)
    return true
}

// Remove setAttribute aria-selected - sidebar-profile
export function removeAttributeSidebarProfile() {
    sidebarProfile.removeAttribute('aria-selected', true)
    return true
}