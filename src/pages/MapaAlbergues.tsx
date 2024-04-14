import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiaHJkYW5pZWxzIiwiYSI6ImNsdGppdmNwaTBxbzUyanBuY3Q5anFvNjcifQ.PPTUzbG7vHYy_4vYY9w2OA';
interface Shelter {
  ciudad: string;
  codigo: string;
  edificio: string;
  coordinador: string;
  telefono: string;
  capacidad: string;
  lat: string;
  lng: string;
}
const Map: React.FC = () => {
  const [shelters, setShelters] = useState<Shelter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://adamix.net/defensa_civil/def/albergues.php');
        const data = await response.json();
        console.log('Data from API:', data);

        setShelters(data.datos);

        // Initialize Mapbox map
        const map = new mapboxgl.Map({
          container: 'map-container',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-69.89178, 18.47893], // Set initial map center (example coordinates)
          zoom: 12, // Set initial zoom level
        });

        // Add markers for each shelter
        data.datos.forEach((shelter: { lng: string; lat: string; edificio: any; coordinador: any; telefono: any; capacidad: any; }) => {
          const marker = new mapboxgl.Marker().setLngLat([parseFloat(shelter.lng), parseFloat(shelter.lat)]).addTo(map);
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${shelter.edificio}</h3><p>Coordinator: ${shelter.coordinador}</p><p>Phone: ${shelter.telefono}</p><p>Capacity: ${shelter.capacidad}</p>`
          );

          // Add popup to marker when clicked
          marker.setPopup(popup);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Shelters Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div id="map-container" style={{ width: '100%', height: '100%' }}></div>
        <IonList>
          {shelters.map((shelter, index) => (
            <IonItem key={index}>
              <IonLabel>{shelter.edificio}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Map;
