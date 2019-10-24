

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('mainContent');

    const firstArr = [2, 5, 1,0];

    const secondArr = [...firstArr].sort((a,b) => a-b);
    content.innerText = secondArr + ' ' + firstArr;
});