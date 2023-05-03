const form = document.querySelector("form")
const chatMessage = document.querySelector(".chat_messages")
const input = document.querySelector(".sendMessage")

form.addEventListener("submit", sendMessage)

function sendMessage(e) {
    e.preventDefault()

    if(input.value !== ""){
        var messageDiv = document.createElement("div")
        messageDiv.className = "message"

        var avatar = document.createElement("img")
        avatar.src = "img/user4.jpg"

        var messageInfo = document.createElement("div")
        messageInfo.className = "message_info"

        var userInfo = document.createElement("div")
        userInfo.innerHTML = "Pickme"

        var message_timestamp = document.createElement("span")
        message_timestamp.className = "message_timestamp"

        const date = new Date()
        const year = date.getFullYear()
        const month = String(date.getMonth()).padStart(2, "0")
        const day = String(date.date.getDate()).padStart(2, "0")

        messageTimestamp.innerHTML = month + "/" + day + "/" + year

        const message = document.createElement("P")
        message.innerHTML = input.value
        input.value = ""

        userInfo.appendChild(messageTimestamp)
        messageInfo.appendChild(userInfo)
        messageInfo.appendChild(message)

        messageDiv.appendChild(avatar)
        messageDiv.appendChild(messageInfo)

        chatMessages.appendChild(messageDiv)
        chatMessage.scrollBy(0, 10000)
    }


}