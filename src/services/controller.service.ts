export const selectElement = (query: string) => {
  setTimeout(() => {
    const item = document.querySelectorAll(query)
    if (!document.querySelector('.selected')) {
      item[0]?.classList.add('selected')
    }
  }, 1500)
}

export const moveRight = (query: string) => {
  const selected = document.querySelector('.selected')
  if (selected) {
    selected.classList.remove('selected')
    console.log(document.querySelector(query))
  }
}

// export const moveLeft = () => {}

// export const moveDown = () => {}

// export const moveUp = () => {}

// export const enterSelected = () => {}

// export const startControl = (query: string) => {}
