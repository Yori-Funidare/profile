 function showSkills(target) {
      const allFills = document.querySelectorAll('.fill');
      allFills.forEach(fill => {
        fill.style.width = '0';
        fill.classList.remove('animate');
      });

      const selectedFill = document.querySelector(`.skill.${target} .fill`);
      const width = selectedFill.getAttribute('data-width');
      selectedFill.style.width = width;
      selectedFill.classList.add('animate');
    }
