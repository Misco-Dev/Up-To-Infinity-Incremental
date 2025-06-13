interface CountdownElements {
    days: HTMLElement | null;
    hours: HTMLElement | null;
    minutes: HTMLElement | null;
    seconds: HTMLElement | null;
}

function updateCountdown(): void {
    const targetDate: number = new Date('2025-08-01T00:00:00').getTime();
    const interval = window.setInterval(update, 1000);
    let previousSeconds: number = -1;

    function addChangingClass(element: HTMLElement | null): void {
        if (!element) return;
        element.closest('.countdown-value')?.classList.add('changing');
        setTimeout(() => {
            element.closest('.countdown-value')?.classList.remove('changing');
        }, 300);
    }

    function update(): void {
        const now: number = new Date().getTime();
        const distance: number = targetDate - now;

        if (distance <= 0) {
            if (interval !== undefined) {
                clearInterval(interval);
            }
            const countdownElement: HTMLElement | null = document.querySelector('.countdown');
            if (countdownElement) {
                countdownElement.innerHTML = "<h2 class='end-message'>¡Time is up!</h2>";
            }
            return;
        }

        const days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

        const elements: CountdownElements = {
            days: document.getElementById('countdown-days'),
            hours: document.getElementById('countdown-hours'),
            minutes: document.getElementById('countdown-minutes'),
            seconds: document.getElementById('countdown-seconds'),
        };

        if (elements.days && elements.hours && elements.minutes && elements.seconds) {
            if (previousSeconds !== seconds) {
                addChangingClass(elements.seconds);
                if (seconds === 0) addChangingClass(elements.minutes);
                if (seconds === 0 && minutes === 0) addChangingClass(elements.hours);
                if (seconds === 0 && minutes === 0 && hours === 0) addChangingClass(elements.days);
            }

            elements.days.textContent = days.toString().padStart(2, '0');
            elements.hours.textContent = hours.toString().padStart(2, '0');
            elements.minutes.textContent = minutes.toString().padStart(2, '0');
            elements.seconds.textContent = seconds.toString().padStart(2, '0');

            previousSeconds = seconds;
        }
    }

    update();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCountdown);
} else {
    updateCountdown();
}
