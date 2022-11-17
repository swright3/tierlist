function dragStart(event) {
    console.log('drag started')
    event.dataTransfer.clearData()
    event.dataTransfer.setData('text/plain', event.target.id)
    console.log(event.target)
    //document.getElementById(event.target.id).classList.add('beingDragged')
}

function drop(event) {
    event.preventDefault()
    console.log('dropped')
    //source.classList.remove('beingDragged')
}

function dragOver(event) {
    console.log('dragging over')
    event.preventDefault()
    const data = event.dataTransfer.getData('text')
    const source = document.getElementById(data)
    const target = event.target
    if (source !== target.parentElement && source !== target) {
        if (target.matches('.left')) {
            target.parentElement.parentElement.insertBefore(source, target.parentElement)
        } else if (target.matches('.right')) {
            target.parentElement.parentElement.insertBefore(source, target.parentElement.nextSibling)
        } else if (target.classList.contains('dropBox')) {
            target.appendChild(source)
        }
    }
}



const container = document.querySelector('.container')
container.addEventListener('dragstart', dragStart)
container.addEventListener('dragover', dragOver)
container.addEventListener('drop', drop)