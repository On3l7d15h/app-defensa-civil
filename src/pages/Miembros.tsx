import React, { useState, useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLoading, IonAlert } from '@ionic/react';

const Miembros: React.FC = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      setShowLoading(true);
      try {
        const response = await fetch('https://adamix.net/defensa_civil/def/miembros.php');
        const data = await response.json();
        if (data.exito && Array.isArray(data.datos)) {
          setMembers(data.datos);
        } else {
          throw new Error('Error fetching data');
        }
      } catch (error: any) {
        console.error(error);
        setErrorMessage(error.message || 'Error desconocido');
        setShowAlert(true);
      } finally {
        setShowLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Miembros</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Miembros</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full">
          {members.map((member, index) => (
            <div key={index} className="shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
              <img
                src={member.foto}
                alt={member.nombre}
                className="w-full h-auto"
              />

              <div className="relative p-4">
                <h3 className="text-base md:text-xl font-medium text-gray-800">
                  {member.nombre}
                </h3>

                <p className="mt-2 text-base md:text-lg text-gray-600">
                  Cargo: {member.cargo}
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

export default Miembros;
