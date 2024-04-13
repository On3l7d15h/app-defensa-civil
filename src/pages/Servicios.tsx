import React, { useState, useEffect } from 'react';
import {
  IonAlert, IonButtons, IonContent, IonHeader, IonLoading,
  IonMenuButton, IonPage, IonTitle, IonToolbar
} from '@ionic/react';

const Servicios: React.FC = () => {
  const [acciones, setAcciones] = useState<any[]>([]); // Assuming initial state as an array
  const [showLoading, setShowLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const cargarAcciones = async () => {
      setShowLoading(true);
      try {
        const response = await fetch('https://adamix.net/defensa_civil/def/servicios.php');
        const data = await response.json();
        console.log(data); // Ensure this logs an array or adjust accordingly
        // Assuming 'data' should be an array directly; if not, adjust this line
        setAcciones(Array.isArray(data.datos) ? data.datos : []);
      } catch (error: any) {
        console.error(error);
        setErrorMessage(error.message || 'Error desconocido');
        setShowAlert(true);
        setAcciones([]); // Maintain 'acciones' as an array even in error cases
      } finally {
        setShowLoading(false);
      }
    };

    cargarAcciones();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Servicios</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="bg-gray-200">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Servicios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full">
          {acciones.map((accion, index) => (
            <div key={index} className="shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
              <img
                className="object-cover w-full h-48"
                src={accion.foto}
                alt={accion.nombre}
              />

              <div className="relative p-4">
                <h3 className="text-base md:text-xl font-medium text-gray-800">
                  {accion.nombre}
                </h3>

                <p className="mt-4 text-base md:text-lg text-gray-600">
                  {accion.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <IonLoading
          isOpen={showLoading}
          message={'Cargando...'}
        />

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Error'}
          message={errorMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Servicios;
