function Calculator(){
    this.display = document.querySelector('.display');

    this.start = () => {
        this.captureClicks();
        this.captureEnter();
    }

    this.captureEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return;
            this.performAccount();
        })
    }

    this.captureClicks = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.performAccount(); 
        })
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focu();
    }
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.performAccount = () => {
        try{
            const account = eval(this.display.value);
            if(!account){
                alert('Conta inválida!');
                return;
            }
            
            this.display.value = account;
        }catch(e){
            alert('Conta inválida!');
            return;
        }
    }
}

const calculator = new Calculator();
calculator.start();