const selectElement = (query: string) => {
  setTimeout(
    () => {
      const item = document.querySelectorAll(query)
      if (!document.querySelector('.selected')) {
        item[0]?.classList.add('selected')
      }
    },
    query === '.card' ? 2000 : 0
  )
}

const moveRight = (query: string) => {
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

export const startControl = (query: string) => {
  document.addEventListener('keydown', function (event) {
    switch (event.key) {
      case 'ArrowRight':
        console.log('right')
        moveRight(query)
        break
      case 'ArrowLeft':
        console.log('left')
        break
      case 'ArrowDown':
        console.log('down')
        break
      case 'ArrowUp':
        console.log('up')
        break
    }
  })
  selectElement(query)
}
