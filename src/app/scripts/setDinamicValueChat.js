const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.user-name')

// Set Image selected
export function setImageChatLayoutMain(imageValue) {
    userImage.src = imageValue
}

// Set Name selected
export function setNameChatLayoutMain(nameValue) {
    userName.textContent = nameValue
}