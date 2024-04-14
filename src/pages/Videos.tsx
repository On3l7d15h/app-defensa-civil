import React, { useState, useEffect } from 'react';
import {
  IonAlert, IonButtons, IonContent, IonHeader, IonLoading,
  IonMenuButton, IonPage, IonTitle, IonToolbar
} from '@ionic/react';

const Videos: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      setShowLoading(true);
      try {
        const response = await fetch('https://adamix.net/defensa_civil/def/videos.php');
        const data = await response.json();
        if (data.exito && Array.isArray(data.datos)) {
          setVideos(data.datos);
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
          <IonTitle>Videos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="bg-gray-200">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Videos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full">
          {videos.map((video, index) => (
            <div key={index} className="shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
              <iframe
                title={video.titulo}
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.link}`}
                frameBorder="0"
                allowFullScreen
              />

              <div className="relative p-4">
                <h3 className="text-base md:text-xl font-medium text-gray-800">
                  {video.titulo}
                </h3>

                <p className="mt-4 text-base md:text-lg text-gray-600">
                  {video.descripcion}
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

export default Videos;
