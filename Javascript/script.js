function updateTime() {

    const timeElement = document.getElementById("currentTime");

    if (timeElement) {

        const now = new Date();

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        const currentDate = now.toLocaleDateString("en-US", options);
        const currentTime = now.toLocaleTimeString();

        timeElement.innerHTML =
            currentDate + "<br>" + currentTime;
    }

}

updateTime();

setInterval(updateTime, 1000);

let reportCount = localStorage.getItem("reportCount");

if (reportCount === null) {
    reportCount = 0;
}

reportCount = parseInt(reportCount);

const reportCounter = document.getElementById("reportCounter");
const homeCounter = document.getElementById("homeCounter");

if (reportCounter) {
    reportCounter.textContent = reportCount;
}

if (homeCounter) {
    homeCounter.textContent = reportCount;
}

const description = document.getElementById("description");
const charCount = document.getElementById("charCount");

if (description && charCount) {

    description.addEventListener("input", function () {

        charCount.textContent =
            this.value.length + " / 300 characters";

    });

}

const reportForm = document.getElementById("reportForm");

if (reportForm) {

    reportForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const district = document.getElementById("district").value.trim();
        const sector = document.getElementById("sector").value.trim();
        const cell = document.getElementById("cell").value.trim();
        const problemType = document.getElementById("problemType").value;
        const image = document.getElementById("image").files.length;
        const descriptionText = document.getElementById("description").value.trim();

        if (fullname.length < 3) {
            alert("Please enter a valid full name.");
            return;
        }

        if (phone.length < 10) {
            alert("Please enter a valid phone number.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (problemType === "") {
            alert("Please select the problem type.");
            return;
        }

        if (district === "") {
            alert("Please enter the district.");
            return;
        }

        if (sector === "") {
            alert("Please enter the sector.");
            return;
        }

        if (cell === "") {
            alert("Please enter the cell.");
            return;
        }

        if (image === 0) {
            alert("Please upload an image.");
            return;
        }

        if (descriptionText.length < 20) {
            alert("Description should contain at least 20 characters.");
            return;
        }

        reportCount++;

        localStorage.setItem("reportCount", reportCount);

        if (reportCounter) {
            reportCounter.textContent = reportCount;
        }

        if (homeCounter) {
            homeCounter.textContent = reportCount;
        }

        const successMessage = document.getElementById("successMessage");

        if (successMessage) {
            successMessage.innerHTML =
                "✅ Report submitted successfully! Thank you for helping improve Rwanda.";
        }

        reportForm.reset();

        if (charCount) {
            charCount.textContent = "0 / 300 characters";
        }

    });

}

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    if (link.href === window.location.href) {
        link.classList.add("active");
    }

});

const heroCard = document.querySelector(".hero-card");

if (heroCard) {
    console.log("Welcome to RwandaFix!");
}