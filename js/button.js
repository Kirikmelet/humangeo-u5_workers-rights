/* Handles UI Button clicks */


async function registerButtons () {
  const buttonList = document.querySelectorAll('#href-button')
  buttonList.forEach((button) => {
    button.onclick = () => {
      const hrefURL = new URL(button.dataset.href, window.location.href)
      window.location.href = (hrefURL.href)
    }
  })
}



(async () => {
  registerButtons()
})()
