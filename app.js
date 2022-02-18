window.addEventListener("load", function(e) {
    const input = document.querySelector(".input");
    const checkItem = document.querySelectorAll(".check-item");
    const checkLength = document.querySelector(".check-length");
    const checkUpper = document.querySelector(".check-upper");
    const checkNumber = document.querySelector(".check-number");
    const checkSpecial = document.querySelector(".check-special");

    input.addEventListener("input", function(e) {
        const value = e.target.value;

        if(!value) {
            [...checkItem].forEach(item => {
                item.classList.remove("active");
                item.classList.remove("unactive");
            });
            return;
        }

        // Kiểm tra số kí tự lớn hơn 8
        if (value.length >= 8) {
            checkLength.classList.add("active");
            checkLength.classList.remove("unactive");
        } else {
            checkLength.classList.remove("active");
            checkLength.classList.add("unactive");
        }

        // Kiểm tra kí tự in hoa
        pwdValidate(/[A-Z]/, value, checkUpper);
        // Kiểm tra có chứa 1 số
        pwdValidate(/[0-9]/, value, checkNumber);
        // Kiểm tra số kí tự đặc biệt
        pwdValidate(/[\/(){}?+*|.^$!@#%^&~`]/, value, checkSpecial);

    });

    function pwdValidate(regex, valueInput, selector) {
        if (regex.test(valueInput)) {
            selector.classList.add("active");
            selector.classList.remove("unactive");
        } else {
            selector.classList.remove("active");
            selector.classList.add("unactive");
        }
    }
})