export const startControl = (query: string) => {
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

const moveRight = () => {
  const selected = document.querySelector('.selected')

  if (selected) {
    const items = document.querySelectorAll(`.${selected.classList[0]}`)

    console.log(items)
    let index = Array.from(items).indexOf(selected)
    if (items.length - 2 >= index) {
      items[++index].classList.add('selected')
    } else {
      items[0]?.classList.add('selected')
    }
    selected.classList.remove('selected')
  }
}

const moveLeft = () => {
  const selected = document.querySelector('.selected')

  if (selected) {
    const items = document.querySelectorAll(`.${selected.classList[0]}`)

    let index = Array.from(items).indexOf(selected)
    if (index > 0) {
      items[--index].classList.add('selected')
    } else {
      items[items.length - 1]?.classList.add('selected')
    }
    selected.classList.remove('selected')
  }
}

// export const moveDown = () => {}

// export const moveUp = () => {}

// export const enterSelected = () => {}

export const activeControl = (event: { key: string }) => {
  switch (event.key) {
    case 'ArrowRight':
    case 'Right':
      moveRight()
      break
    case 'ArrowLeft':
    case 'Left':
      moveLeft()
      break
    case 'ArrowDown':
      console.log('down')
      break
    case 'ArrowUp':
      console.log('up')
      break
  }
}
