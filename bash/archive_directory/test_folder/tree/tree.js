function tree(size, stars = 1) {
    (size === 0) ? console.log(' '.repeat((stars/2)-1), '*') : null;
    if (size <= 0) return;
    console.log(' '.repeat(size - 1), '*'.repeat(stars))
    tree(size - 1, stars + 2);
}
tree(5);