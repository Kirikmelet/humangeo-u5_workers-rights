function autoLink (div, list) {
  const divTarget = document.getElementById(div)
  if (divTarget === null) {
    console.error('Div is null, aborting', div)
    return
  }
  const uListTarget = document.createElement('UL')
  list.forEach((item) => {
    const el = document.createElement('A')
    const it = document.createElement('Li')
    el.href = item
    el.innerHTML = item
    el.target = '_blank'
    it.appendChild(el)
    uListTarget.appendChild(it)
  })
  divTarget.appendChild(uListTarget)
}
