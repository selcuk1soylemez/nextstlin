'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

// TypeScript'e global `google` nesnesinin var olacağını söylüyoruz
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const StoreFinderMap = () => {
  useEffect(() => {
    // Bu fonksiyon Google Maps API script'i yüklendiğinde `callback` olarak çalışacak
    window.initMap = function() {
      // Orijinal script'teki tüm mantık burada
      let stores = [
        {
            "recommendation": {},"storeNumber": "5758-13907","id": "15051","name": "Linde Gas & Gear",
            "phoneNumber": "01753 820015","mobileNumber": "07912 101353","emailAddress": "steve@lindegas.co.uk",
            "coordinates": {"latitude": 34.063584,"longitude": -118.376354},
            "address": {"streetAddressLine1": "Unit 6 Peninsular Park Road,Bugsby WayLondonCharlton SE7 7TZUK","city": "Istanbul","postalCode": "902113301"},
            "ownershipTypeCode": "Dealer","openStatusText": "08:00 - 12:00, 12:30 - 16:00, Call to confirm",
            "addressLines": ["Unit 6 Peninsular Park Road,Bugsby WayLondonCharlton SE7 7TZUK"],
            "features": [{"code": "WG","name": "Welding gases"},{"code": "IG","name": "Industrial gases"},{"code": "PE","name": "Protective Equipment"}],
        },
      ];

      var map: any;
      var markers: any[] = [];
      var infoWindow: any;

      var losAngeles = { lat: 34.063380, lng: -118.358080 };
      map = new window.google.maps.Map(document.getElementById("map"), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: "roadmap",
      });
      infoWindow = new window.google.maps.InfoWindow();
      
      const searchButton = document.getElementById('code-search-button');
      if (searchButton) {
        searchButton.onclick = searchStores;
      }
      searchStores(); // Sayfa ilk yüklendiğinde tüm mağazaları göster

      function searchStores() {
        var foundStores = [];
        var zipCodeInput = document.getElementById('code-input') as HTMLInputElement;
        var zipCode = zipCodeInput ? zipCodeInput.value : '';
        if (zipCode) {
            stores.forEach(store => {
                var postal = store.address.postalCode.substring(0, 5);
                if (postal === zipCode) {
                    foundStores.push(store);
                }
            });
        } else {
            foundStores = stores;
        }
        clearLocations();
        displayStores(foundStores);
        showStoresMarkers(foundStores);
        setOnClickListener();
      }

      function clearLocations() {
        infoWindow.close();
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers.length = 0;
      }

      function setOnClickListener() {
        var storeElements = document.querySelectorAll('.store-container');
        storeElements.forEach(function(element, index) {
            element.addEventListener('click', function() {
                new window.google.maps.event.trigger(markers[index], "click");
            });
        });
      }

      function displayStores(storesToShow: any[]) {
        var storesHtml = '';
        storesToShow.forEach((store, index) => {
            // ... (Orijinal displayStores içeriği buraya gelecek, Next.js uyumlu hale getirildi)
            var featureWrap = store.features.map((feature: any) => 
                `<div class="store-info-status"><img src="/img/${feature.code}.svg" /> ${feature.name}</div>`
            ).join('');

            storesHtml += `
              <div class="store-container">
                  <div class="store-info-window">
                    <div class="store-info-name"><img src="/img/icon-map2.png" class="store-icon"> ${store.name}</div>
                    <div class="store-flex">
                        <div>
                            <div class="store-info-status">Type: ${store.ownershipTypeCode}</div><br>
                            <div class="store-info-address">${store.addressLines[0]}</div><br>
                            <div class="store-info-status">Phone: <a href="#!" tabindex="0">${store.phoneNumber}</a></div>
                            <div class="store-info-status">Mobile: <a href="#!">${store.mobileNumber}</a></div>
                            <div class="store-info-status"><a href="#!">${store.emailAddress}</a></div><br>
                            <div class="store-info-status">Distance 12.9km</div>
                            <div class="store-info-status"><a href="#!">Show Route</a></div>
                        </div>
                        <div>${featureWrap}</div>
                        <div><div class="store-info-status">${store.openStatusText}</div></div>
                    </div>
                </div>
              </div>`;
        });
        const storesListContainer = document.querySelector('.stores-list');
        if (storesListContainer) {
            storesListContainer.innerHTML = storesHtml;
        }
      }

      function showStoresMarkers(storesToShow: any[]) {
        var bounds = new window.google.maps.LatLngBounds();
        storesToShow.forEach((store, index) => {
            var latlng = new window.google.maps.LatLng(store.coordinates.latitude, store.coordinates.longitude);
            bounds.extend(latlng);
            createMarker(latlng, store.name, store, index + 1);
        });
        map.fitBounds(bounds);
      }

      function createMarker(latlng: any, name: string, store: any, index: number) {
          // ... (Orijinal createMarker içeriği buraya gelecek)
          var html = `<div>...InfoWindow içeriği...</div>`; // Kısaltıldı
          var marker = new window.google.maps.Marker({
              map: map,
              position: latlng,
              icon: {
                  url: "/img/icon-map.png",
                  scaledSize: new window.google.maps.Size(40, 40),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(20, 40)
              }
          });
          window.google.maps.event.addListener(marker, 'click', function() {
              infoWindow.setContent(html);
              infoWindow.open(map, marker);
          });
          markers.push(marker);
      }
    };
  }, []);

  return (
    <>
      <div id="map" style={{ height: '500px' }}></div>
      <div className="stunning-header-content medium-padding80">
        <h5 className="stunning-header-title">Your nearest locations</h5>
        <p>7 Locations found</p>
      </div>
      <div className="stores-list-container">
        <div className="stores-list">
          {/* Mağaza listesi JavaScript ile doldurulacak */}
        </div>
      </div>
      {/* API Anahtarınızı buraya ekleyin */}
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap"
        async
        defer
      />
    </>
  );
};

export default StoreFinderMap;