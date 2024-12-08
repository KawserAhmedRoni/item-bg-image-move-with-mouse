/*-----------------------------------------------------------------

Template Name: Stratify - Business Consulting HTML Template
Author:  ThemeMascot
Author URI: https://themeforest.net/user/thememascot/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Stratify - Business Consulting HTML Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. color switcher
03. header
04. gsap animation
05. js animation
06. fullScreen search
07. swiper slider
08. hover add class remove class
09. search screen
10. background image
11. magnificPopup
12. coundawn
13. counterup
14. back to top
15. wow animation

------------------------------------------------------------------*/

(function ($) {
	("use strict");
	const serviceImgItems = document.querySelectorAll(".service__item-3");
	serviceImgItems.forEach((item) => {
		const hoverImage = item.querySelector(".service__hover-3");
		if (!hoverImage) return;
		item.addEventListener("mousemove", ({ clientX, clientY }) => {
			const { x, y } = item.getBoundingClientRect();
			const dx = clientX - x;
			const dy = clientY - y;
			hoverImage.style.transform = `translate(${dx}px, ${dy}px)`;
		});
	});

	// old
	// const serviceImgItem = document.querySelectorAll(".service__item-3");

	// function followImageCursor(event, serviceImgItem) {
	// 	const contentBox = serviceImgItem.getBoundingClientRect();
	// 	const dx = event.clientX - contentBox.x;
	// 	const dy = event.clientY - contentBox.y;
	// 	serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
	// }

	// serviceImgItem.forEach((item, i) => {
	// 	item.addEventListener("mousemove", (event) => {
	// 		setInterval(followImageCursor(event, item), 1000);
	// 	});
	// });
})(jQuery);
