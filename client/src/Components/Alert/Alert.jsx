import React from 'react';
import "./Alert.css";

export default function Alert(msg) {
    const button = document.querySelector("button")
    const toast = document.querySelector(".toast");
    const closeIcon = document.querySelector(".close");
    const progress = document.querySelector(".progress");

    let timer1, timer2;

    button.addEventListener("click", () => {
        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
            progress.classList.remove("active");
        }, 5300);
    });

    closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");

        setTimeout(() => {
            progress.classList.remove("active");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
    });
    return (
        <>
            <div class="toast active">

                <div class="toast-content">
                    <i class="fas fa-solid fa-check check"></i>
                    <div class="message">
                        <span class="text text-1">Success</span>
                        <span class="text text-2">Your changes has been saved</span>
                    </div>
                </div>
                <i class="fa-solid fa-xmark close"></i>
                {/* <!-- Remove 'active' class, this is just to show in Codepen thumbnail -->
  <div class="progress active"></div> */}
            </div>
        </>
    );
}
