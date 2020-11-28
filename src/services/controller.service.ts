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

const moveDown = () => {
  const selected = document.querySelector('.selected')

  if (selected) {
    const parentSelected = <HTMLScriptElement>selected.parentElement
    const items = parentSelected.querySelectorAll(`.${selected.classList[0]}`)
    const itemsParent = document.querySelectorAll(
      `.${selected.parentElement?.classList[0]}`
    )
    const indexParent = Array.from(itemsParent).indexOf(parentSelected)
    const index = Array.from(items).indexOf(selected)

    let itemParent = itemsParent[indexParent + 1]?.querySelectorAll(
      `.${selected.classList[0]}`
    )
    if (indexParent + 1 < itemsParent.length) {
      console.log('index', index)
      itemParent[index]?.classList.add('selected')
    } else {
      itemParent = itemsParent[0]?.querySelectorAll(`.${selected.classList[0]}`)
      itemParent[index]?.classList.add('selected')
    }
    selected.classList.remove('selected')
  }
}

// const moveUp = () => {}

// const enterSelected = () => {}

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
    case 'Down':
      moveDown()
      break
    case 'ArrowUp':
      console.log('up')
      break
  }
}
