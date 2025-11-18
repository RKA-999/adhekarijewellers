document.addEventListener('DOMContentLoaded', (event) => {
  const alertElement = document.getElementById('alert');
  alertElement.classList.add('flashing');
  
  // ৪ বার অ্যানিমেশন চলার মোট সময়: 4 বার * 2 সেকেন্ড = 8 সেকেন্ড
  const totalAnimationTime = 5 * 2000; // মিলিসেকেন্ডে (2000ms = 2s)
  
  setTimeout(() => {
    alertElement.classList.remove('flashing');
    
    alertElement.style.opacity = 0;
  }, totalAnimationTime);
});











document.addEventListener('DOMContentLoaded', function() {
  // গত ৩০ দিনের লেবেল (তারিখের বদলে দিনের ক্রম ব্যবহার করা হলো)
  const labels30Days = [];
  for (let i = 30; i >= 1; i--) {
    if (i === 1) {
      labels30Days.push('আজ');
    } else if (i === 2) {
      labels30Days.push('গতকাল');
    } else {
      labels30Days.push(`${i - 1} দিন আগে`);
    }
  }
  // তারিখের নাম ব্যবহার করতে চাইলে, সেই অনুযায়ী অ্যারে তৈরি করতে হবে।
  
  
  // =======================================================
  //          ১. স্বর্ণের ৩০ দিনের নমুনা ডেটা (পরিবর্তন করুন)
  // =======================================================
  // ২২ ক্যারেট স্বর্ণের দাম (৳/গ্রাম) - ৩০ দিনের জন্য
  //low to high 
  const gold30DaysPrices = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 208471, 213718, 213718, 208272, 208272, 208272 // আজকের দাম
  ];
  
  // =======================================================
  //          ২. রুপার ৩০ দিনের নমুনা ডেটা (পরিবর্তন করুন)
  // =======================================================
  // রুপার দাম (৳/গ্রাম) - ৩০ দিনের জন্য
  // low to high
  const silver30DaysPrices = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 4246, 4246, 4246, 4246, 4246, 4246 // আজকের দাম
  ];
  
  // =======================================================
  //          ৩. গ্রাফ তৈরির ফাংশন (স্বর্ণ ও রুপা)
  // =======================================================
  
  // স্বর্ণের গ্রাফ তৈরি
  createGoldChart(labels30Days, gold30DaysPrices);
  
  // রুপার গ্রাফ তৈরি
  createSilverChart(labels30Days, silver30DaysPrices);
  
  
  function createGoldChart(labels, data) {
    const ctxGold = document.getElementById('goldPriceChart').getContext('2d');
    new Chart(ctxGold, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: ' ২২ক্যাঃ স্বর্ণের মূল্য বৃদ্ধি (টাকা)',
          data: data,
          borderColor: 'rgba(255, 193, 7, 1)', // Gold Color
          backgroundColor: 'rgba(255, 193, 7, 0.4)',
          fill: true, // লাইনের নিচে রঙ দিয়ে ভরাট
          tension: 0.2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
           min: 150000,
           max: 250000,
            title: { display: true, text: 'মূল্য (টাকা/ভরি)' }
          },
          x: {
            ticks: {
              // শুধুমাত্র প্রতি ৭ দিনের ডেটা লেবেল দেখানো (পরিষ্কার রাখার জন্য)
              autoSkip: true,
              maxTicksLimit: 7
            }
          }
        }
      }
    });
  }
  
  function createSilverChart(labels, data) {
    const ctxSilver = document.getElementById('silverPriceChart').getContext('2d');
    new Chart(ctxSilver, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: ' ২২ ক্যাঃ রূপার মূল্য বৃদ্ধি (টাকা)',
          data: data,
          borderColor: 'rgba(158, 158, 158, 1)', // Silver Color
          backgroundColor: 'rgba(158, 158, 158, 0.4)',
          fill: true,
          tension: 0.2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
          min: 1000,
          max: 6000,
            title: { display: true, text: 'মূল্য (টাকা/ভরি)' }
          },
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 7
            }
          }
        }
      }
    });
  }
  
});
