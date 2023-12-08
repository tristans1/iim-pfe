export default function applyBrutalism(intensity: number = 100) {
    const brutalismVideos = document.querySelectorAll('.brutalismjs-video');

    brutalismVideos.forEach((video) => {
        let container: HTMLElement | null = video.closest('.brutalismjs-container');

        if (!container) {
            container = document.createElement('div');
            container.className = 'brutalismjs-container';

            if (video.parentNode) {
                video.parentNode.insertBefore(container, video);
                container.appendChild(video);
            }
        }

        container.style.filter = 'none';

        container.style.filter = `invert(${intensity}%) grayscale(100%)`;
    });
}
