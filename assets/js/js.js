 // const inp = document.querySelector('.box>input')
 //    const range = document.querySelector('.box>.range')
 //    const btn = document.querySelector('.box>button')
 //    const submitBtn = document.getElementById('submitBtn');
 //    console.log(inp);
 //    range.style.height = "10px";
 //    btn.addEventListener('mousedown', () => {
 //        inp.type = 'text'
 //        btn.innerText = '👀'
 //    })
 //    btn.addEventListener('mouseup', () => {
 //        inp.type = 'password'
 //        btn.innerText = '🤦‍♂️'
 //    })



 //    //empty


 //    inp.addEventListener('input', () => {
 //        temp = inp.value;
 //        let score = 0
 //        range.classList.add('strong-glow')
 //        if (temp.search(/[0-9]/) >= 0) score++
 //        if (temp.search(/[a-z]/) >= 0) score++
 //        if (temp.search(/[A-Z]/) >= 0) score++
 //        if (temp.search(/[!@#$%^&*]/) >= 0) score++
 //        if (temp.length >= 8) score++
 //        //end of score 
 //        if (temp.length === 0) {
 //            range.style.width = '0%';
 //            range.style.background = 'transparent';

 //        }
 //        //empty


 //        switch (score) {
 //            case 0: range.style.width = '0%'; range.style.background = 'red'; break;
 //            case 1: range.style.width = '20%'; range.style.background = 'gray'; break;
 //            case 2: range.style.width = '40%'; range.style.background = 'orange'; break;
 //            case 3: range.style.width = '60%'; range.style.background = 'yellow'; break;
 //            case 4: range.style.width = '80%'; range.style.background = 'green'; break;
 //            case 5: range.style.width = '100%'; range.style.background = 'blue'; break;



 //        }


 //        ///
 //        if (score === 5) {
 //            submitBtn.disabled = false; // Enable if password is strong

 //        } else {
 //            submitBtn.disabled = true;  // Keep disabled if weak
 //        }
 //    })
const inp = document.getElementById('pwInput');
const peekBtn = document.getElementById('peekBtn');
const submitBtn = document.getElementById('submitBtn');
const segs = document.querySelectorAll('.seg');
const meterLabel = document.getElementById('meterLabel');
const checklistItems = document.querySelectorAll('.checklist li');

const colors = {
    0: 'transparent',
    1: '#F43F5E', // red
    2: '#F59E0B', // amber
    3: '#EAB308', // yellow
    4: '#22D3EE', // cyan
    5: '#34D399'  // green
};

const labels = {
    0: 'enter a password',
    1: 'very weak',
    2: 'weak',
    3: 'okay',
    4: 'strong',
    5: 'very strong'
};

peekBtn.addEventListener('mousedown', () => {
    inp.type = 'text';
    peekBtn.textContent = '🙈';
});
peekBtn.addEventListener('mouseup', () => {
    inp.type = 'password';
    peekBtn.textContent = '👁';
});
peekBtn.addEventListener('mouseleave', () => {
    inp.type = 'password';
    peekBtn.textContent = '👁';
});

inp.addEventListener('input', () => {
    const val = inp.value;

    const rules = {
        len: val.length >= 8,
        lower: /[a-z]/.test(val),
        upper: /[A-Z]/.test(val),
        num: /[0-9]/.test(val),
        sym: /[!@#$%^&*]/.test(val)
    };

    let score = Object.values(rules).filter(Boolean).length;
    if (val.length === 0) score = 0;

    // update checklist
    checklistItems.forEach(li => {
        const rule = li.dataset.rule;
        const passed = rules[rule];
        li.classList.toggle('done', passed);
        li.querySelector('.mark').textContent = passed ? '✓' : '○';
    });

    // update segmented meter
    segs.forEach((seg, i) => {
        if (i < score) {
            seg.style.background = colors[score];
            seg.style.boxShadow = `0 0 8px ${colors[score]}66`;
        } else {
            seg.style.background = '';
            seg.style.boxShadow = 'none';
        }
    });

    meterLabel.textContent = labels[score];

    submitBtn.disabled = score < 5;
});
