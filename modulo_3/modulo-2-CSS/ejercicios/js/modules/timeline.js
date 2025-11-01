import timelineData from '../data/timelineData.js';

export function initializeTimeline() {
	const container = document.getElementById('timeline-container');
	if (!container) return;

	// Añadimos una cabecera al timeline
	container.innerHTML = `<header class="timeline-header">
                            <span class="tag is-medium is-primary">Inicio</span>
                        </header>`;

	// Generamos cada item del timeline
	const timelineHTML = timelineData
		.map(
			(item) => `
    <div class="timeline-item">
        <div class="timeline-marker is-icon">
            <i class="fas ${item.icon}"></i>
        </div>
        <div class="timeline-content">
            <p class="heading">${item.year} - ${item.agency}</p>
            <p class="title is-5">${item.title}</p>
            <p style="max-width: 60ch;">${item.description}</p>
        </div>
    </div>
`
		)
		.join('');

	// Añadimos un pie al timeline
	const timelineFooter = `<header class="timeline-header">
                            <span class="tag is-medium is-primary">Presente</span>
                        </header>`;

	// Insertamos los items después de la cabecera inicial
	container.insertAdjacentHTML('beforeend', timelineHTML);
	container.insertAdjacentHTML('beforeend', timelineFooter);
}
