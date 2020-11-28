export const startControl = (query: string) => {
  const item = document.querySelectorAll(query)
  if (item.length) {
    !document.querySelector('.selected')
      ? item[0]?.classList.add('selected')
      : null
  } else {
    setTimeout(() => {
      startControl(query)
    }, 1000)
  }
}

const moveHorizontal = (direction: string) => {
  const selected = document.querySelector('.selected')
  if (selected) {
    const items = document.querySelectorAll(`.${selected.classList[0]}`)
    let index = Array.from(items).indexOf(selected)

    if (direction === 'right') {
      items.length - 2 >= index
        ? items[++index].classList.add('selected')
        : items[0]?.classList.add('selected')
    } else if (direction === 'left') {
      index > 0
        ? items[--index].classList.add('selected')
        : items[items.length - 1]?.classList.add('selected')
    }

    selected.classList.remove('selected')
  }
}

const moveVertical = (direction: string) => {
  const selected = document.querySelector('.selected')
  if (selected) {
    const parentSelected = <HTMLScriptElement>selected.parentElement
    const items = parentSelected.querySelectorAll(`.${selected.classList[0]}`)
    const itemsParent = document.querySelectorAll(
      `.${selected.parentElement?.classList[0]}`
    )
    const indexParent = Array.from(itemsParent).indexOf(parentSelected)
    const index = Array.from(items).indexOf(selected)

    let itemParent = itemsParent[
      direction === 'down' ? indexParent + 1 : indexParent - 1
    ]?.querySelectorAll(`.${selected.classList[0]}`)

    if (
      direction === 'down' ? indexParent + 1 < itemsParent.length : itemParent
    ) {
      if (itemParent[index]) {
        itemParent[index].classList.add('selected')
      } else {
        itemParent[itemParent?.length - 1]?.classList.add('selected')
      }
    } else {
      if (direction === 'down') {
        itemParent = itemsParent[0]?.querySelectorAll(
          `.${selected.classList[0]}`
        )
        itemParent[index]?.classList.add('selected')
      } else if (direction === 'up') {
        itemParent = itemsParent[itemsParent?.length - 1]?.querySelectorAll(
          `.${selected.classList[0]}`
        )
        itemParent[index]
          ? itemParent[index]?.classList.add('selected')
          : itemParent[0]?.classList.add('selected')
      }
    }
    selected.classList.remove('selected')
  }
}

const enterSelected = () => {
  const selected = <HTMLScriptElement>document.querySelector('.selected')
  selected ? selected.click() : null
}

// const scrollItem = () => {
//   document.querySelector('html').scrollTop = 200
//   document.querySelector('.scroll-container').scroll(400, 0)
// }

export const activeControl = (event: { key: string }) => {
  switch (event.key) {
    case 'ArrowRight':
    case 'Right':
      moveHorizontal('right')
      break
    case 'ArrowLeft':
    case 'Left':
      moveHorizontal('left')
      break
    case 'ArrowDown':
    case 'Down':
      moveVertical('down')
      break
    case 'ArrowUp':
    case 'Up':
      moveVertical('up')
      break
    case 'Enter':
      // scrollItem()
      enterSelected()
      break
  }
}
