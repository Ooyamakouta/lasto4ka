// graph
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["2007", "2014", "2017", "2020", "2025"],
            datasets: [
                {
                    label: "ssense",
                    data: [30, 40, 50, 35, 70],
                    borderColor: "darkcyan",
                    borderWidth: 1
                },
                {
                    label: "farfetch",
                    data: [25, 35, 40, 65, 75],
                    borderColor: "green",
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});


// slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.sliderline');
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.btnleft');
    const btnRight = document.querySelector('.btnright');
    const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
    const slidesCount = slides.length;

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
    });

    let currentPosition = 0;

    function updatePosition() {
        slider.style.transform = `translateX(${currentPosition}px)`;
    }

    function nextSlide() {
        currentPosition -= slideWidth;
        slider.style.transition = 'transform 0.5s ease';
        updatePosition();

        if (currentPosition <= -slideWidth * slidesCount) {
            setTimeout(() => {
                slider.style.transition = 'none';
                currentPosition = 0;
                updatePosition();
            }, 500);
        }
    }

    function prevSlide() {
        if (currentPosition >= 0) {
            slider.style.transition = 'none';
            currentPosition = -slideWidth * (slidesCount - 1);
            updatePosition();
        } else {
            currentPosition += slideWidth;
            slider.style.transition = 'transform 0.5s ease';
            updatePosition();
        }
    }

    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    function toggleTooltip(element) {
        const tooltip = element.querySelector('.tooltip');

        document.querySelectorAll('.tooltip.show').forEach(tip => {
            if (tip !== tooltip) {
                tip.classList.remove('show');
            }
        });

        tooltip.classList.toggle('show');

        document.addEventListener('click', function closeTooltip(e) {
            if (!element.contains(e.target)) {
                tooltip.classList.remove('show');
                document.removeEventListener('click', closeTooltip);
            }
        });

        event.stopPropagation();
    }

    document.querySelectorAll(".tooltip-container h3").forEach(button => {
        button.addEventListener("click", function (e) {
            e.stopPropagation();
            toggleTooltip(this.parentElement);
        });
    });

    document.addEventListener("click", function () {
        document.querySelectorAll('.tooltip.show').forEach(tip => {
            tip.classList.remove('show');
        });
    });
});


// voprosotvet
document.querySelectorAll(".infocon").forEach(item => {
    item.addEventListener("mouseenter", function () {
        let tooltip = this.querySelector(".info");
        tooltip.style.display = "block";
    });

    item.addEventListener("mouseleave", function () {
        let tooltip = this.querySelector(".info");
        tooltip.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".faq").forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });
  });



  
//tarify
  document.addEventListener('DOMContentLoaded', function() {
    const tariffData = {
      'неделя': {
        'basic': {
          price: '2900 тг',
          period: 'в неделю за 1 сайт',
          dataAvailable: 'Данные доступны за 1 неделю'
        },
        'expert': {
          price: '3900 тг',
          period: 'в неделю за 1 сайт',
          dataAvailable: 'Данные доступны за 2 недели'
        },
        'enterprice': {
          price: '5900 тг',
          period: 'в неделю за 1 сайт',
          dataAvailable: 'Данные за всю историю наблюдений'
        }
      },
      'месяц': {
        'basic': {
          price: '7900 тг',
          period: 'в месяц за 1 сайт',
          dataAvailable: 'Данные доступны за 1 неделю'
        },
        'expert': {
          price: '9900 тг',
          period: 'в месяц за 1 сайт',
          dataAvailable: 'Данные доступны за 2 недели'
        },
        'enterprice': {
          price: '15900 тг',
          period: 'в месяц за 1 сайт',
          dataAvailable: 'Данные за всю историю наблюдений'
        }
      },
      '3 месяца': {
        'basic': {
          price: '18900 тг',
          period: 'за 3 месяца за 1 сайт',
          dataAvailable: 'Данные доступны за 1 неделю'
        },
        'expert': {
          price: '24900 тг',
          period: 'за 3 месяца за 1 сайт',
          dataAvailable: 'Данные доступны за 2 недели'
        },
        'enterprice': {
          price: '29900 тг',
          period: 'за 3 месяца за 1 сайт',
          dataAvailable: 'Данные за всю историю наблюдений'
        }
      },
      '6 месяцев': {
        'basic': {
          price: '35900 тг',
          period: 'за 6 месяцев за 1 сайт',
          dataAvailable: 'Данные доступны за 1 неделю'
        },
        'expert': {
          price: '44900 тг',
          period: 'за 6 месяцев за 1 сайт',
          dataAvailable: 'Данные доступны за 2 недели'
        },
        'enterprice': {
          price: '52900 тг',
          period: 'за 6 месяцев за 1 сайт',
          dataAvailable: 'Данные за всю историю наблюдений'
        }
      },
      'год': {
        'basic': {
          price: '64900 тг',
          period: 'за год за 1 сайт',
          dataAvailable: 'Данные доступны за 1 неделю'
        },
        'expert': {
          price: '73900 тг',
          period: 'за год за 1 сайт',
          dataAvailable: 'Данные доступны за 2 недели'
        },
        'enterprice': {
          price: '99900 тг',
          period: 'за год за 1 сайт',
          dataAvailable: 'Данные за всю историю наблюдений'
        }
      }
    };
  
    const buttons = document.querySelectorAll('.tarifbtn');
    
    let activeButton = document.querySelector('.tarifbtn:nth-child(2)');
    activeButton.classList.add('active');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        if (activeButton) {
          activeButton.classList.remove('active');
        }
        
        this.classList.add('active');
        activeButton = this;
        
        const selectedPeriod = this.textContent;
        
        updateTariffInfo(selectedPeriod);
      });
    });
    
    function updateTariffInfo(period) {
      const periodData = tariffData[period];
      
      if (periodData.basic) {
        const basicTariff = document.querySelector('.tarifyb');
        basicTariff.querySelector('.priceb').textContent = periodData.basic.price;
        basicTariff.querySelector('p').textContent = periodData.basic.period;
        basicTariff.querySelector('h1:nth-of-type(3)').textContent = periodData.basic.dataAvailable;
      }
      
      if (periodData.expert) {
        const expertTariff = document.querySelector('.tarifyex');
        expertTariff.querySelector('.priceex').textContent = periodData.expert.price;
        expertTariff.querySelector('p').textContent = periodData.expert.period;
        expertTariff.querySelector('h1:nth-of-type(3)').textContent = periodData.expert.dataAvailable;
      }
      
      if (periodData.enterprice) {
        const enterpriseTariff = document.querySelector('.tarifyen');
        enterpriseTariff.querySelector('.priceen').textContent = periodData.enterprice.price;
        enterpriseTariff.querySelector('p').textContent = periodData.enterprice.period;
        enterpriseTariff.querySelector('h1:nth-of-type(3)').textContent = periodData.enterprice.dataAvailable;
      }
    }
    
    const style = document.createElement('style');
    style.textContent = `
      .tarifbtn.active {
        background-color: #483d8b;
        color: white;
        font-weight: 100;
      }
    `;
    document.head.appendChild(style);
  });  