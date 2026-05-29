 const inp = document.querySelector('.box>input')
    const range = document.querySelector('.box>.range')
    const btn = document.querySelector('.box>button')
    const submitBtn = document.getElementById('submitBtn');
    console.log(inp);
    range.style.height = "10px";
    btn.addEventListener('mousedown', () => {
        inp.type = 'text'
        btn.innerText = '👀'
    })
    btn.addEventListener('mouseup', () => {
        inp.type = 'password'
        btn.innerText = '🤦‍♂️'
    })



    //empty


    inp.addEventListener('input', () => {
        temp = inp.value;
        let score = 0
        range.classList.add('strong-glow')
        if (temp.search(/[0-9]/) >= 0) score++
        if (temp.search(/[a-z]/) >= 0) score++
        if (temp.search(/[A-Z]/) >= 0) score++
        if (temp.search(/[!@#$%^&*]/) >= 0) score++
        if (temp.length >= 8) score++
        //end of score 
        if (temp.length === 0) {
            range.style.width = '0%';
            range.style.background = 'transparent';

        }
        //empty


        switch (score) {
            case 0: range.style.width = '0%'; range.style.background = 'red'; break;
            case 1: range.style.width = '20%'; range.style.background = 'gray'; break;
            case 2: range.style.width = '40%'; range.style.background = 'orange'; break;
            case 3: range.style.width = '60%'; range.style.background = 'yellow'; break;
            case 4: range.style.width = '80%'; range.style.background = 'green'; break;
            case 5: range.style.width = '100%'; range.style.background = 'blue'; break;



        }


        ///
        if (score === 5) {
            submitBtn.disabled = false; // Enable if password is strong

        } else {
            submitBtn.disabled = true;  // Keep disabled if weak
        }
    })