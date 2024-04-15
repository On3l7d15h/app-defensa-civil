import { IonAlert, IonButtons, IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonLoading, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router';


const Albergues: React.FC = () => {

  const [albergues, setAlbergues] = useState<any[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory()

  const handleOnNavigation = (state: any) => {
    history.push("/Albergues/Albergue",
      {
        state: state
      }
    )
  }

  useEffect(() => {
    const fetchVideos = async () => {
      setShowLoading(true);
      try {
        const response = await fetch('https://adamix.net/defensa_civil/def/albergues.php');
        const data = await response.json();
        if (data.exito && Array.isArray(data.datos)) {
          console.log(data)
          setAlbergues(data.datos);
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
          <IonTitle>Albergues</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Albergues</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonList>
          {
            albergues?.map((albergue: any) => {
              return <IonItemSliding>
              <IonItem>
                <IonLabel>{albergue.ciudad} - {albergue.edificio}</IonLabel>
              </IonItem>
  
              <IonItemOptions>
                <IonItemOption onClick={() => handleOnNavigation(albergue)} color="primary">Ver información</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
            })
          }
        </IonList>

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

export default Albergues;
