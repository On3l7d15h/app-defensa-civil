import { IonAlert, IonBadge, IonButtons, IonContent, IonHeader, IonImg, IonLoading, IonMenuButton, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';

const MedidasPreventivas: React.FC = () => {

  const [noticias, setNoticias] = useState<any[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory()

  const handleOnNavigation = (state: any) => {
    history.push("/Medidas/Medida",
      {
        state: state
      }
    )
  }

  useEffect(() => {
    const fetchVideos = async () => {
      setShowLoading(true);
      try {
        const response = await fetch('https://adamix.net/defensa_civil/def/medidas_preventivas.php');
        const data = await response.json();
        if (data.exito && Array.isArray(data.datos)) {
          console.log(data)
          setNoticias(data.datos);
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

    fetchVideos();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Medidas Preventivas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="bg-gray-200">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Medidas Preventivas</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full">
          {noticias.map((noticia, index) => (
            <div onClick={() => handleOnNavigation(noticia)} key={index} className="shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
              
              <section>
                <IonImg src={noticia.foto} className="w-full" />
              </section>

              <section className="relative px-4">
                <h3 className="text-base md:text-xl font-medium text-gray-800 font-bold">
                  {noticia.titulo}
                </h3>
              </section>

              <center>
                <IonBadge color="primary" className="w-auto p-2 px-2 ml-2 rounded-full">
                  {noticia.fecha}
                </IonBadge>
              </center>

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
  )
};

export default MedidasPreventivas;
