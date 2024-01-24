let lastScroll = 0;

export function handleAnimation() {
    const articles = document.querySelectorAll('.animated-article');

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollThreshold = 5.8; 

        articles.forEach((article, index) => {
            const offset = article.getBoundingClientRect().top;
            const offsetStart = offset - windowHeight;

            if ((offsetStart / windowHeight) <= scrollThreshold && currentScroll >= offsetStart) {
                if (!article.classList.contains('animated')) {
                    setTimeout(() => {
                        article.classList.add('animated');
                    }, index * 300);
                }
            } else {
            }
        });

        lastScroll = currentScroll;
    });
}

export function initializeAnimation() {
    setTimeout(handleAnimation, 400);
}
