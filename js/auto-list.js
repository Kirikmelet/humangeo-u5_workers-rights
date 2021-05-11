function autoList (div, list, prefix) {
  const usePrefix = (prefix !== void 0) ? prefix : ''
  const divTarget = document.getElementById(div)
  if (divTarget === null) {
    console.error('Div is null, aborting', div)
    return
  }
  list.forEach((item) => {
    const el = document.createElement('LI')
    el.href = item
    el.innerHTML = `${usePrefix} ${item}`
    divTarget.appendChild(el)
  })
}
