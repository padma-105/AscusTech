// about section start
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // Toggle visibility
    if (content.style.display === "block") {
      content.style.display = "none";
      header.classList.remove('active');
    } else {
      content.style.display = "block";
      header.classList.add('active');
    }
  });
});
//dots section 
//about section end
// service section start

// service section end
// progress section start
 const skills = [
    { name: 'Artificial Intelligence', percent: 90, color: 'green' },
    { name: 'Cyber Security', percent: 85, color: 'cyan' },
    { name: 'IT Management', percent: 95, color: 'yellow' },
    { name: 'Web Development', percent: 95, color: '#8aaae5' }
  ];

  const container = document.getElementById('skills-container');

  skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill');

    skillDiv.innerHTML = `
      <div class="skill-name">
        <span>${skill.name}</span>
        <span>${skill.percent}%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" style="background: ${skill.color}"></div>
      </div>
    `;

    container.appendChild(skillDiv);
  });

  // Animate bars after load
  window.addEventListener('load', () => {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.width = skills[index].percent + '%';
      }, index * 300);
    });
  });
//   progress section end

//contact section start
 const mapSection = document.getElementById('mapSection');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mapSection.classList.add('active');
        } else {
          mapSection.classList.remove('active');
        }
      });
    }, {
      threshold: 0.5 
    });

    observer.observe(mapSection);
    //contact section end