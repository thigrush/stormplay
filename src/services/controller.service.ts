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
  const items = document.querySelectorAll(query)
  const selected = document.querySelector('.selected')

  console.log(items)
  console.log(selected)

  if (selected) {
    let index = Array.from(items).indexOf(selected)
    if (items.length - 2 >= index) {
      items[++index].classList.add('selected')
    } else {
      selected.classList.remove('selected')
      items[0].classList.add('selected')
      window.scrollTo(0, 1000)
    }
    selected.classList.remove('selected')
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
      case 'Right':
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

    console.log(event.key)
  })
  selectElement(query)
}
