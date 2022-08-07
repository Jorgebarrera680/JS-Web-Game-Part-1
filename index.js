function newImage(src, left, bottom){
    let smImg = document.createElement('img')
    smImg.src = src
    smImg.style.position = 'fixed'
    smImg.style.left = left + 'px'
    smImg.style.bottom = bottom + 'px'
    document.body.append(smImg)
    return smImg
}

newImage('assets/green-character.gif', 100,100)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png',450,200)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)
newImage('assets/sword.png', 500, 405)
newImage('assets/shield.png', 165, 185)
newImage('assets/staff.png', 600, 100)

    





