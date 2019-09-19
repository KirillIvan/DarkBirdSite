window.onload = function(e){
    const links = document.querySelectorAll('.link');
    const forms = document.querySelectorAll('form');
    
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click', function(){
            if(!this.classList.contains('checkedLink')){
                const linkCheck = document.querySelector('.checkedLink').classList.remove('checkedLink');
                this.classList.add('checkedLink');
                changeLinksChecked(forms);
            }
        });
    }
    
    function changeLinksChecked(forms){
        if(document.querySelector('.checkedLink').getAttribute('data-num') == 'link1'){
            forms[0].classList.remove('hideForm');
            forms[1].classList.add('hideForm');
        }
        else{
            forms[1].classList.remove('hideForm');
            forms[0].classList.add('hideForm');
        }
    }
    
    const auth = false;
    
    forms[0].onsubmit = function(e){
        const inputs =this.querySelectorAll('.authInput');
        if((inputs[0].value == '123') & (inputs[1].value == '234')){
            window.location.href = 'messenger.html';
        }
    }
}   