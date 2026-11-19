const modal = document.querySelector('[data-session-modal]');
const openButtons = document.querySelectorAll('[data-open-session-modal]');
const closeButtons = document.querySelectorAll('[data-modal-close]');
const form = document.querySelector('[data-session-form]');
const formStatus = document.querySelector('[data-form-status]');
const button = form?.querySelector('[data-form-submit]');
const nameInput = form?.querySelector('input[name="name"]');
const emailInput = form?.querySelector('input[name="email"]');
const redirectUrl = 'https://claude.ai/artifact/LkkEAMzhATw2PYKAKRyZG7';
let lastFocusedElement = null;

const setStatus = (message, isError = false) => {
	if (!formStatus) return;
	formStatus.textContent = message;
	formStatus.classList.toggle('text-brand-accent', isError);
	formStatus.classList.toggle('text-paper/70', !isError);
};

const closeModal = () => {
	if (!modal) return;
	modal.hidden = true;
	document.body.classList.remove('overflow-hidden');
	lastFocusedElement?.focus();
};

openButtons.forEach((openButton) => {
	openButton.addEventListener('click', () => {
		if (!modal) return;
		lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		modal.hidden = false;
		document.body.classList.add('overflow-hidden');
		form?.querySelector('input[name="name"]')?.focus();
	});
});

closeButtons.forEach((closeButton) => closeButton.addEventListener('click', closeModal));
modal?.querySelector('[data-modal-backdrop]')?.addEventListener('click', (event) => {
	if (event.target === event.currentTarget) closeModal();
});
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && modal && !modal.hidden) closeModal();
});

form?.addEventListener('submit', async (event) => {
	event.preventDefault();
	if (!button || !formStatus) return;
	const name = nameInput?.value.trim() ?? '';
	const email = emailInput?.value.trim() ?? '';
	if (!name) {
		setStatus('Please enter your name.', true);
		nameInput?.focus();
		return;
	}
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		setStatus('Please enter a valid email address.', true);
		emailInput?.focus();
		return;
	}
	button.disabled = true;
	button.textContent = 'Sending…';
	setStatus('');
	try {
		const source = window.location.pathname + window.location.search + window.location.hash;
		const response = await fetch(form.action, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name,
				email,
				phone: '',
				details: `Session request from ${source}`,
				customFields: { leadSource: 'rho-lall-github-io', timestamp: new Date().toISOString() },
			}),
			mode: 'cors',
			credentials: 'omit',
		});
		const result = await response.json();
		if (!response.ok || !result.success) throw new Error(result.error ?? 'Request failed');
		form.reset();
		setStatus('Thanks — your session request is on its way.');
		button.textContent = 'Sent — redirecting…';
		window.setTimeout(() => window.location.assign(redirectUrl), 1350);
	} catch (error) {
		console.error('Session enquiry submission failed.', error);
		setStatus('Something went wrong. Please try again.', true);
		button.textContent = 'Start your session';
		button.disabled = false;
	}
});
