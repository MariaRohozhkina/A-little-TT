const inputRange = document.getElementById('input-range');
const percent = document.getElementById('percent');
const optionsList = document.getElementById('options-container'); 
const select = document.getElementById('select-system-container__select');
const selectedValue = document.getElementById('selected-value');

inputRange.addEventListener('mouseup', () => {
    percent.innerHTML = `${inputRange.value}%`;
} )

select.addEventListener('click', () => {
    if (!optionsList.classList.contains('visible')) {
        optionsList.classList.add('visible');
        select.style.background = '#3d4050';
        select.style.border = 'none';
        select.style.color = '#ffffff';
        select.style.backgroundImage = 'url(/assets/arrowwhite.png)';
        select.style.backgroundRepeat = 'no-repeat';
        select.style.backgroundPosition = '93% 21px';
    } else {
        optionsList.classList.remove('visible');
        select.style.background = 'rgba(255,255,255,0.8509803921568627)';
        select.style.border = '1px solid #ffffff';
        select.style.color = '#272733';
        select.style.backgroundImage = 'url(/assets/arrow.png)';
        select.style.backgroundRepeat = 'no-repeat';
        select.style.backgroundPosition = '93% 21px';
       
    }
})

optionsList.addEventListener('mouseover', (el) => {
    el.target.style.color = '#42a9ed';
})

optionsList.addEventListener('mouseout', (el) => {
    el.target.style.color = '#fff';
})

optionsList.addEventListener('mouseup', (el) => {
    selectedValue.innerHTML = el.target.innerHTML;
    optionsList.classList.remove('visible');
})