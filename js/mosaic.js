/*
 * Duyên Lành Web — Hero Mosaic Visual
 * Optimized: deferred loading, mobile simplification, no auto-rotate on mobile
 */
(function () {
  'use strict';

  var grid = document.getElementById('mosaicGrid');
  var titleEl = document.getElementById('mosaicTitle');
  var descEl = document.getElementById('mosaicDesc');
  var tabs = document.querySelectorAll('.mosaic-tab');

  if (!grid || !titleEl || !descEl) return;

  var isMobile = window.innerWidth < 768;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var GRID_SIZE = 18;
  var cells = [];

  for (var i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    var cell = document.createElement('span');
    cell.className = 'mosaic-pixel';
    grid.appendChild(cell);
    cells.push(cell);
  }

  var services = [
    {
      title: 'Thiết kế website',
      desc: 'Giao diện đẹp, rõ ràng, chuẩn mobile và dễ liên hệ cho cửa hàng nhỏ.',
      color: '#E38A6D',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="black"><path d="M44 6c3 0 6 3 6 6 0 2-1 4-2 5L34 31c-2 2-4 3-7 3h-3c-3 0-5 2-5 5 0 2 2 4 5 4 5 0 9 4 9 9 0 7-6 12-13 12S7 59 7 52c0-6 5-11 11-11h7c2 0 4-1 6-2l15-15c1-1 2-3 2-5 0-2-2-4-4-4z"/></svg>'
    },
    {
      title: 'Quản trị website',
      desc: 'Cập nhật nội dung, hình ảnh và kiểm tra hiển thị để website luôn ổn định.',
      color: '#9AAE7A',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="black"><path d="M37 6l2 6a20 20 0 0 1 5 2l6-3 6 6-3 6a20 20 0 0 1 2 5l6 2v8l-6 2a20 20 0 0 1-2 5l3 6-6 6-6-3a20 20 0 0 1-5 2l-2 6h-8l-2-6a20 20 0 0 1-5-2l-6 3-6-6 3-6a20 20 0 0 1-2-5l-6-2v-8l6-2a20 20 0 0 1 2-5l-3-6 6-6 6 3a20 20 0 0 1 5-2l2-6zm-5 16a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/></svg>'
    },
    {
      title: 'SEO cơ bản',
      desc: 'Tối ưu nền tảng để Google hiểu website tốt hơn và khách dễ tìm thấy bạn hơn.',
      color: '#D98AA1',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="black"><path d="M27 8a19 19 0 1 1-12 34l-8 8 5 5 8-8A19 19 0 0 1 27 8zm0 6a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm-5 18 6-6 5 5 7-7 4 4-11 11-5-5-6 6z"/></svg>'
    }
  ];

  function svgToMask(svgString, size) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);

        var imageData = ctx.getImageData(0, 0, size, size).data;
        var mask = [];
        for (var i = 0; i < size * size; i++) {
          mask.push(imageData[i * 4 + 3] > 40);
        }
        resolve(mask);
      };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
    });
  }

  function renderService(index) {
    var service = services[index];
    titleEl.textContent = service.title;
    descEl.textContent = service.desc;

    tabs.forEach(function (tab, i) {
      tab.classList.toggle('active', i === index);
    });

    cells.forEach(function (cell, i) {
      // On mobile or reduced-motion, skip randomized delays
      if (!isMobile && !prefersReducedMotion) {
        cell.style.setProperty('--delay', (Math.random() * 220) + 'ms');
      }

      if (service.mask && service.mask[i]) {
        cell.classList.add('on');
        cell.style.backgroundColor = service.color;
      } else {
        cell.classList.remove('on');
        cell.style.backgroundColor = '#e9e3d9';
      }
    });
  }

  function prepareServices() {
    // On mobile, skip canvas processing — just use pre-computed approximate masks
    if (isMobile) {
      // Simple pattern: fill first ~60% with active pixels (approximate circle)
      var totalCells = GRID_SIZE * GRID_SIZE;
      services.forEach(function (service) {
        service.mask = [];
        var center = GRID_SIZE / 2;
        for (var i = 0; i < totalCells; i++) {
          var row = Math.floor(i / GRID_SIZE);
          var col = i % GRID_SIZE;
          var dist = Math.sqrt((row - center) * (row - center) + (col - center) * (col - center));
          var threshold = 6 + (services.indexOf(service) * 1.5);
          service.mask.push(dist < threshold);
        }
      });
      return Promise.resolve();
    }

    // Desktop: use canvas for precise SVG masks
    return Promise.all(services.map(function (service) {
      return svgToMask(service.svg, GRID_SIZE).then(function (mask) {
        service.mask = mask;
      });
    }));
  }

  var current = 0;
  var autoRotate;

  function startRotate() {
    if (autoRotate) clearInterval(autoRotate);
    // On mobile, no auto-rotate (saves battery + main thread)
    if (isMobile || prefersReducedMotion) return;
    autoRotate = setInterval(function () {
      current = (current + 1) % services.length;
      renderService(current);
    }, 3200);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      current = Number(tab.dataset.index);
      renderService(current);
      startRotate();
    });
  });

  prepareServices().then(function () {
    renderService(0);
    startRotate();
  });

})();
