document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('navlinks');
menuBtn.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }));
if ('IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }), { threshold: .12 });
 document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else { document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')); }
// Custom syringe follows the mouse across the page on desktop. It stays hidden on touch devices.
const syringe = document.getElementById('cursorSyringe');
document.addEventListener('pointermove', e => { if (e.pointerType === 'touch') return; syringe.style.left = `${e.clientX}px`; syringe.style.top = `${e.clientY}px`; syringe.classList.add('active'); });
document.addEventListener('pointerleave', () => syringe.classList.remove('active'));
// Accessible image lightbox for all project, award, sports and leadership galleries.
const lightbox = document.getElementById('lightbox'); const lightboxImg = document.getElementById('lightboxImage'); const lightboxCaption = document.getElementById('lightboxCaption');
document.querySelectorAll('.gallery-photo').forEach(btn => btn.addEventListener('click', () => { const img = btn.querySelector('img'); if (!img || btn.classList.contains('photo-missing')) return; lightboxImg.src = btn.dataset.full; lightboxImg.alt = img.alt; lightboxCaption.textContent = img.alt; lightbox.showModal(); }));
document.getElementById('closeLightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.open) lightbox.close(); });

